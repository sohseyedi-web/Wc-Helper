import { useEffect, useState } from "react"
import useGeoLocation from "../../hooks/useGeoLocation";
import { reverseGeoApi } from "../../service/mapService";
import NearLocaiton from "./NearLocaiton";

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
                    <div className="my-2 px-2 py-3 bg-black rounded-lg">موقعیت مکانی شما : {address?.formatted_address}</div>
                    <NearLocaiton position={position} />
                </div>
            )}
        </>
    )
}

export default Location