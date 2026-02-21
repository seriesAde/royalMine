import { div } from "framer-motion/client";
import { motion } from "framer-motion";
import Nav from "../components/Nav";
import { useState, useEffect } from "react";
import { ClipLoader } from "react-spinners";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesLeft, faCaretLeft, faChevronLeft, faChevronRight, faLocationPinLock } from "@fortawesome/free-solid-svg-icons";
import { faRulerCombined } from "@fortawesome/free-solid-svg-icons";
import { faBed } from "@fortawesome/free-solid-svg-icons";
import { faBath } from "@fortawesome/free-solid-svg-icons";
import { faLeftLong } from "@fortawesome/free-solid-svg-icons/faLeftLong";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons/faArrowLeft";

function Properties() {
    let [allProperties, setAllProperties] = useState([])
    let [loading, setLoading] = useState(true)
    let baseApi = 'https://royal-mines-backend.onrender.com/api/v1/'
    async function Properties() {
        try {
            let response = await fetch("https://royal-mines-backend.onrender.com/api/v1/properties")
            let data = await response.json()
            setAllProperties(data.data.properties)
            console.log(data.data.properties)
        } catch (error) {
            error
        } finally {
            setLoading(false)
        }
    }
    useEffect(() => {
        Properties()
    }, [])

    return (
        <div>
            <Nav />
            <div className=" w-[90%] lg:w-[82%] mx-auto">
                <div className="bg-[url('https://www.royalminesproperty.com/static/media/banner1.43e80869da8a99d1120f.jpg')] bg-cover w-full bg-no-repeat bg-center mt-10 h-80 flex justify-center items-center" style={{ backgroundAttachment: "fixed" }}>

                    <div className="backdrop-blur-[5px] px-4 py-1 shadow-lg rounded-lg bg-[#b5b3aa99]">
                        <h1 className="text-center font-bold lg:text-[40px] text-[#0E2E50] capitalize">our properties</h1>
                    </div>
                </div>
            </div>
            <motion.div className="py-5 text-center font-light" initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }} viewport={{ once: true, amount: 0.2 }}>
                <h1 className="text-center font-bold lg:text-[40px] text-[#0E2E50] capitalize">properties listing</h1>
                <p className="pt-2">Discover your dream home with our comprehensive Property Listing.</p>
            </motion.div>
            <div className="w-[90%] lg:w-[82%] mx-auto">

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
                        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:flex-row   gap-5 mx-auto   mt-10 min-h-[300px]"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }} viewport={{ once: true, amount: 0.2 }}>

                            {allProperties.map((property) => (
                                <div key={property.id} className="relative group  cursor-pointer shadow-md  min-w-fit   rounded-b-md">
                                    <div className="overflow-hidden rounded-t-lg relative lg:h-50">
                                        <img src={property.images[0]} alt="" className="rounded-t-lg group-hover:scale-110 transition-all duration-700 ease-in-out" />
                                        <div className="absolute top-5 left-4 bg-[#0000008a] px-3 py-1 rounded-md text-white">{property.status}</div>
                                        <div className="absolute   bottom-0   left-4 bg-white px-5 pt-1 rounded-t-md text-[#352F29]">{property.propertyType
                                        }</div>
                                    </div>
                                    <div className="ps-5 lg:h-40">
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
                            )}
                        </motion.div>
                    )}

                <div className="flex justify-center items-center my-10">
                    <div className={({ isActive }) => ` text-blue-500                  
                         ${isActive ? "" : ""}`}>
                        <button className="w-8 h-9 border border-gray-200"><FontAwesomeIcon icon={faChevronLeft} className="text-xs " /></button>
                        <button className="w-8 h-9 border border-gray-200">1</button>
                        <button className="w-8 h-9 border border-gray-200">2</button>
                        <button className="w-8 h-9 border border-gray-200"><FontAwesomeIcon icon={faChevronRight} className="text-xs" /></button>
                    </div>
                </div>
            </div>

        </div>
    )
} export default Properties