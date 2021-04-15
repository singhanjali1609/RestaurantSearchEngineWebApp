var allLocations = [
  {
    name: "Subway",
    lat: 39.2818348,
    lng: -76.5837981,
    address: "2391 Del Rio ",
    city: "San Jose",
    state: "CA",
    zip: "23231",
    phone: "(000) 111-2223",
  },
  {
    name: "Chipotle Campbell Blvd",
    lat: 39.1954722,
    lng: -76.6161568,
    address: "5341 Campbell Blvd",
    city: "Baltimore",
    state: "MD",
    zip: "21236",
    phone: "(555) 555-5555",
  },
  {
    name: "Mcdonald Pacific Blvd",
    lat: 39.3131495,
    lng: -76.7573689,
    address: "7091 Pacific Blvd #132",
    city: "San Mateo",
    state: "CA",
    zip: "21244",
    phone: "(555) 555-5555",
  },
  {
    name: "KFC",
    lat: 39.4968089,
    lng: -76.6566791,
    address: "112 Shawan Rd",
    city: "Hunt Valley",
    state: "MD",
    zip: "21031",
    phone: "(555) 555-5555",
  },
  {
    name: "Olive Garden",
    lat: 39.3379131,
    lng: -76.6376987,
    address: "1041 W 41st St",
    city: "Baltimore",
    state: "MD",
    zip: "21211",
    phone: "(555) 555-5555",
  },
  {
    name: "Garlic Mediterrean",
    lat: 39.3731967,
    lng: -76.5447898,
    address: "7711 Harford Rd",
    city: "Parkville",
    state: "MD",
    zip: "21234",
    phone: "(555) 555-5555",
  },
  {
    name: "Chipotle Parkville",
    lat: 39.3731967,
    lng: -76.5447898,
    address: "7711 Harford Rd",
    city: "Parkville",
    state: "MD",
    zip: "21234",
    phone: "(555) 555-5555",
  },
  {
    name: "Taco Bell",
    lat: 39.0979316,
    lng: -76.8112019,
    address: "3353 Corridor Marketplace",
    city: "Laurel",
    state: "MD",
    zip: "20724",
    phone: "(555) 555-5555",
  },
  {
    name: "Pizza Hut",
    lat: 38.9550682,
    lng: -76.8302716,
    address: "10201 Martin Luther King Jr. Hwy #100",
    city: "Bowie",
    state: "MD",
    zip: "20720",
    phone: "(555) 555-5555",
  },
  {
    name: "Panda Express",
    lat: 38.9213972,
    lng: -76.8486775,
    address: "9301 Woodmore Center Dr #514",
    city: "Ardmore",
    state: "MD",
    zip: "20774",
    phone: "(555) 555-5555",
  },
  {
    name: "Five Guys",
    lat: 38.870548,
    lng: -77.1552662,
    address: "6299 Seven Corners Center",
    city: "Falls Church",
    state: "VA",
    zip: "22044",
    phone: "(555) 555-5555",
  },
  {
    name: "StarBucks",
    lat: 38.924832,
    lng: -77.239830,
    address: "8461 Leesburg Pike A",
    city: "Vienna",
    state: "VA",
    zip: "22182",
    phone: "(555) 555-5555",
  },
  {
    name: "Dominos",
    lat: 38.9204188,
    lng: -77.0233562,
    address: "2301 Georgia Ave NW",
    city: "Washington",
    state: "DC",
    zip: "20059",
    phone: "(555) 555-5555",
  },
  {
    name: "Chipotle F St",
    lat: 38.8980058,
    lng: -77.0231909,
    address: "601 F St NW",
    city: "Washington",
    state: "DC",
    zip: "20004",
    phone: "(555) 555-5555",
  },
  {
    name: "Chipotle Pennsylvania Ave NW",
    lat: 38.9016578,
    lng: -77.0497453,
    address: "2000 Pennsylvania Ave NW #15",
    city: "Washington",
    state: "DC",
    zip: "20006",
    phone: "(555) 555-5555",
  },
  {
    name: "Chipotle Arlington",
    lat: 38.8539786,
    lng: -77.0513267,
    address: "2231 Crystal Dr #100",
    city: "Arlington",
    state: "VA",
    zip: "22202",
    phone: "(555) 555-5555",
  },
  {
    name: "Chipotle Fredericksburg",
    lat: 38.3021248,
    lng: -77.4870199,
    address: "1601 Jefferson Davis Hwy",
    city: "Fredericksburg",
    state: "VA",
    zip: "22401",
    phone: "(555) 555-5555",
  },
  {
    name: "Chipotle Jacksonville",
    lat: 30.3159587,
    lng: -81.5528547,
    address: " 9395 Atlantic Blvd.",
    city: "Jacksonville",
    state: "FL",
    zip: "32225",
    phone: "(555) 555-5555",
  },
  {
    name: "Chipotle Destin",
    lat: 30.3899367,
    lng: -86.4251081,
    address: "4281 Legendary Dr J-114",
    city: "Destin",
    state: "FL",
    zip: "32541",
    phone: "(555) 555-5555",
  },
  {
    name: "Chipotle Fort Worth",
    lat: 32.7514217,
    lng: -97.3625804,
    address: "3000 W 7th St",
    city: "Fort Worth",
    state: "TX",
    zip: "76107",
    phone: "(555) 555-5555",
  },
  {
    name: "Chipotle Lubbock",
    lat: 33.5674877,
    lng: -101.9471146,
    address: "2912 W Loop 289",
    city: "Lubbock",
    state: "TX",
    zip: "79407",
    phone: "(555) 555-5555",
  },
  {
    name: "Chipotle Millbrae",
    lat: 37.5965469,
    lng: -122.3884283,
    address: "135 S El Camino Real",
    city: "Millbrae",
    state: "CA",
    zip: "94030",
    phone: "(555) 555-5555",
  },
  {
    name: "Chipotle Chico",
    lat: 39.7343999,
    lng: -121.8378356,
    address: "620 Mangrove Ave",
    city: "Chico",
    state: "CA",
    zip: "95926",
    phone: "(555) 555-5555",
  },
  {
    name: "Chipotle Bozeman",
    lat: 45.6797105,
    lng: -111.0652063,
    address: "1919 W Main St",
    city: "Bozeman",
    state: "MT",
    zip: "59718",
    phone: "(555) 555-5555",
  },
  {
    name: "Chipotle LA",
    lat: 34.0475871,
    lng: -118.2588657,
    address: "601 W 7th St",
    city: "Los Angeles",
    state: "CA",
    zip: "90017",
    phone: "(555) 555-5555",
  },
  {
    name: "Chipotle Tucson",
    lat: 32.8742141,
    lng: -112.5764995,
    address: "905 E University Blvd #149",
    city: "Tucson",
    state: "AZ",
    zip: "85719",
    phone: "(555) 555-5555",
  },
  {
    name: "Chipotle NYC",
    lat: 40.7561529,
    lng: -73.9812333,
    address: "25 W 45th St",
    city: "New York",
    state: "NY",
    zip: "10036",
    phone: "(555) 555-5555",
  },
  {
    name: "Chipotle Atlanta",
    lat: 33.7849838,
    lng: -84.5176628,
    address: "718 Ponce De Leon Ave NE",
    city: "Atlanta",
    state: "GA",
    zip: "30306",
    phone: "(555) 555-5555",
  },
  {
    name: "Chipotle Chicago",
    lat: 41.904379,
    lng: -87.6319817,
    address: "1166 N State St",
    city: "Chicago",
    state: "IL",
    zip: "60610",
    phone: "(555) 555-5555",
  },
  {
    name: "Chipotle North Dakota",
    lat: 46.8553588,
    lng: -96.8635084,
    address: "1680 45th St S",
    city: "Fargo",
    state: "ND",
    zip: "58103",
    phone: "(555) 555-5555",
  },
  {
    name: "Chipotle Nebraska",
    lat: 41.2587763,
    lng: -96.0253507,
    address: "201 S 72nd St",
    city: "Omaha",
    state: "NE",
    zip: "68114",
    phone: "(555) 555-5555",
  },
  {
    name: "Chipotle Utah",
    lat: 40.273525,
    lng: -111.6809018,
    address: "71 E University Pkwy",
    city: "Orem",
    state: "UT",
    zip: "84097",
    phone: "(555) 555-5555",
  },
  {
    name: "Chipotle Seattle",
    lat: 47.6100341,
    lng: -122.3398859,
    address: "1501 3rd Ave",
    city: "Seattle",
    state: "WA",
    zip: "98101",
    phone: "(555) 555-5555",
  },
  {
    name: "Chipotle Colorado",
    lat: 38.8019045,
    lng: -104.8214324,
    address: "2130 Southgae Rd #100",
    city: "Colorado Springs",
    state: "CO",
    zip: "80906",
    phone: "(555) 555-5555",
  },
];


