import React, { useState } from 'react';
import LocationMarker from './LocationMarker'
import LocationInfoBox from './LocationInfoBox'
import GoogleMapReact from 'google-map-react'

const Map = ({ coronaData, center, zoom  }) => {

    const [locationInfo, setLocationInfo] = useState(null)

    const markers = coronaData.map((item, index) => {
        return <LocationMarker key={index} lat={item.countryInfo.lat} lng={item.countryInfo.long} onClick={() => setLocationInfo({ country: item.country, cases: item.cases, todayCases: item.todayCases, deaths: item.deaths, todayDeaths: item.todayDeaths, recovered: item.recovered, todayRecovered: item.todayRecovered, active: item.active, critical: item.critical, tests: item.tests })} />
    })

    return (
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: '' }}
                defaultCenter={ center }
                defaultZoom={ zoom }
            >
                {markers}
            </GoogleMapReact>
            {locationInfo && <LocationInfoBox info={locationInfo} />}
        </div>
    )
}

Map.defaultProps = {
    center: {
        lat: 20,
        lng: 77
    },
    zoom: 6
}

export default Map