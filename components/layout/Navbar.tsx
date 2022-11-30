import React from "react"
import DesktopNav from "./Navbar/DesktopNav"
import MobileNav from "./Navbar/MobileNav"

export default function Navbar({ isDesktopNav }: any) {    

    if(isDesktopNav) {
        return <DesktopNav />
    } else {
        return <MobileNav />
    }
}
