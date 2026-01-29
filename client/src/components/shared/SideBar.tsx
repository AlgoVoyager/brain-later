import { Brain, Building, Contact, Home, Settings, User2, User } from 'lucide-react'
// import React, { type ReactElement } from 'react'
import { Outlet, NavLink } from "react-router-dom"
import { useAppSelector } from '../../utils/hooks'
import ThemeToggle from '../ThemeToggle'

const SideBar = () => {
    const theme = useAppSelector((state) => state.theme.theme);
    const navlinks = [
        {
            text: "Home",
            href: "/",
            icon: <Home />
        },
        {
            text: "Feedback",
            href: "/feedback",
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
    ]
    const authRoutes = [
        {
            text: "Profile",
            href: "/profile",
            icon: <User2 />
        },
        {
            text: "Login",
            href: "/login",
            icon: <User />
        },
        {
            text: "Register",
            href: "/register",
            icon: <User />
        },
    ]
    return (
        <div className='flex flex-col lg:flex-row h-screen'>
            <div className="sidebar bg-blue-500  w-full md:w-full lg:w-1/5 lg:h-screen h-fit flex lg:flex-col gap-3 lg:py-10 py-4 lg:pl-2 lg:pr-0 pl-1 border-r-4 dark:bg-slate-800 dark:border-slate-700 items-center">
                <div className="logo mx-auto flex flex-col md:flex-row  gap-2 items-center dark:text-white">
                    <Brain className='lg:size-16 md:size-7 size-5' />
                    <h1 className=' lg:text-4xl md:text-md sm:text-sm text-xs font-bold'>Brain Later</h1>
                </div>
                <nav className="navlinks lg:w-full flex lg:flex-col lg:gap-10 lg:pl-10 lg:pr-0 lg:pt-10 mx-auto items-start">
                    {navlinks.map((link, key) => (
                        <NavLink key={key} to={link.href} className={({ isActive }) => `hover:text-blue-600 dark:hover:text-blue-400 text-xl flex gap-3 items-center nlink ${isActive ? 'text-primary activeNavlink' : 'text-black dark:text-gray-300 inActiveNavlink'}`} >
                            {link?.icon} 
                           <span className='lg:block hidden'>{link.text}</span>
                        </NavLink>
                    ))}
                    <NavLink to={authRoutes[0].href} className={({ isActive }) => `hover:text-blue-600 dark:hover:text-blue-400 text-xl flex gap-3 items-center nlink ${isActive ? 'text-primary activeNavlink' : 'text-black dark:text-gray-300 inActiveNavlink'}`} >
                        {authRoutes[0]?.icon} <span className='lg:block hidden'>{authRoutes[0].text}</span>
                    </NavLink>
                    {/* Theme Toggle */}
                    {/* <div className="mt-auto">
                        <ThemeToggle />
                    </div> */}
                    {/* {
                    token?<NavLink key={navlinks.length+1} to={authRoutes[0].href} className={({ isActive }) => `hover:text-blue-600 text-xl flex gap-3 items-center nlink ${isActive ? 'text-primary activeNavlink' : 'text-black inActiveNavlink'}`} >
                        {authRoutes[0]?.icon} {authRoutes[0].text}
                    </NavLink>
                    :<NavLink key={navlinks.length+1} to={authRoutes[1].href} className={({ isActive }) => `hover:text-blue-600 text-xl flex gap-3 items-center nlink ${isActive ? 'text-primary activeNavlink' : 'text-black inActiveNavlink'}`} >
                        {authRoutes[1]?.icon} {authRoutes[1].text}
                    </NavLink>
                    } */}
                </nav>
            </div>
            <div className={`main lg:w-4/5 md:w-full w-full lg:h-screen max-h-full h-full flex lg:flex-col items-center justify-center ${theme === "dark" ? "bg-slate-900 text-secondary" : "bg-slate-100"}`}>
                <Outlet />
            </div>
        </div>
    )
}

export default SideBar