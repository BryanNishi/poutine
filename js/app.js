
//google maps API

var map;

function initMap() {

    // The map, centered at zip from client input(latlng)
    var bounds = new google.maps.LatLngBounds();
    var latlng = new google.maps.LatLng(39.750, -105.000);
    map = new google.maps.Map(
        document.getElementById('map'), {
            zoom: 9,
            center: latlng
        })

};
