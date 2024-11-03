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

    console.log(address, position)

    return (
        <div className="py-4">
            {error ? error : (
                <>
                    <div>موقعیت مکانی شما : {address?.formatted_address}</div>
                    <NearLocaiton position={position} />
                </>
            )}
        </div>
    )
}

export default Location