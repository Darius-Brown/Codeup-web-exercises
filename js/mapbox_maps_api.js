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

 geocode("15900 La Cantera Pkwy Ste 25180, San Antonio, TX 78256", mapboxToken).then(function(results){
     console.log(results);
     marcoMap.flyTo(results);
 })