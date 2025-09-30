import React, { useState } from "react";
import logo from "/src/assets/shared/logo.svg";
import close from "/src/assets/shared/icon-close.svg";
const Header = () => {
  const [links, setLinks] = useState([
    { link: "HOME", location: "#" },
    { link: "DESTINATION", location: "#destination" },
    { link: "CREW", location: "#crew" },
    { link: "TECHNOLOGY", location: "#technology" },
  ]);
  const [isActive, setIsActive] = useState(false);
  const [isLink, setIsLink] = useState("#");
  return (
    <header className="fixed top-0 w-full z-10">
      <div className=" lg:pl-[64px] py-[30px] md:py-0 pl-[34px] pr-[34px] md:pr-0 flex items-center justify-between relative">
        <img className="  w-[35px] md:w-auto " src={logo} alt="" />
        <img
          src="/src/assets/shared/icon-hamburger.svg"
          className="cursor-pointer hover:scale-[1.1] transition-all duration-200 md:hidden"
          alt=""
          onClick={() => setIsActive(true)}
        />
        <nav
          className={` bg-[#47444446] duration-200 md:transition-none right-[-100%] md:duration-0 md:bg-[#7170704d]  md:flex md:right-0 h-full md:h-full md:w-auto w-[300px] fixed top-0 backdrop-blur-[30px] md:relative md:p-0  pt-[100px] ${
            isActive ? "!right-0" : ""
          }`}
        >
          <ul
            className={` max-w-full pl-[30px] lg:p-0  flex-col md:flex-row flex md:w-[650px] lg:w-[736px] lg:justify-center font-[Barlow Condensed] items-start lg:items-center gap-[30px] text-white `}
          >
            <img
              src={close}
              alt=""
              onClick={() => setIsActive(false)}
              className="absolute top-8 right-8 cursor-pointer w-[25px] md:hidden"
            />
            {links.map((data, index) => (
              <a href={`${isLink}`} key={index}>
                <li
                  onClick={() => setIsLink(data.location) || setIsActive(false)}
                  className={`tracking-wider   transition-all duration-200  h-full py-[10px] md:py-[40px] relative after:w-0   flex gap-[10px] after:h-[3px]   after:absolute after:bg-white after:bottom-0 hover:after:w-full after:transition-all after:duration-200  ${
                    isLink === data.location ? "after:w-full" : ""
                  }`}
                >
                  <span className="font-bold">0{index}</span>
                  {data.link}
                </li>
              </a>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
