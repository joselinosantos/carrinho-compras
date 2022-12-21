const local = new google.maps.LatLng(-16.0787433, -47.9864705,17);

function initialize() {
    let mapProp = {
        center: local,
        zoom: 15,
        scrollwheel: true,
        draggable: true,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    let map = new google.maps.Map(document.getElementById("googleMap"), mapProp);

    let marker = new google.maps.Marker({
        position: local,
    });

    marker.setMap(map);
}

google.maps.event.addDomListener(window, 'load', initialize);