import SimpleTitle from "../texts/SimpleTitle";
import SidebarLinkText from "../texts/SidebarLinkText";
import mail from "../../assets/banners/socials/mail.png";
import youtube from "../../assets/banners/socials/youtube.png";
import facebook from "../../assets/banners/socials/facebook.png";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const Sidebar = ({ handleClose, showSidebar = false }) => {
  const [enabled, setEnabled] = useState(false);
  const history = useHistory();

  const handleRedirect = (to) => {
    return history.push(to);
  };

  return (
    showSidebar && (
      <div
        onClick={handleClose}
        className={"fixed w-full h-full top-0 bg-gray-400 bg-opacity-60 z-10"}
      >
        <div className="w-60 h-full shadow-md bg-white px-1 fixed z-20">
          <img src={process.env.PUBLIC_URL + "/banners/example.webp"} alt="" />
          <div className={"m-4"}>
            <SimpleTitle className={"text-blue-300"}>Menu</SimpleTitle>
          </div>
          <ul className="relative">
            <li className="relative">
              <SidebarLinkText
                onClick={() => {
                  handleRedirect("/home");
                }}
                text={"Beranda"}
              />
            </li>
            <li className="relative">
              <SidebarLinkText
                onClick={() => {
                  handleRedirect("/about");
                }}
                text={"About"}
              />
            </li>
            <li className="relative">
              <SidebarLinkText
                onClick={() => {
                  handleRedirect("/jasa");
                }}
                text={"Jasa"}
              />
            </li>
            <li className="relative">
              <SidebarLinkText
                onClick={() => {
                  handleRedirect("/kegiatan");
                }}
                text={"Kegiatan"}
              />
            </li>
            <li className="relative">
              <SidebarLinkText
                onClick={() => {
                  handleRedirect("/wayang");
                }}
                text={"Wayang"}
              />
            </li>
            <li className="relative">
              <SidebarLinkText
                onClick={() => {
                  handleRedirect("/galeri");
                }}
                text={"Galeri"}
              />
            </li>
          </ul>
          <div className={"m-4"}>
            <SimpleTitle className={"text-blue-300"}>Settings</SimpleTitle>
          </div>
          <ul className="relative">
            <li className="relative flex justify-between">
              <SidebarLinkText text={"Dark Mode"} />
              <div className={"my-auto mr-4"}>
                <div className="flex">
                  <label className="inline-flex relative items-center mr-5 cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      checked={enabled}
                      readOnly
                    />
                    <div
                      onClick={() => {
                        setEnabled(!enabled);
                      }}
                      className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"
                    />
                  </label>
                </div>
              </div>
            </li>
          </ul>
          <div className={"m-4"}>
            <SimpleTitle className={"text-blue-300"}>Contact</SimpleTitle>
          </div>
          <ul className="relative mx-2">
            <li className="relative grid grid-cols-3 gap-8 items-center">
              <div>
                <img src={mail} alt="Mail" />
              </div>
              <div>
                <img src={youtube} alt="Youtube" />
              </div>
              <div>
                <img src={facebook} alt="Facebook" />
              </div>
            </li>
          </ul>
        </div>
      </div>
    )
  );
};
export default Sidebar;
