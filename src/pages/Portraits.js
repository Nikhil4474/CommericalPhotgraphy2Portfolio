import React from "react"
import Image1 from "../img/portraits/Inuganti_OffCampus_Nick1.jpg"
import Image2 from "../img/portraits/Inuganti_OffCampus_Nick2.jpg"
import Image3 from "../img/portraits/Inuganti_OffCampus_Nick3.jpg"
import Image4 from "../img/portraits/Inuganti_OffCampus_Nick4.jpg"
import Image5 from "../img/portraits/Inuganti_Studio_Thomas1.jpg"
import Image6 from "../img/portraits/Inuganti_Outside_Thomas2.jpg"

import { Link } from "react-router-dom"

const PortraitPhotos = () => {
  return (
    <section className="section">
      <div className="container mx-auto h-full relative">
        <div className="flex flex-col lg:flex-row h-full items-center justify-start gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb-8">
          <div className="flex flex-col lg:items-start">
            <h1 className="h1">Portraits</h1>
            <p className="flex flex-col lg:items-start">
              Here are some of my best portraits.
            </p>
            <Link
              to={"/contact"}
              className="btn mb-[30px] mx-auto lg:mx-0">
              Hire Me
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:gap-2">
            <div className="max-2-[250px lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
              <img
                className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
                src={Image1}
                alt=""
              />
            </div>
            <div className="max-2-[250px lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
              <img
                className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
                src={Image2}
                alt=""
              />
            </div>
            <div className="max-2-[250px lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
              <img
                className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
                src={Image3}
                alt=""
              />
            </div>
            <div className="max-2-[250px lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
              <img
                className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
                src={Image4}
                alt=""
              />
            </div>
            <div className="max-2-[250px lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
              <img
                className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
                src={Image5}
                alt=""
              />
            </div>
            <div className="max-2-[250px lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden">
              <img
                className="object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500"
                src={Image6}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PortraitPhotos
