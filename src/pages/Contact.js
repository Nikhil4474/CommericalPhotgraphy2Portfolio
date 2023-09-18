import React from "react"
import me from "../img/contact/me.jpeg"

const Contact = () => {
  return (
    <section className="section bg-white">
      <div className="container mx-auto h-full">
        <div className="flex flex-col lg:flex-row h-full items-center justify-start pt-36 gap-x-8 text-center lg:text-left">
          <div>bg</div>
          <div className="lg:flex lg:pt-32 px-4">
            <h1 className="h1">Contact me</h1>
            <p className="">I would love to get suggestions from you.</p>
            <form className="">
              <div className='flex gap-x-10'>
                <input
                  className="outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879"
                  type="text"
                  placeholder="Your name"
                />
                <input
                  className="outline-none border-b border-b-primary h-[60px] bg-transparent font-secondary w-full pl-3 placeholder:text-[#757879"
                  type="text"
                  placeholder="Your email address"
                />
              </div>
            </form>
          </div>
          <div>image</div>
        </div>
      </div>
    </section>
  )
}

export default Contact