function createSearchableMap(locations = allLocations) {
  var bounds = new google.maps.LatLngBounds();
  var mapOptions = {mapTypeId: 'roadmap'};
  var markers = [];
  var infoWindowContent = [];
  var map = new google.maps.Map(document.getElementById('locations-near-you-map'), mapOptions);
  
  map.setTilt(45);
  
  locations.forEach(function(location) {
    markers.push([location.name, location.lat, location.lng]);
    
    infoWindowContent.push(['<div class="infoWindow"><h3>' + location.name + 
                            '</h3><p>' + location.address + '<br />' + location.city + 
                            ', ' + location.state + ' ' + location.zip + '</p><p>Phone ' + 
                            location.phone + '</p></div>']);
  });	    

  var infoWindow = new google.maps.InfoWindow(), marker, i;
  
  // Place the markers on the map
  for (i = 0; i < markers.length; i++) {
    var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
    bounds.extend(position);
    marker = new google.maps.Marker({
      position: position,
      map: map,
      title: markers[i][0]
    });
    
    // Add an infoWindow to each marker, and create a closure so that the current
    // marker is always associated with the correct click event listener
    google.maps.event.addListener(marker, 'click', (function(marker, i) {
      return function() {
        infoWindow.setContent(infoWindowContent[i][0]);
        infoWindow.open(map, marker);
      }
    })(marker, i));

    // Only use the bounds to zoom the map if there is more than 1 location shown
    if (locations.length > 1) {
      map.fitBounds(bounds);
    } else {
      var center = new google.maps.LatLng(locations[0].lat, locations[0].lng);
      map.setCenter(center);
      map.setZoom(15);
    }
  }
}

