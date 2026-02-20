import Nav from "./Nav";
import { Outlet } from "react-router-dom";
import { useState } from "react";

export default function Layout() {
    const [dropdownHeight, setDropdownHeight] = useState(0);

    return (
        <>
            {/* Nav receives a callback to report mobile dropdown height */}
            <Nav setDropdownHeight={setDropdownHeight} />


            <div style={{ paddingTop: `${dropdownHeight}px` }}>
                <Outlet />
            </div>
        </>
    );
}
