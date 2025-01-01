const AdminPanelUrl = import.meta.env.VITE_ADMIN_PANEL_API;
const DataProcess = (data) => {
    return data.map(v => {
        if (v.image && Array.isArray(v.image)) {
            return { ...v, image: v.image.map(a => AdminPanelUrl.replace("/api", "") + a.url) }
        } else if (v.Image && Array.isArray(v.Image)) {
            return { ...v, image: v.Image.map(a => AdminPanelUrl.replace("/api", "") + a.url) }
        } else if (v.image) {
            return { ...v, image: AdminPanelUrl.replace("/api", "") + v.image.url }
        } else if (v.Image) {
            return { ...v, image: AdminPanelUrl.replace("/api", "") + v.Image.url }
        } else {
            return { ...v }
        }
    })
}
export default DataProcess