function filterLocations() {
  var userLatLng;
  var geocoder = new google.maps.Geocoder();
  var userAddress = document.getElementById('userAddress').value.replace(/[^a-z0-9\s]/gi, '');
  var maxRadius = parseInt(document.getElementById('maxRadius').value, 10);
  
  if (userAddress && maxRadius) {
    userLatLng = getLatLngViaHttpRequest(userAddress);
  } 

  function getLatLngViaHttpRequest(address) {
    // Set up a request to the Geocoding API
    // Supported address format is City, City + State, just a street address, or any combo
    var addressStripped = address.split(' ').join('+');
    var key = MY_API_KEY;
    var request = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + addressStripped + '&key=' + key;
    
    // Call the Geocoding API using jQuery GET, passing in the request and a callback function 
    // which takes one argument "data" containing the response
    $.get( request, function( data ) {
      var searchResultsAlert = document.getElementById('location-search-alert');

      // Abort if there is no response for the address data
      if (data.status === "ZERO_RESULTS") {
        searchResultsAlert.innerHTML = "Sorry, '" + address + "' seems to be an invalid address.";
        return;
      }

      var userLatLng = new google.maps.LatLng(data.results[0].geometry.location.lat, data.results[0].geometry.location.lng);
      var filteredLocations = allLocations.filter(isWithinRadius);
      
      if (filteredLocations.length > 0) {
        createSearchableMap(filteredLocations);
        createListOfLocations(filteredLocations);
        searchResultsAlert.innerHTML = 'Chipotle Locations within ' + maxRadius + ' miles of ' + userAddress + ':';
      } else {
        console.log("nothing found!");
        document.getElementById('locations-near-you').innerHTML = '';
        searchResultsAlert.innerHTML = 'Sorry, no Chipotle locations were found within '+ maxRadius + ' miles of ' + userAddress + '.';
      }

      function isWithinRadius(location) {
        var locationLatLng = new google.maps.LatLng(location.lat, location.lng);
        var distanceBetween = google.maps.geometry.spherical.computeDistanceBetween(locationLatLng, userLatLng);

        return convertMetersToMiles(distanceBetween) <= maxRadius;
      }
    });  
  }
}

function convertMetersToMiles(meters) {
  return (meters * 0.000621371);
}

function createListOfLocations(locations) {
  var locationsList = document.getElementById('locations-near-you');
  
  // Clear any existing locations from the previous search first
  locationsList.innerHTML = '';
  
  locations.forEach( function(location) {
    var specificLocation = document.createElement('div');
    var locationInfo = "<h4>" + location.name + "</h4><p>" + location.address + "</p>" +
                       "<p>"  + location.city + ", " + location.state + " " + location.zip + "</p><p>" + location.phone + "</p>";
    specificLocation.setAttribute("class", 'location-near-you-box');
    specificLocation.innerHTML = locationInfo;
    locationsList.appendChild(specificLocation);
  });
}

$('#submitLocationSearch').on('click', function(e) {
  e.preventDefault();
  filterLocations();
});
