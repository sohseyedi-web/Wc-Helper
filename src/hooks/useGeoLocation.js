import { useEffect, useState } from "react";


export default function useGeoLocation() {
    const [isLoading, setIsLoading] = useState(false);
    const [position, setPosition] = useState({});
    const [error, setError] = useState(null);

    function getPosition() {
        if (!navigator.geolocation)
            return setError("مرورگر شما پشتیبانی نمیکند");

        setIsLoading(true);
        navigator.geolocation.getCurrentPosition(
            (pos) => {
                setPosition({
                    lat: pos.coords.latitude,
                    lng: pos.coords.longitude,
                });
                setIsLoading(false);
            },
            (error) => {
                if (error.code === error.PERMISSION_DENIED) {
                    setError("دسترسی به موقعیت جغرافیایی رد شد.");
                    setIsLoading(false);
                } else {
                    setError("خطایی در دریافت موقعیت رخ داده است.");
                    setIsLoading(false);
                }
            }
        );
    }

    useEffect(() => {
        getPosition()
    }, [])

    return { isLoading, error, position };
}