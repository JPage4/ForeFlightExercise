import React, { useState, useEffect } from 'react';
import { Base64 } from 'js-base64';

export default function Airport(props) {

    const username = "ff-interview";
    const password = "@-*KzU.*dtP9dkoE7PryL2ojY!uDV.6JJGC9";
    const auth = new Headers();
    auth.set('Authorization', 'Basic ' + Base64.encode(username + ":" + password));

    //useEffect(() => {
    //    fetch("https://qa.foreflight.com/airports/kaus", {
    //        method: 'get',
    //        headers: new Headers({
    //            "ff-coding-exercise": "1",
    //            auth
    //        })
    //    });
    //}, []);

    return (
        <div>
            <p>Airport Identifier</p>
            <p>Airport Name</p>
            <p>Airport Available Runways: 3</p>
            <p>Latitude: </p>
            <p>Longitude: </p>
        </div>
    )
}