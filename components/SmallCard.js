import Image from "next/image"

function SmallCard({img, loc, distance}) {
    return (
        <div className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform ease-out duration-200">
            <div className="relative h-16 w-16">
                <Image src={img} layout="fill" className="rounded-lg" />
            </div>
            <div>
                <h2>{loc}</h2>
                <h3 className="text-gray-500">{distance}</h3>
            </div>
        </div>
    )
}

export default SmallCard
