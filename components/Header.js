import Image from "next/image"
import { GlobeAltIcon, MenuIcon, SearchIcon, UserCircleIcon } from "@heroicons/react/solid"

function Header() {
    return (
        <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md px-5 py-5">
            {/* <h1>I am header</h1> */}

            {/* Right */}
            <div className="relative flex items-center h-10 cursor-pointer my-auto">
                <Image src="https://links.papareact.com/qd3" layout="fill" objectFit="contain" objectPosition="left" />
            </div>
            {/* Middle */}
            <div className="flex items-center md:border-2 md:shadow-sm rounded-full py-2 ">
                <input type="text" className="flex-grow pl-5 text-gray-600 bg-transparent outline-none" placeholder="Start your search" />
                <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2"/>
            </div>
            {/* Left */}
            <div className="flex space-x-4 items-center justify-end text-gray-400 ">
                <p className="hidden md:inline cursor-pointer">Become a host</p>
                <GlobeAltIcon className="h-6 cursor-pointer"></GlobeAltIcon>
                <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
                    <MenuIcon className="h-6 cursor-pointer"></MenuIcon>
                    <UserCircleIcon className="h-6"></UserCircleIcon>
                </div>
            </div>
        </header>
    )
}

export default Header
