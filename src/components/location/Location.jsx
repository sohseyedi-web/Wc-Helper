import { useEffect, useState } from "react"
import useGeoLocation from "../../hooks/useGeoLocation";
import { reverseGeoApi } from "../../service/mapService";
import NearLocaiton from "./NearLocaiton";
import { FaLocationCrosshairs } from "react-icons/fa6";

const Location = () => {

    const [address, setAdress] = useState(null);
    const { position, error } = useGeoLocation();

    const handleGetAddrss = async () => {
        const { lat, lng } = position || {}
        const data = await reverseGeoApi(lat, lng)
        setAdress(data)
    }

    useEffect(() => {
        handleGetAddrss()
    }, [position])


    return (
        <>
            {error ? <div className="text-lg font-semibold flex items-center justify-center min-h-screen">{error}</div> : (
                <div className="py-3">
                    <div className="my-2 px-2 py-3 bg-black rounded-lg lg:text-base flex items-center gap-x-2">
                        <FaLocationCrosshairs size={22} className="text-[#fefefe]" />
                        <span className="text-sm">{address?.formatted_address}</span>
                    </div>
                    <NearLocaiton position={position} />
                </div>
            )}
        </>
    )
}

export default Location