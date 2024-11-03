import { useEffect, useState } from 'react'
import { calculateDistance } from '../../utils/calcDistance'
import { points } from './../../constant/position';
import LocationItem from './LocationItem';

const NearLocaiton = ({ position }) => {
    const [sortList, setSortList] = useState([])

    const sortLocationsByDistance = () => {
        return points
            .map((location) => ({
                ...location,
                distance: calculateDistance(position, location.coords),
            }))
            .sort((a, b) => a.distance - b.distance);
    };

    useEffect(() => {
        const res = sortLocationsByDistance()
        setSortList(res)
    }, [position])


    return (
        <div>
            {sortList.map((location) => (
                <LocationItem key={location.id} location={location}/>
            ))}
        </div>
    )
}

export default NearLocaiton