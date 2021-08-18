import { useState } from "react"
import getCenter from "geolib/es/getCenter"
import ReactMapGl, { Marker, Popup} from "react-map-gl"
// import { getCenter } from 'geolib/es/getenter'

function Map({searchResults}) {
    
    const coordinates = searchResults.map( res => ({
        longitude: res.long,
        latitude: res.lat,
    }))
    const center = getCenter(coordinates)
    
    const [viewPort, setViewPort] = useState({
        height: '100%',
        width: '100%',
        latitude: center.longitutde,
        longitude: center.latitude,
        zoom: 11
    })
    const [selectedLocation, setSelectedLocation] = useState({})
    return (
        <ReactMapGl
            mapStyle="mapbox://styles/vampishwolf/cksgnkvrulpr318nxc6wxfg0s"
            mapboxApiAccessToken={process.env.mapbox_secret}
            {...viewPort}
            onViewportChange={(nextViewPort)=> setViewPort(nextViewPort)}
        >
            {searchResults.map(res=>(
                <div key={res.long}>
                    <Marker 
                        longitude={res.long}
                        latitude={res.lat}
                        offsetLeft={-20}
                        offsetTop={-10}
                    >
                        <p className="cursor-pointer text-2xl animate-bounce" aria-label="push-pin" 
                            onClick={e=>setSelectedLocation(res)}>
                            📍
                        </p>
                    </Marker>
                    {/* Marker Popup */}
                    {selectedLocation.long === res.long ? 
                        (
                            <Popup
                                onClose={()=>setSelectedLocation({})}
                                closeOnClick={true}
                                latitude={res.lat}
                                longitude={res.long}>
                                    {res.title}
                            </Popup>
                        ) : (false)
                    }
                </div>
            ))}
        </ReactMapGl>

    )
}

export default Map
