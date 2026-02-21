import { faFacebook, faFacebookF, faInstagramSquare, faLetterboxd, faSquareLetterboxd, faTiktok, faTwitter, faXTwitter } from "@fortawesome/free-brands-svg-icons"
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram"
import { faAngleRight, faEnvelope, faMapLocation, faPhone, faX } from "@fortawesome/free-solid-svg-icons"
import { faLocation } from "@fortawesome/free-solid-svg-icons/faLocation"
import { faLocationPin } from "@fortawesome/free-solid-svg-icons/faLocationPin"
import { faLocationPinLock } from "@fortawesome/free-solid-svg-icons/faLocationPinLock"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"

function Footer() {
    return (
        <div className="mt-10 bg-[#D8E6FD] ">
            <div className="w-[85%] mx-auto">
                <div className="md:flex capitalize pt-10 gap-10">
                    <ul className="text-[#0F2E4F] w-full space-y-2">
                        <h1 className="text-[#352F29] font-bold text-lg md:text-xl mb-5">contact us</h1>
                        <li className="text-sm"> <p><FontAwesomeIcon icon={faLocationPinLock} /> <span className="ms-3">Plot 251/252 Herbert Macaulay way Millennium Plaza Central Business District Opposite NNPC Towers.</span></p></li>
                        <li className="text-sm "> <p><FontAwesomeIcon icon={faPhone} /><Link to="tel:+234 915 241 5476" className="ms-3">+234 915 241 5476</Link></p></li>
                        <li className="text-sm"> <p><FontAwesomeIcon icon={faEnvelope} /><Link to="mailto:info@royalminesproperty.com" className="ms-3">info@royalminesproperty.com</Link></p></li>
                        <div className="flex gap-2 mt-5">
                            <Link className="h-8 w-8 border border-gray-500 text-blue-900 hover:bg-[#0f2e4f] hover:text-white transition-all duration-700 ease-in-out rounded-full flex justify-center items-center bg-white"><FontAwesomeIcon className="text-lg" icon={faXTwitter} /></Link>
                            <Link className="h-8 w-8 border border-gray-500 text-blue-900 hover:bg-[#0f2e4f] hover:text-white transition-all duration-700 ease-in-out rounded-full flex justify-center items-center bg-white"><FontAwesomeIcon className="text-lg" icon={faFacebookF} /></Link>
                            <Link className="h-8 w-8 border border-gray-500 text-blue-900 hover:bg-[#0f2e4f] hover:text-white transition-all duration-700 ease-in-out rounded-full flex justify-center items-center bg-white"><FontAwesomeIcon className="text-lg" icon={faInstagram} /></Link>
                            <Link className="h-8 w-8 border border-gray-500 text-blue-900 hover:bg-[#0f2e4f] hover:text-white transition-all duration-700 ease-in-out rounded-full flex justify-center items-center bg-white"><FontAwesomeIcon className="text-lg" icon={faTiktok} /></Link>
                        </div>
                    </ul>
                    <ul className="text-[#0F2E4F] w-full leading-7 lg:leading-8 font-light mt-10 md:mt-0">
                        <h1 className="text-[#352F29] font-bold text-lg md:text-xl mb-5">Quick Links</h1>
                        <li className="hover:tracking-widest transition-all duration-500 ease-in-out text-md"><FontAwesomeIcon icon={faAngleRight} /><Link to="/about">about us</Link></li>
                        <li className="hover:tracking-widest transition-all duration-500 ease-in-out text-md"><FontAwesomeIcon icon={faAngleRight} /><Link to="/contact">contact us</Link></li>
                        <li className="hover:tracking-widest transition-all duration-500 ease-in-out text-md"><FontAwesomeIcon icon={faAngleRight} /><Link to="/properties">our properties</Link></li>
                        <li className="hover:tracking-widest transition-all duration-500 ease-in-out text-md"><FontAwesomeIcon icon={faAngleRight} /><Link to="/faq">frequently asked questions</Link></li>
                    </ul>
                </div>

                <div className="md:flex-row md:justify-between mt-20 pb-5 flex flex-col justify-center items-center">
                    <p className="font-light text-sm">© 2026- <Link to="/" className="text-[#6EB5FF]">RoyalMines Properties</Link></p>
                    <div className="flex gap-5 text-[#6EB5FF]">
                        <Link to="/" className="border-r border-gray-400 pr-5">Home</Link>
                        <Link to="/faq">FAQ</Link>
                    </div>
                </div>
            </div>
        </div>
    )
} export default Footer