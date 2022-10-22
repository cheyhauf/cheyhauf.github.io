import { Link } from "react-router-dom";
import { RiLinksFill } from 'react-icons/ri';
import { FaLaptopCode } from 'react-icons/fa';
import { BsClipboardData } from 'react-icons/bs';
import { AiOutlineCoffee } from 'react-icons/ai';
import { HiColorSwatch } from 'react-icons/hi';


const SideBar = () => {

    return (
    <>
        <div className={`fixed top-0 left-0 h-screen w-16 m-0
                        flex flex-col z-100 pt-16
                        bg-skin-nav text-skin-base shadow-lg`}>
          <SideBarIcon link="/Links" text="Quick Links" icon={<RiLinksFill size="28" />}></SideBarIcon>
          <SideBarIcon link="/Software" text="Software" icon={<FaLaptopCode size="28" />} />
          <SideBarIcon link="/Data" text="Data" icon={<BsClipboardData size="28" />} />
          <SideBarIcon link="/FranksDrank" text="Frank's Drank" icon={<AiOutlineCoffee size="28" />} />
          <SideBarIcon link="/Themes" text="Themes" icon={<HiColorSwatch size="28" />} />
        </div>
    </>       
    );
};

const SideBarIcon = ({ icon, text, link }) => (

  <div className="sidebar-icon group cursor-pointer">
    <Link className="h-[100%] w-[100%]" to={link}>
      <div className="absolute top-2.5 left-2.5">
      {icon}
      </div>
      <span className="sidebar-tooltip group-hover:scale-100">
          {text}
      </span>
    </Link>
  </div>

);

export default SideBar;