import { useState } from "react";
import { RiArrowDownSLine } from 'react-icons/ri'
import { reverseGeoApi } from "../../service/mapService";

const LocationItem = ({ location }) => {

    const [openIndex, setOpenIndex] = useState(0);
    const [address, setAddress] = useState(null)

    // change active accordion box
    const toggleAccordion = async (index) => {
        if (openIndex === index) {
            setOpenIndex(-1);
        } else {
            setOpenIndex(index);
            const data = await reverseGeoApi(location.coords[0], location.coords[1])
            setAddress(data)
        }
    };

    const isActive = openIndex === location.id

    return (

        <div className='bg-[#1c1c1c] rounded-xl p-4 my-3' key={location.id}>
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
                <div className="accordion-content pt-8 overflow-hidden transition-all">
                    <p className="font-semibold">{address?.formatted_address}</p>
                </div>
            ) : null}
        </div>
    )
}

export default LocationItem