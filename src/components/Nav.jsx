import Logo from "../assets/logo.png"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { NavLink } from "react-router-dom";
import HamburgerBtn from "../assets/hamburger.png"
import { div } from "framer-motion/client";






function Nav() {
    let linkArr = [
        { name: "HOME", path: "/" },
        { name: "ABOUT", path: "/about" },
        { name: "PROPERTIES", path: "/properties" },
        { name: "CONTACTS", path: "/contacts" },
        { name: "FAQ", path: "/faq" },
    ]
    let [scroll, setScroll] = useState(false)

    useEffect(() => {
        function handleScroll() {
            setScroll(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return function cleanUp() {
            window.removeEventListener("scroll", handleScroll);
        }
    }, []);
    let [hidden, setHidden] = useState(true)

    function showNavItem() {
        setHidden(!hidden)
        // alert("clicked")

    }



    return (


        <nav className={`mx-auto px-5  shadow-lg sticky  top-0 left-0 z-10 w-full  ${scroll ? " md:scale-100 " : "md:scale-95 md:mt-5"} transition-all duration-600 ease-in-out    bg-white`}>
            <div className="lg:flex justify-between min-h-18">
                <div className="md:flex justify-between flex">
                    <NavLink
                        to="/"
                        className="text-[#0078E8] flex items-center"
                    >
                        <img src={Logo} alt="" className="md:size-15 size-12 " />
                        <h1 className="font-extrabold md:text-2xl text-lg leading-5 text-center">
                            ROYALMINES <br /> PROPERTY
                        </h1>
                    </NavLink>
                    <button className="border rounded-lg p-1 border-gray-400 lg:hidden mt-5" onClick={showNavItem}>
                        <img src={HamburgerBtn} alt="" className="size-8" />
                    </button>
                </div>
                <ul
                    className={`  lg:max-h-96 md:opacity-100   lg:flex  md:gap-5 md:items-center font-semibold text-blue-400  transition-all duration-600 ease-in-out overflow-hidden ${hidden
                        ? "max-h-0 opacity-0 md:max-h-0 md:opacity-0" : "max-h-96 opacity-100 md:max-h-95 md:opacity-100 "} `}>

                    {linkArr.map((item) => (<li key={item.name} className="py-3">
                        <NavLink to={item.path} className={({ isActive }) => `md:py-5 md:pb-3   hover:border-b-4 hover:border-black hover:text-black                  
                         ${isActive ? "border-b-4 border-black text-black " : ""}`}>
                            {item.name}
                        </NavLink>
                    </li>
                    ))}
                </ul>
            </div>
        </nav >
    );
}

export default Nav;
