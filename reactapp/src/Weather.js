import React, { useState, useEffect } from 'react';

export default function Weather(props) {
    //const [forecasts, setForecasts] = useState([]);
    //const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://qa.foreflight.com/weather/report/kaus", {
            method: 'get',
            headers: new Headers({
                "ff-coding-exercise": "1"
            })
        });
        //populateWeatherData();
    }, []);


    return (
        <div>
            <p>Tempurature(F): </p>
            <p>Relative Humidity(%): </p>
            <p>Cloud Coverage: </p>
            <p>Visibility: </p>
            <p>Wind Speed(MPH): </p>
            <p>Wind Direction: </p>
            <p>Forecast for next 2 periods: </p> {/*report.forecast.conditions[1],[2]*/}
                <p>Time offset: </p> /{/*report/forecast/period/dateStart*/}
                <p>Wind Speed: </p>
                <p>Wind Direction: </p>
            {/*{ contents }*/}
        </div>
    )
}




    //const renderForecastsTable = (forecasts) => {
    //    return (
    //        <table className='table table-striped' aria-labelledby="tabelLabel">
    //            <thead>
    //                <tr>
    //                    <th>Date</th>
    //                    <th>Temp. (C)</th>
    //                    <th>Temp. (F)</th>
    //                    <th>Summary</th>
    //                </tr>
    //            </thead>
    //            <tbody>
    //                {forecasts.map(forecast =>
    //                    <tr key={forecast.date}>
    //                        <td>{forecast.date}</td>
    //                        <td>{forecast.temperatureC}</td>
    //                        <td>{forecast.temperatureF}</td>
    //                        <td>{forecast.summary}</td>
    //                    </tr>
    //                )}
    //            </tbody>
    //        </table>
    //    );
    //}

    //const populateWeatherData = async () => {
    //    const response = await fetch('https://qa.foreflight.com/weather/report/kaus', {
    //        headers: {
    //            "ff-coding-exercise" :"1"
    //        }
    //    });
    //    //const response = await fetch('weatherForecast');
    //    const data = await response.json();
    //    setForecasts(data);
    //    setLoading(false);
    //}

    //const contents = loading ? <p><em>Please enter an Airport Identifier code</em></p> : renderForecastsTable(forecasts);