import React, { useState } from "react";
import { useDataContext } from "../context/DataContext";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaArrowAltCircleLeft } from "react-icons/fa";
const Crew = () => {
  const { data } = useDataContext();
  const crew = data.crew || [];
  const idData = crew.map((data) => data.id);
  const [crewsId, setCrewsId] = useState(1);

  return (
    <section
      id="crew"
      className="w-full h-[100vh] bg-[url(/src/assets/crew/background-crew-desktop.jpg)] bg-no-repeat bg-cover "
    >
      <div className="container h-[100%] relative pt-[100px]  md:pt-[150px]">
        <h1 className="text-white md:text-[25px]  mb-[15px] md:mb-[30px] md:justify-start lg:mb-0 flex gap-[15px]   justify-center ">
          <span className="text-gray-600 font-medium">02 </span> MEET YOUR CREW
        </h1>
        <div className="h-[90%] lg:h-auto pb-[10px]">
          {crew.map((data, index) =>
            data.id === crewsId ? (
              <div
                key={index}
                className=" h-full text-center  gap-[35px] md:gap-0  lg:text-start flex-col flex lg:flex-row justify-between items-center  transition-all duration-200"
              >
                <div className="flex flex-col mb-[50px] md:mb-0">
                  <>
                    <span className=" text-[20px] md:text-[30px] lg:text-[40px] text-gray-500 font-[Bellefair] ">
                      {data.role.toUpperCase()}
                    </span>
                    <h2 className=" text-[20px] md:text-[40px]  lg:text-[70px] max-w-[700px] mb-[10px] lg:mb-[20px] text-white font-[Barlow]">
                      {data.name.toUpperCase()}
                    </h2>
                    <p className=" text-[#D0D6F9] text-sm max-w-[650px] md:text-[20px]">
                      {data.bio}
                    </p>
                  </>
                  <div className="flex left-[50%] lg:left-0 translate-[-50%] lg:translate-0 absolute items-center justify-center  max-w-full top-[52%] md:top-[48%] lg:top-auto lg:bottom-[70px] gap-[20px] lg:gap-[40px]">
                    <button
                      className="text-white text-[25px] "
                      onClick={() =>
                        setCrewsId((prev) => (prev > 1 ? prev - 1 : prev))
                      }
                    >
                      <FaArrowAltCircleLeft />
                    </button>
                    {idData.map((id) => (
                      <span
                        className={`w-[10px] h-[10px]  lg:w-[15px] lg:h-[15px] cursor-pointer bg-[#373843] transition-all duration-200 rounded-full block ${
                          data.id === id ? "bg-white" : ""
                        }`}
                        onClick={() => setCrewsId(id)}
                      ></span>
                    ))}
                    <button
                      className="text-white text-[25px] "
                      onClick={() =>
                        setCrewsId((prev) => (prev < 4 ? prev + 1 : 1))
                      }
                    >
                      <FaArrowAltCircleRight />
                    </button>
                  </div>
                </div>
                <img
                  src={data.images.png}
                  className="w-[170px] md:w-[300px]  lg:w-auto max-w-full"
                  alt=""
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

export default Crew;
