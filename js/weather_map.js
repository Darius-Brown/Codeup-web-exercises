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
        zoom: 11
        });

    var weatherMarker = new mapboxgl.Marker({color: "#11787d"})
        .setLngLat([-98.618436, 29.593404])
        .addTo(weatherMap)

    var weatherPopup = new mapboxgl.Popup()
        .setHTML("<p>Starting point for forecast</p>")
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
            for (var i = 0; i < 40; i++)
            // content += "<p class='forecast'>" + (results.list[i].dt_txt) + JSON.stringify(results.list[i].main,null, 2) + "</p>";
            content += "<p class='forecast'>" + JSON.stringify(results.city.name, null, 2) +  JSON.stringify(results.list[i].dt_txt, null, 2) + JSON.stringify(results.list[i].main.temp, null, 2) + JSON.stringify(results.list[i].main.humidity) + "</p>";
           // content += "<li>" + (results.list.dt,null, 2) + "</li>";

        //var jsonPretty = JSON.stringify(JSON.parse(results),null,2);

        $('#main').html(content);
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
            var content = "";
            //for (var i = 0; i<results.list.length;i++)
            content += "<h6>" + JSON.stringify(results.city.name, null, 2) + JSON.stringify(results.list[0].main.temp, null, 2) + JSON.stringify(results.list[0].dt_txt, null, 2) + JSON.stringify(results.list[0].main.humidity) + "</h6>";
            // content += "<li>" + JSON.stringify(results.list[0]) + "</li>"
            //var jsonPretty = JSON.stringify(JSON.parse(results),null,2);

            $('#main').append(content);
            // });
        });

        var clickMarker = new mapboxgl.Marker({color: "#11787d"})
            .setLngLat(e.lngLat)
            .addTo(weatherMap)
        var clickPopup = new mapboxgl.Popup()
            .setHTML("<p>Displaying current weather at double-clicked location..</p>")
            .addTo(weatherMap)

        clickMarker.setPopup(clickPopup)
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

// A custom marker that loads on user input
// After the map style has loaded on the page,
// add a source layer and default styling for a single point
    weatherMap.on('load', function() {
        weatherMap.addSource('single-point', {
            type: 'geojson',
            data: {
                type: 'FeatureCollection',
                features: []
            }
        });

        weatherMap.addLayer({
            id: 'point',
            source: 'single-point',
            type: 'circle',
            paint: {
                'circle-radius': 15,
                'circle-color': 'hotpink'
            }
        });

        // Listen for the `result` event from the Geocoder
        // `result` event is triggered when a user makes a selection
        //  Add a marker at the result's coordinates
        geocoder.on('result', function(e) {
            weatherMap.getSource('single-point').setData(e.result.geometry);
        });
    });




    weatherMap.on('load', function() {
        var mapCanvas = document.getElementsByClassName('mapboxgl-canvas')[0];
        var mapDiv = document.getElementById('map');
                mapCanvas.style.width = '100%';
                mapDiv.style.width = '100%';

    });


});
