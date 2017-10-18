var app = function () {
  var url = "https://api.punkapi.com/v2/beers";
  makeRequest( url );
}

var makeRequest = function( url ) {
  var request = new XMLHttpRequest();
  request.open( "GET", url);
  request.addEventListener( "load", function() {
    var beers = JSON.parse(this. responseText );
    addBeersToList(beers);
    addImageToBeer(pic):
  })
  request.send();
}


var addBeersToList = function ( beers ) {
  var ol = document.getElementById("selectBeer");
    for( beer of beers){
      var li = document.createElement("li");
      li.innerHTML = beer.name;
    // li.value = index;
      ol.appendChild(li);
    }
  };

// append image to beerName, how do I get image- iterate through again or
// find beer.image_url?
  var addImageToBeer = function ( pic ) {
    // var img = document.getElementById("");
      for (pic of beers){
        var
      }
  }

window.addEventListener("load", app);
