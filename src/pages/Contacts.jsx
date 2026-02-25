import { div } from "framer-motion/client"
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLocationPin } from "@fortawesome/free-solid-svg-icons/faLocationPin"
import { faEnvelopeOpen } from "@fortawesome/free-solid-svg-icons/faEnvelopeOpen"
import { faPhone } from "@fortawesome/free-solid-svg-icons"
import BackToTop from "../components/BackToTop"

function Contacts() {
    return (
        <div>
            <Nav />
            <div className="mt-10 w-[90%] lg:w-[85%] mx-auto ">
                <div className="bg-[url('https://www.royalminesproperty.com/static/media/banner3.475d905930152382fb17.avif')] bg-cover bg-no-repeat bg-center " style={{ backgroundAttachment: "fixed" }}>
                    <div className="w-[55%] mx-auto pb-10 md:px-5">
                        <h1 className="text-center font-bold text-2xl md:text-3xl md:py-5 text-[#0E2E50]">
                            Contact Us
                        </h1>
                        <div className="rounded-lg bg-[#0f2e4fcc] p-3  text-white text-sm lg:text-base font-bold mb-5 text-center ">
                            <p>Welcome to our Contact Us page! We're delighted that you're interested in reaching out to us. We look forward to hearing from you and assisting you in any way we can!</p>
                        </div>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-15">
                    <div className="bg-[#B1D5FA] rounded-md p-4 " >
                        <div className=" bg-white p-3 h-full border border-dashed border-[#B1D5FA]  rounded-md flex gap-3 items-center ">
                            <div className="rounded-full border border-dashed border-[#0f2e4f] p-4 bg-white w-6 h-6 flex justify-center items-center">
                                <FontAwesomeIcon icon={faLocationPin} className="text-blue-500 text-sm" />
                            </div>
                            <p className="text-sm">Plot 251/252 Herbert Macaulay way Millennium Plaza Central Business District Opposite NNPC Towers</p>
                        </div>
                    </div>
                    <div className="bg-[#B1D5FA] rounded-md p-4 " >
                        <div className=" bg-white  p-3 h-full border border-dashed border-[#B1D5FA]  rounded-md flex gap-3 items-center transition-all duration-700 ease-in-out">
                            <div className="rounded-full border border-dashed border-[#0f2e4f] p-4 bg-white w-6 h-6 flex justify-center items-center">
                                <FontAwesomeIcon icon={faEnvelopeOpen} className="text-blue-500 text-sm" />
                            </div>

                            <a href="mailto:info@royalminesproperty.com">info@royalminesproperty.com</a>
                        </div>
                    </div>
                    <div className="bg-[#B1D5FA] rounded-md p-4 " >
                        <div className="group bg-white border-saw p-3 h-full border border-dashed border-[#B1D5FA]  rounded-md flex gap-3 items-center transition-all duration-700 ease-in-out">
                            <div className="rounded-full border border-dashed border-[#0f2e4f] p-4 bg-white w-6 h-6 flex justify-center items-center">
                                <FontAwesomeIcon icon={faPhone} className="text-blue-500 text-sm" />
                            </div>
                            <a href="tel:+234 915 241 5476">+234 915 241 5476</a>
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className="text-center font-bold py-5 text-sm">Reach out to our dedicated office desk during our business hours, from 9am to 5pm WAT, for personalized assistance and expert guidance on all your inquiries.</h1>
                    <div className="flex gap-5 ">
                        <div className="w-full">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d3940.057061211068!2d7.5005440000000005!3d9.05856!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sng!4v1771700828143!5m2!1sen!2sng" width="full" height="full" className="border-0 h-full w-full rounded-lg" loading="lazy" ></iframe>
                        </div>
                        <div className="w-full">
                            <div className="flex justify-center gap-5">
                                <input type="text" name="" id="" placeholder="Your Name" className="outline-[#2f2ffc91] border border-gray-300 rounded-sm w-full p-3" />
                                <input type="text" name="" id="" placeholder="Your Phone Number" className="outline-[#2f2ffc91] border border-gray-300 rounded-sm w-full p-3" />
                            </div>
                            <div className="flex justify-center gap-5 mt-3">
                                <input type="mail" name="" id="" placeholder="Your Email" className="outline-[#2f2ffc91] border border-gray-300 rounded-sm w-full p-3" />
                            </div>
                            <div className="flex justify-center gap-5 mt-3">
                                <textarea name="" placeholder="Message" className="w-full
                                h-[150px] outline-[#2f2ffc91] border border-gray-300 rounded-sm p-3" id=""></textarea>
                            </div>
                            <button className="text-white bg-[#0f2e4f] rounded-sm text-center w-full mt-3 py-4 mb-10 font-light text-sm">
                                Send Message
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            <BackToTop />
        </div >
    )
} export default Contacts