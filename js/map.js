jQuery(function($) {
    // Asynchronously Load the map API 
    var script = document.createElement('script');
    script.src = "//maps.googleapis.com/maps/api/js?key=AIzaSyCSfrpLDLApxgyEAf-zyiHfH5AHOdWj3nU&callback=initialize";
    document.body.appendChild(script);
  });

function initialize() {
  var map;
  var bounds = new google.maps.LatLngBounds();

  //google map custom marker icon - .png fallback for IE11
  var is_internetExplorer11= navigator.userAgent.toLowerCase().indexOf('trident') > -1;
  var marker_url = ( is_internetExplorer11 ) ? 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.png' : 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location_1.svg';
  
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
      scrollwheel: false,
      mapTypeControlOptions: {
        mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain',
        'styled_map']
      }
    }, mapOptions);
    map.setTilt(45);

    map.mapTypes.set('styled_map', styledMapType);
    map.setMapTypeId('styled_map');

    var conference = "/img/map/conference.png";
    var festival = "/img/map/festival.png";
    var labs = "/img/map/labs.png";

    // Multiple Markers
    var markers = [
    ['Centro de Extensión Universidad Católica', -33.440701,-70.641212, conference],
    ['Centro Cultural Gabriela Mistral', -33.438402, -70.638149, festival], 
    ['Fab Lab Santiago', -33.449806 , -70.627767, labs], 
    ['FabHaus FADEU UC', -33.420252 , -70.618093, labs],
    ['Fab Lab UC', -33.497856, -70.615294, labs],
    ['Fab Lab U. de Chile', -33.457914, -70.664698, labs], 
    ['Campus Creativo UNAB', -33.431548, -70.638249, labs]
    ];

    // Info Window Content
    var infoWindowContent = [
    ['<div class="info_content">' +
    '<h5>Centro de Extensión Universidad Católica</h5>' +
    '<p>Fab Conference Venue</p>' + '</div>'],
    ['<div class="info_content">' +
    '<h5>Centro Cultural Gabriela Mistral</h5>' +
    '<p>Fab Festival Venue</p>' +
    '</div>'],
    ['<div class="info_content">' +
    '<h5>Fab Lab Santiago</h5>' +
    '<p>Hosting Lab Venue</p>' +
    '</div>'],
    ['<div class="info_content">' +
    '<h5>FabHaus FADEU UC</h5>' +
    '<p>Hosting Lab Venue</p>' +
    '</div>'],
    ['<div class="info_content">' +
    '<h5>Fab Lab UC</h5>' +
    '<p>Hosting Lab</p>' +
    '</div>'],
    ['<div class="info_content">' +
    '<h5>Fab Lab U. de Chile</h5>' +
    '<p>Hosting Lab</p>' +
    '</div>'],
    ['<div class="info_content">' +
    '<h5>Campus Creativo UNAB</h5>' +
    '<p>Hosting Lab</p>' +
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
        visible: true,
        icon: markers[i][3],
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
      this.setZoom(12);
      google.maps.event.removeListener(boundsListener);
    });
    
  }