import React from "react"
import Socials from "./Socials"
import Logo from "../img/header/logo.svg"
import MobileNav from "./MobileNav"
import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className="fixed w-full px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-[140px] flex items-center">
      <div className="flex items-center justify-between w-full">
        <Link
          to={"/"}
          className="mex-w-[200px]">
          <img
            src={Logo}
            alt=""
          />
        </Link>
        <nav className="hidden xl:flex gap-x-12 font-semibold">
          <Link
            to={"/"}
            className="text-[#696c6d] hover:text-primary transition">
            Home
          </Link>
          <Link
            to={"/about"}
            className="text-[#696c6d] hover:text-primary transition">
            About
          </Link>
          <Link
            to={"/favphotos"}
            className="text-[#696c6d] hover:text-primary transition">
            Fav Photos
          </Link>
          <Link
            to={"/portraits"}
            className="text-[#696c6d] hover:text-primary transition">
            Portraits
          </Link>
          <Link
            to={"/architecture"}
            className="text-[#696c6d] hover:text-primary transition">
            Architecture Photos
          </Link>
          <Link
            to={"/contact"}
            className="text-[#696c6d] hover:text-primary transition">
            Contact
          </Link>
        </nav>
      </div>
      <Socials />
      <MobileNav />
    </header>
  )
}

export default Header
