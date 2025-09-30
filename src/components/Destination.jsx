import React, { useState } from "react";
import { useDataContext } from "../context/DataContext";

const Destination = () => {
  const { data } = useDataContext();
  const planetsName = ["Moon", "Mars", "Europa", "Titan"];
  const destinations = data.destinations || [];
  const [planetName, setPlanetName] = useState("Moon");
  return (
    <section
      id="destination"
      className="w-full h-[100vh] bg-[url(/src/assets/destination/background-destination-desktop.jpg)] bg-no-repeat bg-cover "
    >
      <div className="container pt-[100px] md:pt-[130px] lg:pt-[150px] ">
        <h1 className="text-white text-[20px] md:text-[25px] md:justify-start flex justify-center gap-[15px] mb-[30px] lg:mb-[60px]">
          <span className="text-gray-600 font-medium block ">01</span> PICK YOUR
          DESTINATION
        </h1>
        <div>
          {destinations.map((data) =>
            planetName === data.name ? (
              <div
                className="flex   justify-between  flex-col lg:flex-row gap-[50px] lg:gap-[150px] lg:justify-center place-content-center items-center text-white"
                key={data.name}
              >
                <img
                  src={data.images.png && data.images.webp}
                  className="w-[150px] md:w-[300px] lg:w-auto"
                  alt=""
                />
                <div className=" max-w-full">
                  <ul className="flex lg:justify-start justify-center  gap-[25px] md:gap-[30px] font-[BarlowCondensed]">
                    {planetsName.map((name) => (
                      <li
                        key={name}
                        className={`relative h-full text-[#D0D6F9]  lg:text-[20px] pb-[10px] hover:text-white transition-all duration-200  cursor-pointer  flex gap-[10px] after:h-[3px] after:w-0 after:absolute after:bg-white after:bottom-0 hover:after:w-full after:transition-all after:duration-200 ${
                          name === data.name ? "after:w-full" : ""
                        }`}
                        onClick={() => setPlanetName(name)}
                      >
                        {name.toUpperCase()}
                      </li>
                    ))}
                  </ul>
                  <h1 className="font-[Bellefair] text-center text-[40px] md:text-[100px] lg:text-[120px] lg:text-start">
                    {data.name.toUpperCase()}
                  </h1>
                  <div className="flex md:max-w-[600px] lg:max-w-[500px] max-w-full flex-col text-center lg:text-start gap-[20px] lg:gap-[30px]">
                    <p className=" text-sm md:text-[16px] lg:text-[20px] text-[#D0D6F9] ">
                      {data.description}
                    </p>
                    <div className="h-[1px]  bg-gray-300 "></div>
                    <div className="flex  justify-between lg:justify-start   gap-[50px]">
                      <div>
                        <span className="text-[#D0D6F9]">AVG. DISTANCE</span>
                        <p className=" md:text-[25px]">
                          {data.distance.toUpperCase()}
                        </p>
                      </div>
                      <div>
                        <span className="text-[#D0D6F9]">EST. TRAVEL TIME</span>
                        <p className=" md:text-[25px] ">
                          {data.travel.toUpperCase()}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
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

export default Destination;
