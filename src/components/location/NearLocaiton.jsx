import { useEffect, useState } from 'react';
import { calculateDistance } from '../../utils/calcDistance';
import LocationItem from './LocationItem';
import { getLocationListApi } from '../../service/locationService';

const NearLocation = ({ position }) => {
    const [sortList, setSortList] = useState([]);

    const handleGetLocation = async () => {
        const data = await getLocationListApi();

        const sortedList = data
            .map((location) => ({
                ...location,
                distance: calculateDistance(position, location.coords),
            }))
            .sort((a, b) => a.distance - b.distance);
        setSortList(sortedList);
    };

    useEffect(() => {
        if (position) {
            handleGetLocation();
        }
    }, [position]);

    return (
        <div className='flex items-baseline justify-between gap-x-2 flex-wrap'>
            {sortList.map((location) => (
                <LocationItem key={location.id} location={location} />
            ))}
        </div>
    );
};

export default NearLocation;
