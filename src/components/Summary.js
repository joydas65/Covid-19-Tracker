import React from 'react'

const Summary = ({ coronaData }) => {

    const totalcoronacases = coronaData.reduce((amt, item) => item.cases + amt, 0)

    const totaltests = coronaData.reduce((amt, item) => item.tests + amt, 0)

    const totaldeaths = coronaData.reduce((amt, item) => item.deaths + amt, 0)

    const totalactivecases = coronaData.reduce((amt, item) => item.active + amt, 0)

    const totalcriticalcases = coronaData.reduce((amt, item) => item.critical + amt, 0)

    const totalrecovered = coronaData.reduce((amt, item) => item.recovered + amt, 0)

    const totalcasestoday = coronaData.reduce((amt, item) => item.todayCases + amt, 0)

    const totaldeathstoday = coronaData.reduce((amt, item) => item.todayDeaths + amt, 0)

    return (
        <div className="tracker-stats">
            <ul>
                <li className="tracker-stat">
                    <p className="tracker-stat-primary">
                        {totalcoronacases}
                        <strong>
                            Total Cases
                        </strong>
                    </p>
                </li>
                <li className="tracker-stat">
                    <p className="tracker-stat-primary">
                        {totaltests}
                        <strong>
                            Total Tests
                        </strong>
                    </p>
                </li>
                <li className="tracker-stat">
                    <p className="tracker-stat-primary">
                        {totaldeaths}
                        <strong>
                            Total Deaths
                        </strong>
                    </p>
                </li>
                <li className="tracker-stat">
                    <p className="tracker-stat-primary">
                        {totalactivecases}
                        <strong>
                            Total Active Cases
                        </strong>
                    </p>
                </li>
                <li className="tracker-stat">
                    <p className="tracker-stat-primary">
                        {totalcriticalcases}
                        <strong>
                            Total Critical Cases
                        </strong>
                    </p>
                </li>
                <li className="tracker-stat">
                    <p className="tracker-stat-primary">
                        {totalrecovered}
                        <strong>
                            Total Recovered Cases
                        </strong>
                    </p>
                </li>
                <li className="tracker-stat">
                    <p className="tracker-stat-primary">
                        {totalcasestoday}
                        <strong>
                            Total Cases Today
                        </strong>
                    </p>
                </li>
                <li className="tracker-stat">
                    <p className="tracker-stat-primary">
                        {totaldeathstoday}
                        <strong>
                            Total Deaths Today
                        </strong>
                    </p>
                </li>
            </ul>
        </div>
    )
}

export default Summary