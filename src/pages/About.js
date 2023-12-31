import React from "react"
import me from "../img/about/me.JPG"
import { Link } from "react-router-dom"

const About = () => {
  return (
    <section className="section">
      <div className="container mx-auto h-full relative ">
        <div className="flex flex-col lg:flex-row h-full items-center justify-center gap-x-24 text-center lg:text-left lg:pt-16">
          <div className="flex-1 max-g-96 lg:max-h-max order-2 lg:order-none overflow-hidden">
            <img
              src={me}
              alt=""></img>
          </div>
          <div className="flex-1 pt-36 pb-14 lg:pt-0 lg:w-auto z-10 flex-col justify-center items-center lg:items-start">
            <h1 className="h1">About Me</h1>
            <p className="mb-12 max-w-sm">I am a Junior at Prosper High School in Texas. I have been interested in photography since 6th grade. I am currently taking Commercial Photography 2 which would be my 3rd year of photography classes. I am also certified in Adobe Photoshop, Adobe Illustrator, and well experienced in Adobe Premiere Pro.</p>
            <Link
              to={"/portfolio"}
              className="btn">
              View my work
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
