import { format } from "date-fns"
import { useRouter } from "next/dist/client/router"
import Footer from "../components/Footer"
import Header from "../components/Header"
import InfoCard from "../components/InfoCard"
import Map from "../components/Map"

function Search({ searchResults }) {
    const {location, startDate, endDate, noOfGuests} = useRouter().query
    const formattedStartDate = format(new Date(startDate), "dd MMMM yy")
    const formattedEndDate = format(new Date(endDate), "dd MMMM yy")
    const range = `${formattedStartDate} - ${formattedEndDate}`

    console.log(searchResults);
    return (
        <div className="h-screen">
            <Header placeholder={ `${location} | ${range} | ${noOfGuests} guests`} />
            <main className='flex'>
                <section className="flex-grow pt-14 px-6 ">
                    <p className='text-xs'>300+ stays {range} for {noOfGuests} {noOfGuests>1?"guests":"guest"}.</p>
                    <h1 className='text-3xl font-semibold mt-2 mb-6'>Stays in {location} </h1>
                    <div className='hidden lg:inline-flex mb-6'>
                        <p className='button'>Cancellation Flexibility</p>
                        <p className='button'>Type of Place</p>
                        <p className='button'>Price</p>
                        <p className='button'>Rooms and Beds</p>
                        <p className='button'>More Filters</p>
                    </div>
                <div className="flex flex-col">
                    {searchResults.map(({img, location, title, description, star, price, total}) => (
                        <InfoCard 
                        key={img}
                        img={img}
                        loc={location}
                        title={title}
                        des={description}
                        star={star}
                        price={price}
                        total={total}
                        />
                        ))}
                </div>
                </section>
                <section className="hidden xl:inline-flex xl:min-w-[600px]">
                    <Map searchResults={searchResults} />
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default Search

export async function getServerSideProps() {
    const searchResults = await fetch("https://links.papareact.com/isz")
    .then(res=>res.json())

    return{
        props: {
            searchResults,
        }
    }
}