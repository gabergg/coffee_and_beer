var allMarkers = [];
var infowindow;

function initialize_map() {
    var markers = [];
    var latlng = new google.maps.LatLng(39.8282, -98.5795);
    var options = {
        zoom: 4,
        center: latlng,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        zoomControlOptions: {
            style: google.maps.ZoomControlStyle.DEFAULT,
        }
    }

    var map = new google.maps.Map(document.getElementById("map-canvas"), options);
    var html = "<table>" +
        "<tr><td>Name:</td> <td><input type='text' id='name'/> </td> </tr>" +
        "<tr><td>Phone: </td><td><input type='text' id='phone'/></td></tr>" +
        "<tr><td>Activity:</td> <td><select id='beverage'>" +
        "<option value='bar' SELECTED>Coffee</option>" +
        "<option value='restaurant'>Beer</option>" +
        "<option value='other'>Other</option>" +
        "</select> </td></tr>" +
        "<tr><td></td><td><input type='button' value='Post' onclick='saveData()'/></td></tr>";
    infowindow = new google.maps.InfoWindow({
        content: html
    });


    // Create the search box and link it to the UI element.
    var input = /** @type {HTMLInputElement} */(
        document.getElementById('pac-input'));
    map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

    var searchBox = new google.maps.places.SearchBox(
        /** @type {HTMLInputElement} */(input));

    // [START region_getplaces]
    // Listen for the event fired when the user selects an item from the
    // pick list. Retrieve the matching places for that item.
    google.maps.event.addListener(searchBox, 'places_changed', function () {
        var places = searchBox.getPlaces();

        if (places.length == 0) {
            return;
        }
        for (var i = 0, marker; marker = markers[i]; i++) {
            marker.setMap(null);
        }

        // For each place, get the icon, place name, and location.
        markers = [];
        var bounds = new google.maps.LatLngBounds();
        for (var i = 0, place; place = places[i]; i++) {
            var image = {

                size: new google.maps.Size(71, 71),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(17, 34),
                scaledSize: new google.maps.Size(25, 25)
            };

            if(allMarkers.length >= 1) allMarkers.pop().setMap(null);

            var marker = new google.maps.Marker({
                map: map,
                title: place.name,
                draggable: true,
                position: place.geometry.location
            });

            allMarkers.push(marker);
            infowindow.open(map, marker);


            bounds.extend(place.geometry.location);
        }

        map.fitBounds(bounds);
        map.setZoom(14);
    });
    google.maps.event.addListener(map, "click", function(event) {

        if(allMarkers.length >= 1) allMarkers.pop().setMap(null);
        var marker = new google.maps.Marker({
          position: event.latLng,
          map: map,
          draggable: true
        });
        allMarkers.push(marker);
        infowindow.open(map, marker);
    });

    google.maps.event.addListener(map, 'bounds_changed', function () {
        var bounds = map.getBounds();
        searchBox.setBounds(bounds);
    });
}

function loadScript() {
    var script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = "http://maps.google.com/maps/api/js?libraries=places&sensor=false&callback=initialize_map"
    document.body.appendChild(script);
}

function saveData() {

}