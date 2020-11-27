const LocationInfoBox = ({ info }) => {

    return (
        <div id="location-info-box" className="location-info">
            <h2>COVID-19 Info</h2>
            <ul>
                <li>COUNTRY: <strong>{ info.country }</strong></li>
                <li>TOTAL NO.OF CASES: <strong>{ info.cases }</strong></li>
                <li>TOTAL NO.OF CASES TODAY: <strong>{ info.todayCases }</strong></li>
                <li>TOTAL NO.OF DEATHS: <strong>{ info.deaths }</strong></li>
                <li>TOTAL NO.OF DEATHS TODAY: <strong>{ info.todayDeaths }</strong></li>
                <li>TOTAL RECOVERED: <strong>{ info.recovered }</strong></li>
                <li>TOTAL RECOVERED TODAY: <strong>{ info.todayRecovered }</strong></li>
                <li>TOTAL NO.OF ACTIVE CASES: <strong>{ info.active }</strong></li>
                <li>TOTAL NO.OF CRITICAL CASES: <strong>{ info.critical }</strong></li>
                <li>TOTAL NO.OF TESTS DONE: <strong>{ info.tests }</strong></li>
            </ul>
        </div>
    )
}

export default LocationInfoBox