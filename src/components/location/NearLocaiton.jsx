import { useEffect, useState } from 'react'
import { calculateDistance } from '../../utils/calcDistance'
import LocationItem from './LocationItem';
import { getLocationListApi } from '../../service/locationService';

const NearLocaiton = ({ position }) => {
    const [sortList, setSortList] = useState([])
    const [points, setPoints] = useState([])

    const handleGetLocation = async () => {
        const data = await getLocationListApi()
        setPoints(data)
    }

    const sortLocationsByDistance = () => {
        return points
            .map((location) => ({
                ...location,
                distance: calculateDistance(position, location.coords),
            }))
            .sort((a, b) => a.distance - b.distance);
    };

    useEffect(() => {
        handleGetLocation()
        const res = sortLocationsByDistance()
        setSortList(res)
    }, [position])


    return (
        <div className='flex items-baseline justify-between gap-x-2 flex-wrap'>
            {sortList.map((location) => (
                <LocationItem key={location.id} location={location} />
            ))}
        </div>
    )
}

export default NearLocaiton