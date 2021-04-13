$(document).ready(function () {

    "use strict";
    mapboxgl.accessToken = mapboxToken;

// var mapOptions = {
//     container: "map",
//     style: 'mapbox://styles/mapbox/streets-v11',
//     center: [-98.4861, 29.4252],
//     zoom: 8
// }
// var map = new mapboxgl.Map(mapOptions);


    var weatherMap = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [-98.618436, 29.593404],
        zoom: 14
        });

    var weatherMarker = new mapboxgl.Marker({color: "gold"})
        .setLngLat([-98.618436, 29.593404])
        .addTo(weatherMap)

    var weatherPopup = new mapboxgl.Popup()
        .setHTML("<p>Test marker for weather map</p>")
        .addTo(weatherMap)

    weatherMarker.setPopup(weatherPopup)

// geocode("15900 La Cantera Pkwy Ste 25180, San Antonio, TX 78256", mapboxToken).then(function(results){
//     console.log(results);
//     weatherMap.flyTo(results);
// })


// Open Weather
//
    $.get("https://api.openweathermap.org/data/2.5/forecast?q", {
        appid: OPEN_WEATHER_APPID,
        lat: 29.4260,
        lon: -98.4861,
        units: "imperial",
        exclude: "current,minutely,hourly,alerts"
    }).done(function (results) {
        console.log(results);
        //console.log(JSON.stringify(results))
        //$.each(results, function (index, weather) {
            var content = "";
            content += "<li>" + JSON.stringify(results, null, 1) + "</li>"

        //var jsonPretty = JSON.stringify(JSON.parse(results),null,2);

        $('#main').append(content);
       // });
    });


    // dblclick function to update map  with markers, and also updates weather forecast below the map
    weatherMap.on('dblclick', function(e) {
        console.log('A dblclick event has occurred at ' + e.lngLat);
        var lng = e.lngLat;
        console.log(lng.lng);
        console.log(lng.lat);


        $.get("https://api.openweathermap.org/data/2.5/forecast?q", {
            appid: OPEN_WEATHER_APPID,
            lat: lng.lat,
            lon: lng.lng,
            units: "imperial",
            exclude: "current,minutely,hourly,alerts"
        }).done(function (results) {
            console.log(results);
            //console.log(JSON.stringify(results))
            //$.each(results, function (index, weather) {
            var result = results;
            var content = "";
            //content += "<li>" + JSON.stringify(results, null, 1) + "</li>"
            content += "<li>" + JSON.stringify(results.city) + "</li>"
            content += "<li>" + JSON.stringify(results.list[0]) + "</li>"
            //var jsonPretty = JSON.stringify(JSON.parse(results),null,2);

            $('#clickUpdateWeather').append(content);
            // });
        });

        var clickMarker = new mapboxgl.Marker({color: "gold"})
            .setLngLat(e.lngLat)
            .addTo(weatherMap)
    });
//Weathermap that updates on text input

    var geocoder = new MapboxGeocoder({ // Initialize the geocoder
        accessToken: mapboxgl.accessToken, // Set the access token
        placeholder: 'Search',
        mapboxgl: mapboxgl, // Set the mapbox-gl instance
        marker: false, // Do not use the default marker style
    });

// Add the geocoder to the map
    weatherMap.addControl(geocoder);



});
