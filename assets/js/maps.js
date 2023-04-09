function initMap(){
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 3,
        center: {
            lat: 50.274816,
            lng: 14.453387
        }
    });
    
    var labels = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    var locations = [
        { lat: 47.106972, lng: 37.620129 },
        { lat: 49.809421, lng: 24.046178 },
        { lat: 53.275185, lng: -6.210092 },
        // { lat: 53.272755, lng: -9.051562 },
    ];
    
    var markers = locations.map(function(location, i){
        return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
        });
    });
    
    var markerCluster = new MarkerClusterer(map, markers, {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
}
