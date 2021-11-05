import React from 'react'

const SideBar = () => {
    return (
        <nav className="bg-black h-screen left-0 fixed text-white lg:w-36">
            <div className="h-full w-full relative">
                <div className="w-full h-auto flex justify-center mt-14">
                    <img src="namelogo-white.svg" className="w-16 h-16" />
                </div>

                <ul className="list-none absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <li className="mb-10 text-2xl font-secondary transform transition-all duration-300 hover:text-theme-about">About</li>
                    <li className="mb-10 text-2xl font-secondary transform transition-all duration-300 hover:text-theme-resume">Resume</li>
                    <li className="mb-10 text-2xl font-secondary transform transition-all duration-300 hover:text-theme-projects">Projects</li>
                    <li className="mb-10 text-2xl font-secondary transform transition-all duration-300 hover:text-theme-blog">Blog</li>
                    <li className="mb-10 text-2xl font-secondary transform transition-all duration-300 hover:text-theme-skills">Skills</li>
                    <li className="mb-16 text-2xl font-secondary transform transition-all duration-300 hover:text-theme-contact">Contact</li>
                </ul>
            </div>
        </nav>
    )
}

export default SideBar
