import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

export default function BackToTop() {
    const [visible, setVisible] = useState(false);

    const toggleVisible = () => {
        if (window.scrollY > 300) setVisible(true);
        else setVisible(false);
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisible);
        return () => window.removeEventListener("scroll", toggleVisible);
    }, []);

    return (
        <button
            onClick={scrollToTop}
            className={` 
        fixed bottom-8 right-8 p-3 rounded-full bg-[#0F2E4F] text-white shadow-lg 
        transition-opacity duration-300
        ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}
      `}
        >
            <FontAwesomeIcon icon={faArrowUp} size="lg" className="animate-bounce" />
        </button>
    );
}
