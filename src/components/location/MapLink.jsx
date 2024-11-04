import { showLocGoogleMap } from "../../service/mapService";


const MapLink = ({ user, loc }) => {

    const handleNavigation = () => {
        const url = showLocGoogleMap(user, loc)
        window.open(url, '_blank');
    };

    return (
        <button onClick={handleNavigation} className="bg-[#141414] p-2 rounded-lg text-[#fefefe]">
            نمایش مسیر
        </button>
    )
}

export default MapLink