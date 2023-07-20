import React, { useState, useEffect } from 'react';
import Weather from './Weather'
import Airport from './Airport'

export default function App() {
    const [input, setInput] = useState();

    const handleInputChange = (event) => {
        setInput(event.target.value);
    }
    return (
        <div>
            <h1 id="tabelLabel" >Airport Information</h1>
            <p>Identifier: </p>
            <input type="text" value={input} onChange={handleInputChange} />
            <button>Get Airport Info</button>
            <Airport airportIdent={input} />
            <Weather airportIdent={input} />
        </div>
    );
}







    //const [forecasts, setForecasts] = useState([]);
    //const [loading, setLoading] = useState(true);

    //useEffect(() => {
    //    populateWeatherData();
    //}, []);

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
    //    const response = await fetch('weatherforecast');
    //    const data = await response.json();
    //    setForecasts(data);
    //    setLoading(false);
    //}

    //const contents = loading
    //    ? <p><em>Please enter an Airport Identifier code</em></p>
    //    : renderForecastsTable(forecasts);


//import React, { Component } from 'react';

//export default class App extends Component {
//    static displayName = App.name;

//    constructor(props) {
//        super(props);
//        this.state = { forecasts: [], loading: true };
//    }

//    componentDidMount() {
//        this.populateWeatherData();
//    }

//    static renderForecastsTable(forecasts) {
//        return (
//            <table className='table table-striped' aria-labelledby="tabelLabel">
//                <thead>
//                    <tr>
//                        <th>Date</th>
//                        <th>Temp. (C)</th>
//                        <th>Temp. (F)</th>
//                        <th>Summary</th>
//                    </tr>
//                </thead>
//                <tbody>
//                    {forecasts.map(forecast =>
//                        <tr key={forecast.date}>
//                            <td>{forecast.date}</td>
//                            <td>{forecast.temperatureC}</td>
//                            <td>{forecast.temperatureF}</td>
//                            <td>{forecast.summary}</td>
//                        </tr>
//                    )}
//                </tbody>
//            </table>
//        );
//    }

//    render() {
//        let contents = this.state.loading
//            ? <p><em>Loading... Please refresh once the ASP.NET backend has started. See <a href="https://aka.ms/jspsintegrationreact">https://aka.ms/jspsintegrationreact</a> for more details.</em></p>
//            : App.renderForecastsTable(this.state.forecasts);

//        return (
//            <div>
//                <h1 id="tabelLabel" >Weather forecast</h1>
//                <p>This component demonstrates fetching data from the server.</p>
//                {contents}
//            </div>
//        );
//    }

//    async populateWeatherData() {
//        const response = await fetch('weatherforecast');
//        const data = await response.json();
//        this.setState({ forecasts: data, loading: false });
//    }
//}
