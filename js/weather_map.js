$(document).ready(function () {

    "use strict";
    mapboxgl.accessToken = mapboxToken;

// var mapOptions = {
//     container: "map",
//     style: 'mapbox://styles/mapbox/streets-v11',
//     center: [-98.4861, 29.4252],
//     zoom: 8
// }

    var pizzaMap = new mapboxgl.Map({
        container: 'map', // container ID
        style: 'mapbox://styles/mapbox/streets-v11', // style URL
        center: [-98.618436, 29.593404], // starting position [lng, lat]
        zoom: 14// starting zoom
    });

// var map = new mapboxgl.Map(mapOptions);

    var pizzaMarker = new mapboxgl.Marker({color: "gold"})
        .setLngLat([-98.618436, 29.593404])
        .addTo(pizzaMap)

    var pizzaPopup = new mapboxgl.Popup()
        .setHTML("<p>Grimaldi's The best Pizza in San Antonio</p>")
// .addTo(pizzaMap)

    pizzaMarker.setPopup(pizzaPopup)

// geocode("15900 La Cantera Pkwy Ste 25180, San Antonio, TX 78256", mapboxToken).then(function(results){
//     console.log(results);
//     pizzaMap.flyTo(results);
// })


// Open Weather
//
    $.get("https://api.openweathermap.org/data/2.5/onecall", {
        appid: OPEN_WEATHER_APPID,
        lat: 29.4260,
        lon: -98.4861,
        units: "imperial",
        exclude: "current,minutely,hourly,alerts"
    }).done(function (results) {
        console.log(results);
        console.log(JSON.stringify(results))
        $.each(results, function (index, weather) {
            var content = "";
            content += "<p>" + JSON.stringify(results) + "</p>"
            console.log(content);
            $('#main').append(content);
        });
    });
//clouds: 60
// ​​​
// dew_point: 62.82
// ​​​
// dt: 1618250400
// ​​​
// feels_like: Object { day: 88.18, night: 66.11, eve: 89.46, … }
// ​​​
// humidity: 44
// ​​​
// pop: 0.66
// ​​​
// pressure: 1007
// ​​​
// rain: 1.9
// ​​​
// sunrise
//     function generateWeather(){
//         var weatherRequest = $.ajax("#");
//
//         weatherRequest.done(function(data){
//
//             $.each(data, function(index, book){
//                 var content = "";
//                 content += "<h2>" + book.title + "</h2>"
//                 content += "<h4>" + book.author + "</h4>"
//                 console.log(content);
//                 $('#main').append(content);
//             });
//         });

// $.get("https://api.openweathermap.org/data/2.5/onecall", {
//     appid: OPEN_WEATHER_APPID,
//     lat: 29.4260,
//     lon: -98.4861,
//     units: "imperial",
//     exclude: "current,minutely,hourly,alerts"
// }).done(function (results){
//     console.log(results);
// })

// $.get("https://api.openweathermap.org/data/2.5/forecast?", {
//     q: "San Antonio, US",
//     apiid: OPEN_WEATHER_APPID,
// }).done(function (results){
//     console.log(results);
// })


});
