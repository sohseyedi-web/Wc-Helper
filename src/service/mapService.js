import axios from "axios";

export const reverseGeoApi = async (lat, lng) => {

    const { data } = await axios.get(
        `https://api.neshan.org/v5/reverse?lat=${lat}&lng=${lng}`,
        {
            headers: {
                "Api-Key": import.meta.env.VITE_API_KEY_SERVICE,
                "Content-Type": "application/json",
            },
        }
    );

    return data;
};

export const showLocGoogleMap = (user, loc) => {
    return `https://www.google.com/maps/dir/?api=1&origin=${user?.lat},${user?.lng}&destination=${loc.lat},${loc.lng}`
}