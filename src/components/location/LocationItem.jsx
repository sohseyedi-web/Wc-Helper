import { useState } from "react";
import { RiArrowDownSLine } from 'react-icons/ri'
import { reverseGeoApi, showLocGoogleMap } from "../../service/mapService";
import useGeoLocation from './../../hooks/useGeoLocation';

const LocationItem = ({ location }) => {

    const [openIndex, setOpenIndex] = useState(0);
    const [address, setAddress] = useState(null)
    const { position } = useGeoLocation()

    // change active accordion box
    const toggleAccordion = async (index) => {
        if (openIndex === index) {
            setOpenIndex(-1);
        } else {
            setOpenIndex(index);
            const data = await reverseGeoApi(location.coords.lat, location.coords.lng)
            setAddress(data)
        }
    };

    const handleNavigation = () => {
        const url = showLocGoogleMap(position, location.coords)
        window.open(url, '_blank');
    };

    const isActive = openIndex === location.id

    return (

        <div className='bg-[#1c1c1c] shadow-lg rounded-xl md:w-[48%] w-full p-4 my-3' key={location.id}>
            <div onClick={() => toggleAccordion(location?.id)} className="flex items-center justify-between text-white cursor-pointer">
                <div>
                    <h2>{location?.name}</h2>
                    <p className="text-xs text-[#a5a5a5] mt-2">فاصله:
                        {location.distance < 1
                            ? `${(location.distance * 1000).toFixed(0)} متر`
                            : `${location.distance.toFixed(2)} کیلومتر`}
                    </p>
                </div>
                <RiArrowDownSLine size={20} className={`text-[#c4c4c4] transition-all duration-300 ${isActive ? "rotate-180" : "rotate-0"}`} />
            </div>
            {isActive ? (
                <div className="accordion-content pt-8 overflow-hidden flex-col transition-all flex">
                    <p className="font-semibold">{address?.formatted_address}</p>
                    <button onClick={handleNavigation} className="bg-[#141414] p-2 w-full mt-3 rounded-lg text-[#fefefe]">
                        نمایش مسیر
                    </button>
                </div>
            ) : null}
        </div>
    )
}

export default LocationItem