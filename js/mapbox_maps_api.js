mapboxgl.accessToken = mapboxToken;

var mapOptions = {
    container: "map",
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-98.4861, 29.4252],
    zoom: 8
}

var map = new mapboxgl.Map({
     container: 'map', // container ID
     style: 'mapbox://styles/mapbox/streets-v11', // style URL
     center: [-98.4861, 29.4252], // starting position [lng, lat]
     zoom: 14// starting zoom
 });

var pizzaMap = new mapboxgl.Map(mapOptions);