import React from 'react'
import RoomSharpIcon from '@material-ui/icons/RoomSharp';

const LocationMarker = ({ lat, lng, onClick }) => {
    return (
        <div className="location-marker" onClick={onClick}>
            <RoomSharpIcon className="location-icon" />
        </div>
    )
}

export default LocationMarker