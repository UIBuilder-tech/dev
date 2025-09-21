import { useState, useEffect } from 'react';

type Props = {
    url:string;
    from?:string;
    noOfLinks:number;
};


const LinkPreview = ( props:Props ) => {
  const [previewData, setPreviewData] = useState<any>();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await fetch(props.url);
        // const data = await response.text();


        const isYouTubeVideo = isYouTubeURL(props.url);
        if (isYouTubeVideo) {
          const videoId = extractYouTubeVideoId(props.url);
          const videoThumbnail = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
       
          setPreviewData({
            videoId,
            videoThumbnail,
          });
          setLoading(false);
        } else {
            const response = await fetch(props.url);
            if(response.status===403){
              const title = props?.url;
              setPreviewData({
                title,
              });
            }else{
        const data = await response.text();
          const parser = new DOMParser();
          const doc = parser.parseFromString(data, 'text/html');
          const title = doc.querySelector('title')?.textContent || '';
          const description = doc.querySelector('meta[name="description"]')?.getAttribute('content') || '';
          const image = doc.querySelector('meta[property="og:image"]')?.getAttribute('content') || '';
          setPreviewData({
            title,
            description,
            image,
          });}
         
          setLoading(false);
        }
      } catch (error) {
        setLoading(false);
      }
    };


    fetchData();
  }, [props.url]);


  const isYouTubeURL = (url:string) => {
    return url.includes('youtube.com') || url.includes('youtu.be');
  };


  const extractYouTubeVideoId = (url:string) => {
    const patterns = [
        /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:watch(?:\/|.+?)?v=|embed\/|v\/|.+\?v=)|youtu\.be\/)([a-zA-Z0-9_-]{11}).*/,
        /(?:https?:\/\/)?(?:www\.)?youtube\.com\/live\/([a-zA-Z0-9_-]{11}).*/,
        /(?:https?:\/\/)?(?:www\.)?youtube\.com\/shorts\/([a-zA-Z0-9_-]{11}).*/,
    ];
 
    for (const pattern of patterns) {
        const match = url.match(pattern);
        if (match && match[1]) {
            return match[1];
        }
    }
 
  };


  if (loading) {
    return null
  }


  if (!previewData) {
    return null
  }


  const handleClick = () => {
    window.open(props.url, '_blank');
  };


  if (previewData.videoId) {
    return (
      <div onClick={handleClick} style={{ cursor: 'pointer' }}  className='mb-1'>
        <div className='flex flex-row items-center' style={{borderWidth:"1px",borderRadius:"5px", backgroundColor:"white"}}>
        {props.from==="CREATE" ? <img loading="lazy" src={previewData.videoThumbnail} alt="Video Thumbnail"  className='previewThumbnail'/> : (props?.noOfLinks <=1 && <img loading="lazy" src={previewData.videoThumbnail} alt="Video Thumbnail"  className='previewThumbnail'/>)}
        <div className='flex flex-col ml-2'>
        <span className='previewMainDescription'>{props.url}</span>
      <span  className='previewDescription'>Click here to view more ...</span>


        </div>
        </div>
      </div>
    );
  }

  return (
        <div onClick={handleClick} style={{ cursor: 'pointer' }} className='mb-1'>
        <div className={'flex flex-row p-1 items-center linkContainer'} style={{borderWidth:"1px",borderRadius:"5px"}}>
      {(previewData?.image) && ((props?.from === "CREATE" || props?.from === "MODAL") ? <img loading="lazy" src={previewData.image} alt="Link Preview" className={props.from==="CREATE"?"previewThumbnail":"postPreviewThumbnail"}/> : props?.noOfLinks <=1 && <img loading="lazy" src={previewData.image} alt="Link Preview" className={"postPreviewThumbnail"}/> )}
<div className='flex flex-col ml-2 justify-center'>
      {previewData?.title?.length > 0 ?
        <span className={props.from==="CREATE"?'previewTitle':'postPreviewTitle'}>{previewData.title}</span> :
        <span className={props.from==="CREATE"?'previewTitle':'postUrlPreviewTitle'} style={{color:"blue", width:"90%"}}>{props.url}</span>
        }
      {previewData?.description?.length ?
        <span className={props.from==="CREATE"?'previewDescription':'postPreviewDescription'} >{previewData.description}</span>:
        <span  className='previewDescription'>CLick here to view more ...</span>
        }
      </div>
      </div>
    </div>
  );
}


export default LinkPreview;
