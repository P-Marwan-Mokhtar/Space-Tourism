import React, { useState } from "react";
import { useDataContext } from "../context/DataContext";

const Technology = () => {
  const { data } = useDataContext();
  const technology = data.technology || [];
  const idData = technology.map((data) => data.id);
  const [technologyId, setTechnologyId] = useState(1);

  return (
    <section
      id="technology"
      className="w-full h-[100vh] bg-[url(/src/assets/technology/background-technology-desktop.jpg)] bg-no-repeat bg-cover "
    >
      <div className="  container  pt-[100px] md:pt-[150px] xl:pt-[150px]">
        <h1 className="text-white mb-[20px] md:mb-[50px] text-xl justify-center md:justify-start md:text-[25px] flex gap-[15px] tracking-wider font-[Barlow Condensed] ">
          <span className="text-gray-600 font-medium">03</span> SPACE LAUNCH 101
        </h1>
        <div className="flex">
          {technology.map((data, index) =>
            data.id === technologyId ? (
              <div
                key={index}
                className="flex flex-col  gap-[20px]  items-center  lg:flex-row lg:justify-between  w-full "
              >
                <div className="flex flex-col lg:items-start md:flex-row lg:flex-col xl:flex-row items-center gap-[30px] md:gap-[50px] lg:gap-[30px] xl:gap-[10%]">
                  <ul className="flex flex-row md:flex-col lg:flex-row xl:flex-col gap-[30px]">
                    {idData.map((id) => (
                      <li
                        onClick={() => setTechnologyId(id)}
                        className={`w-[40px] md:w-[55px]  lg:w-[80px] h-[40px] md:h-[55px] lg:h-[80px] cursor-pointer transition-all duration-200 border-[1px] border-white bg-transparent  text-white md:text-[25px] flex items-center justify-center rounded-full ${
                          id === data.id ? "bg-white !text-black" : ""
                        }`}
                      >
                        {id}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center md:items-start flex-col gap-[10px] md:gap-[20px]">
                    <h3 className="text-[20px] font-serif  md:text-[40px] text-gray-500">
                      THE TECHNOLOGY...
                    </h3>
                    <h2 className="text-white text-[20px] font-[PlayfairDisplay]  md:text-[40px]">
                      {data.name.toUpperCase()}
                    </h2>
                    <p className="max-w-[600px] text-sm text-center md:text-start xl:text-[20px] text-[#D0D6F9]">
                      {data.description}
                    </p>
                  </div>
                </div>
                <img
                  src={data.images.portrait}
                  alt=""
                  className="  h-[200px] w-[90%] md:h-[400px] lg:h-auto lg:w-[80%] xl:w-[50%] 2xl:w-[40%]  rounded-[10px]  order-[-1] lg:order-2 "
                />
              </div>
            ) : (
              ""
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Technology;
