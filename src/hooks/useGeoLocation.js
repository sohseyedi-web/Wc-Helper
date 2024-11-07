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
                    setError("کاربر اجازه دسترسی به موقعیت مکانی را رد کرد.");
                    setIsLoading(false);
                } else if (error.code === error.POSITION_UNAVAILABLE) {
                    setError("موقعیت مکانی در دسترس نیست.");
                    setIsLoading(false);
                } else if (error.code === error.TIMEOUT) {
                    setError("درخواست موقعیت مکانی به زمان مجاز نرسید.");
                    setIsLoading(false);
                } else {
                    setError("خطای نامشخص:", error.message);
                }
            }

        );
    }

    useEffect(() => {
        getPosition()
    }, [])

    return { isLoading, error, position };
}