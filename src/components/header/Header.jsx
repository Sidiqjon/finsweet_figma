import React, { useState } from 'react'
import { Link, NavLink, useLocation } from "react-router-dom";
import "./Header.css"
import Logo from "../../assets/logo.svg"

const Header = () => {

   const [changeNavbar, setChangeNavbar] = useState(false);

  return (
      <header className="bg-[#1C1E53] w-full">
         <nav className="container min-h-[92px] text-[#BBBBCB] flex items-center justify-between">
            <div>
               <NavLink to="/">
                  <img src={Logo} alt="Finsweet logo" />
               </NavLink>
            </div>
            <ul className={`flex gap-[40px] items-center max-[800px]:fixed max-[800px]:w-[200px] max-[800px]:top-0 max-[800px]:h-screen bg-[#1C1E53] max-[800px]:flex-col max-[800px]:pt-10 duration-300 ${changeNavbar ? "max-[800px]:left-0" : "max-[800px]:-left-[200px]"}`}>
                <li>
                   <NavLink onClick={() => setChangeNavbar(false)} className="navbarlink" to="/">
                      Home
                   </NavLink>
                </li>
                <li>
                   <NavLink onClick={() => setChangeNavbar(false)} className="navbarlink" to="/about">
                      About Us
                   </NavLink>
                </li>
                <li>
                   <NavLink onClick={() => setChangeNavbar(false)} className="navbarlink" to="/pricing">
                      Pricing
                   </NavLink>
                </li>
                <li>
                   <NavLink onClick={() => setChangeNavbar(false)} className="navbarlink" to="/work">
                      Work
                   </NavLink>
                </li>
                <li>
                   <NavLink onClick={() => setChangeNavbar(false)} className="navbarlink" to="/blog">
                      Blog
                   </NavLink>
                </li>
               <li className="border-[2px] border-[#F4F6FC33] px-12 py-4 rounded-[41px] border-opacity-20 max-[800px]:px-8 max-[800px]:py-3 ">
                  <NavLink onClick={() => setChangeNavbar(false)} className="navbarlink" to="/contact">
                     Contact Us
                  </NavLink>
               </li>
            </ul>
            <button className="hidden max-[800px]:block" onClick={() => setChangeNavbar((p) => !p)}>
               <div className="bg-[#BBBBCB] w-8 h-1 mt-0.5 rounded"></div>
               <div className="bg-[#BBBBCB] w-8 h-1 mt-0.5 rounded"></div>
               <div className="bg-[#BBBBCB] w-8 h-1 mt-0.5 rounded"></div>
               <div className="bg-[#BBBBCB] w-8 h-1 mt-0.5 rounded"></div>
            </button>
         </nav>
      </header>
  )
}

export default Header
