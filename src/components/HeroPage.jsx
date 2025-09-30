import React, { useState } from "react";

const HeroPage = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <section className="bg-[url(/src/assets/home/background-home-mobile.jpg)]  bg-center lg:bg-[url(/src/assets/home/background-home-desktop.jpg)] w-full h-[100vh] bg-cover md:bg-[length:100%_100%]  bg-no-repeat">
      <div className="container h-full">
        <div className="flex flex-col text-center lg:text-start   lg:flex-row justify-center lg:justify-between items-center h-full text-white pt-[100px]">
          <div>
            <h2 className="font-[Barlow Condensed] text-[18px]  text-[#D0D6F9] tracking-widest">
              SO, YOU WANT TO TRAVEL TO
            </h2>
            <h1 className="  text-[90px] md:text-[110px] tracking-widest font-[Bellefair] mb-[20px]">
              SPACE
            </h1>
            <p className="max-w-[540px] text-[#D0D6F9] text-base/loose  ">
              Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!
            </p>
          </div>
          <div
            className={`rounded-full w-[250px] h-[250px] md:h-[400px] md:w-[400px] lg:w-[500px]  lg:h-[500px]  flex justify-center items-center transition-all duration-200 ${
              isHovered ? "bg-[#ffffff1f]" : ""
            } `}
          >
            <a href="#destination">
              {" "}
              <button
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="w-[144px] h-[144px] md:w-[272px] md:h-[272px] font-light tracking-wider rounded-full text-[20px] md:text-[35px]  bg-white text-black  hover:text-[#0000006d] font-[Bellefair] transition-all duration-200 cursor-pointer"
              >
                EXPLORE
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroPage;
