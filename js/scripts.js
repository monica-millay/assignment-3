

mapboxgl.accessToken = 'pk.eyJ1IjoibW9uaWNhLW1pbGxheSIsImEiOiJjbHV1ZWszeWEwOHlhMnBtcjYyZjd6dmZwIn0.RYKZY8Ym236tnkj4hxTbpg';

var mapOptions = {
    container: 'map-container', // container ID
    style: 'mapbox://styles/mapbox/satellite-v9', // satellite basemap
    center: [-70.2769993474405, 43.67045747544054], // starting position [lng, lat], put in cove
    zoom: 13, // starting zoom, did not include islands
}

// instantiate the map
const map = new mapboxgl.Map(mapOptions);

// add a navitation control
const nav = new mapboxgl.NavigationControl();
map.addControl(nav, 'top-right');

// loop over the courtData array to make a popup for each record
courtData.forEach(function (courtRecord) {

    // create a popup will show park and court info
    const popup = new mapboxgl.Popup({ closeOnClick: false })
        .setLngLat([courtRecord.longitude, courtRecord.latitude])
        .setHTML(`<h3>#${courtRecord.rank}. ${courtRecord.name}</h3> 
        ${courtRecord.num_courts} courts with ${courtRecord.view} view`)
        .addTo(map);
})