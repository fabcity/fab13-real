jQuery(function($) {
    // Asynchronously Load the map API 
    var script = document.createElement('script');
    script.src = "//maps.googleapis.com/maps/api/js?key=AIzaSyCSfrpLDLApxgyEAf-zyiHfH5AHOdWj3nU&callback=initialize";
    document.body.appendChild(script);
  });

function initialize() {
  var map;
  var bounds = new google.maps.LatLngBounds();
  var styledMapType = new google.maps.StyledMapType(
    [
    {
      "featureType": "landscape",
      "elementType": "labels",
      "stylers": [
      {
        "visibility": "off"
      }
      ]
    },
    {
      "featureType": "transit",
      "elementType": "labels",
      "stylers": [
      {
        "visibility": "off"
      }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "labels",
      "stylers": [
      {
        "visibility": "off"
      }
      ]
    },
    {
      "featureType": "water",
      "elementType": "labels",
      "stylers": [
      {
        "visibility": "off"
      }
      ]
    },
    {
      "featureType": "road",
      "elementType": "labels.icon",
      "stylers": [
      {
        "visibility": "off"
      }
      ]
    },
    {
      "stylers": [
      {
        "hue": "#00aaff"
      },
      {
        "saturation": -100
      },
      {
        "gamma": 2.15
      },
      {
        "lightness": 12
      }
      ]
    },
    {
      "featureType": "road",
      "elementType": "labels.text.fill",
      "stylers": [
      {
        "visibility": "on"
      },
      {
        "lightness": 24
      }
      ]
    },
    {
      "featureType": "road",
      "elementType": "geometry",
      "stylers": [
      {
        "lightness": 57
      }
      ]
    }
    ],
    {name: 'Styled Map'});
var mapOptions = {
  mapTypeId: 'roadmap'
};


    // Display a map on the page
    map = new google.maps.Map(document.getElementById("map_canvas"), {
          mapTypeControlOptions: {
            mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',
                    'styled_map']
          }
        }, mapOptions);
    map.setTilt(45);

    map.mapTypes.set('styled_map', styledMapType);
    map.setMapTypeId('styled_map');

    // Multiple Markers
    var markers = [
    ['Centro de Extensión Universidad Católica', -33.440701,-70.641212],
    ['Centro Cultural Gabriela Mistral', -33.438402, -70.638149]
    ];

    // Info Window Content
    var infoWindowContent = [
    ['<div class="info_content">' +
    '<h5>Centro de Extensión Universidad Católica</h5>' +
    '<p>Fab Conference Venue</p>' +        '</div>'],
    ['<div class="info_content">' +
    '<h5>Centro Cultural Gabriela Mistral</h5>' +
    '<p>Fab Festival Venue</p>' +
    '</div>']
    ];

    // Display multiple markers on a map
    var infoWindow = new google.maps.InfoWindow(), marker, i;
    
    // Loop through our array of markers & place each one on the map  
    for( i = 0; i < markers.length; i++ ) {
      var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
      bounds.extend(position);
      marker = new google.maps.Marker({
        position: position,
        map: map,
        title: markers[i][0]
      });

        // Allow each marker to have an info window    
        google.maps.event.addListener(marker, 'click', (function(marker, i) {
          return function() {
            infoWindow.setContent(infoWindowContent[i][0]);
            infoWindow.open(map, marker);
          }
        })(marker, i));

        // Automatically center the map fitting all markers on the screen
        map.fitBounds(bounds);
      }

    // Override our map zoom level once our fitBounds function runs (Make sure it only runs once)
    var boundsListener = google.maps.event.addListener((map), 'bounds_changed', function(event) {
      this.setZoom(14);
      google.maps.event.removeListener(boundsListener);
    });
    
  }