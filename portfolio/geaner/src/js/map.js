// Google map

function initMap() {
  const element = document.getElementById('map');
  const options = {
    center: {
      lat: 50.434756,
      lng: 30.5095577,
    },
    zoom: 17,
  };

  const myMap = new google.maps.Map(element, options);

  function addMarker(coordinates) {
    const marker = new google.maps.Marker({
      position: coordinates,
      map: myMap,
    });
    const info = new google.maps.InfoWindow({
      content: '<h4>Geaner</h4>',
    });
    marker.addListener('mouseover', function() {
      info.open(myMap, marker);
    });
    marker.addListener('mouseout', function() {
      info.close(myMap, marker);
    });
  }

  addMarker(options.center);
}

window.initMap = initMap;
