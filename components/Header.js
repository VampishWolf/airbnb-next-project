import { useState } from "react"
import Image from "next/image"
import { GlobeAltIcon, MenuIcon, SearchIcon, UserCircleIcon, UserIcon, UsersIcon } from "@heroicons/react/solid"
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import { DateRangePicker } from 'react-date-range'
import { useRouter } from "next/dist/client/router"

function Header({placeholder}) {
    const [searchInput, setSearchInput] = useState('')
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())
    const [noOfGuests, setnoOfGuests] = useState(1)
    const router = useRouter()
    
    const handleSelect = ranges => {
        setStartDate(ranges.selection.startDate)
        setEndDate(ranges.selection.endDate)
    }
    const resetInput = () => {
        setSearchInput("")
    }
    const search = () => {
        router.push({
            pathname: "/search",
            query: {
                location: searchInput,
                startDate: startDate.toISOString(),
                endDate: endDate.toISOString(),
                noOfGuests: noOfGuests
            }
        })
        setSearchInput("")
    }
    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection'

    }


    // console.log(searchInput);
    return (
        <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md px-5 py-5">

            {/* Right */}
            <div className="relative flex items-center h-10 cursor-pointer my-auto" onClick={()=>router.push("/")}>
                <Image src="https://links.papareact.com/qd3" layout="fill" objectFit="contain" objectPosition="left" />
            </div>
            {/* Middle */}
            <div className="flex items-center md:border-2 md:shadow-sm rounded-full py-2 ">
                <input type="text" value={searchInput} onChange={(e)=> setSearchInput(e.target.value)} className="flex-grow pl-5 text-gray-600 bg-transparent outline-none" placeholder={placeholder || "Start your search"} />
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
            {searchInput && (
                <div className="flex flex-col col-span-3 mx-auto">
                    <DateRangePicker 
                        ranges={[selectionRange]}
                        minDate={new Date()}
                        rangeColors={["#FD5B61"]}
                        onChange={handleSelect} />
                        <div className="flex items-center border-b mb-4">
                            <h2 className="text-2xl flex-grow font-semibold mb-2">Number of guests</h2>
                            <UsersIcon className="h-5" />
                            <input type="number" value={ noOfGuests } onChange={(e)=> setnoOfGuests(e.target.value)} min={1} className="w-12 pl-2 tex-lg outline-none text-red-400 bg-gray-200 rounded-xl mx-2" />
                        </div>
                        <div className="flex">
                            <button className="flex-grow text-gray-500 p-1 border-2 hover:bg-gray-100 rounded-full mx-2" onClick={resetInput}>Cancel</button>
                            <button onClick={search} className="flex-grow text-white bg-red-500 hover:bg-red-600 active:bg-red-500 rounded-2xl p-1">Search</button>
                        </div>
                </div>
            )}
        </header>
    )
}

export default Header
