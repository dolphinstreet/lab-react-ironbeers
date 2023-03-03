import React from "react"
import {NavLink, Outlet} from 'react-router-dom';


const Navbar =()=>{

    return (
        <>
        <nav className="navbar">
            <NavLink to="/">
                Time to go home
            </NavLink>
        </nav>
        <Outlet/>
        </>
    )
}

export default Navbar;