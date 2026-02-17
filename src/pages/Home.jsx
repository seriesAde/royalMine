import Nav from "../components/Nav"
import { motion } from "framer-motion"
import condo from "../assets/condo.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBath, faBed, faCheck, faCoffee, faLocation, faLocationPin, faLocationPinLock, faPhone, faRulerCombined } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { div, th } from "framer-motion/client";
import { faMapLocationDot } from "@fortawesome/free-solid-svg-icons/faMapLocationDot";
import { ClipLoader } from "react-spinners";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faComment } from "@fortawesome/free-solid-svg-icons/faComment";
import { faCalendar } from "@fortawesome/free-regular-svg-icons";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";



function Home() {

    const [threeProperties, setThreeProperties] = useState([]);
    let [loading, setLoading] = useState(true)
    let baseApi = 'https://royal-mines-backend.onrender.com/api/v1/'
    async function latestProperties() {
        try {
            let response = await fetch("https://royal-mines-backend.onrender.com/api/v1/3properties")
            let data = await response.json()
            setThreeProperties(data.data.properties)
            console.log(data.data.properties)
        } catch (error) {
            error
        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        latestProperties()
    }, [])

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.4,
            },
        },
    };

    const itemVariants = {
        hidden: {
            opacity: 0,
            y: 40,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut",
            },
        },
    };

    return (
        <div className="">
            <Nav />

            <div className="md:flex md:flex-row md:items-center flex flex-col">
                {/* Text */}
                <div className="md:w-[50%] px-10 order-2 md:order-1">
                    <h1 className="capitalize font-extrabold md:text-5xl text-4xl text-[#03A9F4]  md:leading-[50px] py-5 mt-5">
                        <span className="text-[#0E2E50]">let your </span>
                        family's happiness <span className="text-[#0E2E50]">begin in your </span>
                        perfect home
                    </h1>
                    <p className="font-light" >
                        Embark on your family's journey to happiness by investing in a home that mirrors your dreams. Establish a steadfast foundation for both your family's joy and your investment aspirations with the ideal property.
                    </p>
                </div>

                {/* Image */}
                <div className="md:w-[50%] order-1 md:order-2">
                    <img
                        src="https://www.royalminesproperty.com/static/media/banner1.d6eff67d2e1649a120a5.jpeg"
                        alt=""
                        className="w-fit"
                    />
                </div>
            </div>

            {/* // our mission starts here */}
            <motion.div
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true, amount: 0.2 }} className="md:w-[80%] mx-auto text-center lg:px-50 px-10 md:mt-20" >
                <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl mt-30 text-[#0E2E50] text-center mb-5 capitalize">our mission </h1>
                <p className="font-light">Our mission is to lead Nigeria's real estate and mortgage sector with trust and technology, delivering seamless solutions and empowering dreams through comprehensive real estate solutions.</p>
            </motion.div>
            {/* property type here */}
            <div className="mx-auto bg-gray-100 py-10 mt-10">
                <div className=" md:w-[90%]   mx-auto text-center lg:p-10 px-5 ">
                    <motion.div initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        viewport={{ once: true, amount: 0.2 }}>
                        <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-[#0E2E50] text-center mb-5 capitalize text-nowrap">Property Types</h1>
                        <p className="font-light  lg:px-60">We prioritize our clients' needs, ensuring that we safeguard the essence of the initial concept and align it seamlessly with the right investment strategy.</p>
                    </motion.div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-10 gap-5">
                        <motion.div className="bg-[#B1D5FA] rounded-md p-5 " variants={itemVariants}>
                            <div className="group bg-white border-saw p-5 border border-dashed border-[#B1D5FA] hover:border-[#0F2E4F] rounded-md flex flex-col items-center hover:bg-[#0F2E4F] hover:text-white transition-all duration-700 ease-in-out">
                                <div className="rounded-full border border-dashed border-[#0f2e4f] p-4 bg-white ">
                                    <img src={condo} alt="" className="size-5 group-hover:bg-[#0F2E4F]" />
                                </div>
                                <h4 className="text-[#0F2E4F]  group-hover:text-white font-bold py-3">Block of Flats</h4>
                                <p>30+ Properties</p>
                            </div>
                        </motion.div>
                        <motion.div className="bg-[#B1D5FA] rounded-md p-5 " variants={itemVariants}>
                            <div className="group bg-white border-saw p-5 border border-dashed border-[#B1D5FA] hover:border-[#0F2E4F] rounded-md flex flex-col items-center hover:bg-[#0F2E4F] hover:text-white transition-all duration-700 ease-in-out">
                                <div className="rounded-full border border-dashed border-[#0f2e4f] p-4 bg-white ">
                                    <img src={condo} alt="" className="size-5 group-hover:bg-[#0F2E4F]" />
                                </div>
                                <h4 className="text-[#0F2E4F]  group-hover:text-white font-bold py-3">Block of Flats</h4>
                                <p>30+ Properties</p>
                            </div>
                        </motion.div>
                        <motion.div className="bg-[#B1D5FA] rounded-md p-5 " variants={itemVariants}>
                            <div className="group bg-white border-saw p-5 border border-dashed border-[#B1D5FA] hover:border-[#0F2E4F] rounded-md flex flex-col items-center hover:bg-[#0F2E4F] hover:text-white transition-all duration-700 ease-in-out">
                                <div className="rounded-full border border-dashed border-[#0f2e4f] p-4 bg-white ">
                                    <img src={condo} alt="" className="size-5 group-hover:bg-[#0F2E4F]" />
                                </div>
                                <h4 className="text-[#0F2E4F]  group-hover:text-white font-bold py-3">Block of Flats</h4>
                                <p>30+ Properties</p>
                            </div>
                        </motion.div>
                        <motion.div className="bg-[#B1D5FA] rounded-md p-5 " variants={itemVariants}>
                            <div className="group bg-white border-saw p-5 border border-dashed border-[#B1D5FA] hover:border-[#0F2E4F] rounded-md flex flex-col items-center hover:bg-[#0F2E4F] hover:text-white transition-all duration-700 ease-in-out">
                                <div className="rounded-full border border-dashed border-[#0f2e4f] p-4 bg-white ">
                                    <img src={condo} alt="" className="size-5 group-hover:bg-[#0F2E4F]" />
                                </div>
                                <h4 className="text-[#0F2E4F]  group-hover:text-white font-bold py-3">Block of Flats</h4>
                                <p>30+ Properties</p>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
                {/* our services */}
                <div className="flex flex-col lg:flex-row  gap-10 md:w-[85%] mx-auto items-center px-5">
                    <motion.div initial={{ opacity: 0, y: 0 }}
                        whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} viewport={{ once: true, amount: 0.5 }} className="group lg:w-[50%] py-10 ps-10 overflow-hidden bg-[linear-gradient(60deg,_#0F2E4F_50%,_#B0B9C3_50%)] h-fit ">
                        <img src="https://www.royalminesproperty.com/static/media/real.f3fadad8ae21acea9b9a.jpg" alt="" className="group-hover:scale-105 transition-all duration-700 ease-in-out w-full" />
                    </motion.div>
                    <motion.div className="lg:w-[50%]" initial={{ opacity: 0, y: 0 }}
                        whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} viewport={{ once: true, amount: 0.5 }}>
                        <h1 className="text-[#0F2E4F] font-bold lg:text-4xl md:text-3xl text-3xl">
                            Our Services Include:
                        </h1>
                        <ul className=" marker:text-#[352F29] text-[16px] font-light space-y-5 ">
                            <p className="my-5 font-light  ">Welcome to our comprehensive real estate services. From property sales and mortgage assistance to construction projects, we provide tailored solutions to meet your every need</p>
                            <li> <FontAwesomeIcon icon={faCheck} className="text-lg text-[#352F29] pr-3" />
                                Comprehensive mortgage solutions tailored to your financial goals
                            </li>
                            <li><FontAwesomeIcon icon={faCheck} className="text-lg text-[#352F29] pr-3" />
                                Expert guidance through every step of the construction process
                            </li>
                            <li><FontAwesomeIcon icon={faCheck} className="text-lg text-[#352F29] pr-3" />
                                Receive expert guidance at every stage of the mortgage journey
                            </li>
                            <li><FontAwesomeIcon icon={faCheck} className="text-lg text-[#352F29] pr-3" />
                                Extensive property sales portfolio catering to diverse preferences
                            </li>
                            <li><FontAwesomeIcon icon={faCheck} className="text-lg text-[#352F29] pr-3" />
                                Personalized assistance to find your dream home or investment property
                            </li>
                            <li><FontAwesomeIcon icon={faCheck} className="text-lg text-[#352F29] pr-3" />
                                Seamless transactions and transparent dealings throughout the process
                            </li>

                        </ul>

                    </motion.div>
                </div>
            </div>
            {/* property listing */}
            <div className="px-5 mt-10 md:w-[90%] lg:w-[85%] mx-auto">
                <motion.div initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true, amount: 0.2 }}>
                    <h1 className="text-[#0F2E4F] font-bold lg:text-5xl md:text-3xl text-3xl">
                        Property Listing
                    </h1>
                    <p className=" text-lg mt-5 w-110 lg:w-full">
                        Discover your dream home with our comprehensive Property Listing.
                    </p>
                </motion.div>
                <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:flex-row   gap-5 mx-auto   mt-10 min-h-[300px]"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }} viewport={{ once: true, amount: 0.2 }}>

                    {loading ? (
                        <div className="flex justify-center w-full ">
                            <div className="">
                                <ClipLoader
                                    color="#0F2E4F"
                                    loading={loading}
                                    size={50}
                                />
                            </div>
                        </div>
                    ) :
                        (
                            threeProperties.map((property) => (
                                <div key={property.id} className="relative group  cursor-pointer shadow-md  min-w-fit h-fit rounded-b-md">
                                    <div className="overflow-hidden rounded-t-lg relative">
                                        <img src={property.images[0]} alt="" className="rounded-t-lg group-hover:scale-110 transition-all duration-700 ease-in-out" />
                                        <div className="absolute top-5 left-4 bg-[#0000008a] px-3 py-1 rounded-md text-white">{property.status}</div>
                                        <div className="absolute   bottom-0   left-4 bg-white px-5 pt-1 rounded-t-md text-[#352F29]">{property.propertyType
                                        }</div>
                                    </div>
                                    <div className="ps-5 ">
                                        <h1 className=" pr-10 text-lg font-bold text-[#0F2E4F] py-5   group-hover:text-[#4F2F10]">{property.title}</h1>
                                        <p className="text-lg  text-[#0F2E4F] group-hover:text-[#4F2F10] space-x-2">
                                            <FontAwesomeIcon icon={faLocationPinLock} /> {property.address}
                                        </p>
                                    </div>
                                    <div className="flex  mt-5 border-t text-sm border-gray-300 border-dashed group-hover:text-[#4F2F10]  w-full">
                                        <div className="p-2 text-nowrap"><FontAwesomeIcon icon={faRulerCombined} /> N/A</div>
                                        <div className="border-r border-l border-gray-300 border-dashed p-2 text-nowrap "><FontAwesomeIcon icon={faBed} /> {property.bathroom} Bedrooms </div>
                                        <div className=" p-2 text-nowrap "><FontAwesomeIcon icon={faBath} /> {property.
                                            bathroom
                                        } Toilet</div>

                                    </div>
                                </div>
                            )
                            )
                        )}

                </motion.div>
                <motion.div className="flex justify-center mt-10"
                    initial={{ opacity: 0, y: -50 }}
                    whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} viewport={{ once: true, amount: 0.2 }}
                >
                    <button className="capitalize px-5 py-3 text-white bg-[#0F2E4F] rounded-md hover:bg-blue-400">see more</button>
                </motion.div>
            </div>
            <div className="bg-[#B1D5FA] rounded-md p-5 w-[85%] mx-auto mt-20">
                <motion.div initial={{ opacity: 0, y: 0 }}
                    whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} viewport={{ once: true, amount: 0.2 }} className=" bg-white p-5 border border-dashed border-gray-400 rounded-md flex flex-col md:flex-col lg:flex-row gap-10  ">
                    <div className="lg:w-[50%]"><img src="https://www.royalminesproperty.com/static/media/caller.ea5c26aca0e26a69b8e4.avif" alt="" className="rounded-lg" /></div>
                    <div className="lg:w-[50%]">
                        <h1 className="text-[#0F2E4F] font-bold lg:text-5xl md:text-3xl text-3xl my-5">
                            Connect With Us
                        </h1>
                        <p className="text-sm leading-6 mb-5">
                            Reach out to our dedicated office desk during our business hours, from 9am to 5pm WAT, for personalized assistance and expert guidance on all your inquiries.
                        </p>
                        <div className=" md:flex flex-wrap gap-3 ">
                            <button className="capitalize px-5 py-5 md:mb-0 mb-3 text-white bg-[#0F2E4F] rounded-md hover:bg-blue-400 "> <FontAwesomeIcon icon={faWhatsapp} /> whatsapp</button>
                            <button className="capitalize px-5 py-5 md:mb-0 mb-3 text-white bg-[#0F2E4F] rounded-md hover:bg-blue-400 "> <FontAwesomeIcon icon={faPhone} /> make a call</button>
                            <button className="capitalize px-5 py-5 md:mb-0 mb-3 text-white bg-[#0F2E4F] rounded-md hover:bg-blue-400 "> <FontAwesomeIcon icon={faComment} /> feed back</button>
                            <button className="capitalize px-5 py-5  text-white bg-[#0F2E4F] rounded-md hover:bg-blue-400 "> <FontAwesomeIcon icon={faCalendar} /> book site visitation appointment</button>
                        </div>
                    </div>
                </motion.div>
            </div>
            <BackToTop />

            <Footer />
        </div>
    )
} export default Home