import SimpleTitle from "../texts/SimpleTitle";
import SidebarLinkText from "../texts/SidebarLinkText";

const Sidebar = ({ handleClose, showSidebar = false }) => {
  return (
    showSidebar && (
      <div
        onClick={handleClose}
        className={"fixed w-full h-full top-0 bg-gray-400 bg-opacity-60 z-50"}
      >
        <div className="w-60 h-full shadow-md bg-white px-1 fixed z-20">
          <img src={process.env.PUBLIC_URL + "/banners/example.webp"} alt="" />
          <div className={"m-4"}>
            <SimpleTitle className={"text-blue-300"}>Menu</SimpleTitle>
          </div>
          <ul className="relative">
            <li className="relative">
              <SidebarLinkText text={"Beranda"} />
            </li>
            <li className="relative">
              <SidebarLinkText text={"About"} />
            </li>
            <li className="relative">
              <SidebarLinkText text={"Jasa"} />
            </li>
            <li className="relative">
              <SidebarLinkText text={"Kegiatan"} />
            </li>
            <li className="relative">
              <SidebarLinkText text={"Wayang"} />
            </li>
            <li className="relative">
              <SidebarLinkText text={"Galeri"} />
            </li>
          </ul>
          <div className={"m-4"}>
            <SimpleTitle className={"text-blue-300"}>Menu</SimpleTitle>
          </div>
          <ul className="relative">
            <li className="relative flex justify-between">
              <SidebarLinkText text={"Dark Mode"} />
              <div className={"my-auto mr-4"}>...</div>
            </li>
          </ul>
          <div className={"m-4"}>
            <SimpleTitle className={"text-blue-300"}>Contact</SimpleTitle>
          </div>
          <ul className="relative mx-2">
            <li className="relative grid grid-cols-3 gap-8">
              <div>Logo</div>
              <div>Logo</div>
              <div>Logo</div>
            </li>
          </ul>
        </div>
      </div>
    )
  );
};
export default Sidebar;
