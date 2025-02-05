const AdminPanelUrl = import.meta.env.VITE_ADMIN_PANEL_API;
const AdminPanelImgUrl = import.meta.env.VITE_ADMIN_PANEL_IMG_API;

const DataProcess = (data) => {
  return data.map((v) => {
    if (v.image && Array.isArray(v.image)) {
      return { ...v, image: v.image.map((a) => AdminPanelImgUrl + a.url) };
    } else if (v.Image && Array.isArray(v.Image)) {
      return { ...v, image: v.Image.map((a) => AdminPanelImgUrl + a.url) };
    } else if (v.image) {
      return { ...v, image: AdminPanelImgUrl + v.image.url };
    } else if (v.Image) {
      return { ...v, image: AdminPanelImgUrl + v.Image.url };
    } else {
      return { ...v };
    }
  });
};
export default DataProcess;
