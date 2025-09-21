import { useEffect, useState } from "react";
import Marquee from "../Marquee";
import { Link } from "react-router-dom";
const AdminPanelUrl = import.meta.env.VITE_ADMIN_PANEL_API;

export default function NewsTicker() {
    const [news, setNews] = useState([])
    useEffect(() => {

        const requestOptions: any = {
            method: "GET",
            redirect: "follow",
        };
        fetch(
            `${AdminPanelUrl}/trending-new-events`,
            requestOptions
        ).then((response) => response.json())
            .then(({ data }) => {
                setNews(data)
            }).catch(() => {

            })

    }, [])

    return (
        <div className="w-full overflow-hidden bg-gray-600/30 relative -mt-11  text-white">
            <Marquee pauseOnHover={true} duration="[--duration:5s]">
                <div
                    className="flex whitespace-nowrap gap-10 px-4"
                >
                    {/* Duplicate news for infinite scrolling */}
                    {news.map((item, i) => (
                        <span key={i} className="flex items-center gap-3 text-lg font-medium">
                            <span>{item.Title}</span>
                            {
                                item?.Url_text && (
                                    <Link
                                        to={item.Url_link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-400 underline hover:text-blue-300"
                                    >
                                        {item.Url_text}
                                    </Link>

                                )
                            }
                        </span>
                    ))}
                </div>
            </Marquee>
        </div >
    );
}
