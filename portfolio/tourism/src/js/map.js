// Google map

function initMap() {
  const element = document.getElementById('map');
  const options = {
    center: {
      lat: 44.5330188,
      lng: -87.925449,
    },
    zoom: 16,
  };

  const myMap = new google.maps.Map(element, options);

  function addMarker(coordinates) {
    const marker = new google.maps.Marker({
      position: coordinates,
      map: myMap,
    });
    const info = new google.maps.InfoWindow({
      content: '<h4>Tourism</h4>',
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
