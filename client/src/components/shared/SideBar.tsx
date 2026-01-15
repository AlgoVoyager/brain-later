import { Brain, Building, Contact, Home, Settings, User2 } from 'lucide-react'
// import React, { type ReactElement } from 'react'
import { Outlet, NavLink } from "react-router-dom"
const SideBar = () => {
    const navlinks = [
        {
            text: "Home",
            href: "/",
            icon: <Home />
        },
        {
            text: "Contact",
            href: "/contact",
            icon: <Contact />
        },
        {
            text: "About",
            href: "/about",
            icon: <Building />
        },
        {
            text: "Settings",
            href: "/settings",
            icon: <Settings />
        },
        {
            text: "Profile",
            href: "/profile",
            icon: <User2 />
        },
    ]
    return (
        <div className='flex h-screen'>
            <div className="sidebar w-1/5 flex flex-col gap-3 py-10 pl-2 border-r-4">
                <div className="logo mx-auto flex gap-2 items-center">
                    <Brain size={40} />
                    <h1 className='text-4xl font-bold'>Brain Later</h1>
                </div>
                <nav className="navlinks w-full flex flex-col gap-10 pl-10 pt-10 mx-auto items-start">
                    {navlinks.map((link, key) => (
                        <NavLink key={key} to={link.href} className={({ isActive }) => `hover:text-blue-600 text-xl flex gap-3 items-center nlink ${isActive ? 'text-primary activeNavlink' : 'text-black inActiveNavlink'}`} >
                            {link?.icon} {link.text}
                        </NavLink>
                    ))}
                </nav>
            </div>
            <div className="main w-4/5 bg-slate-100">
                <Outlet />
            </div>
        </div>
    )
}

export default SideBar