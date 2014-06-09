// define map
var map = L.map('map').setView([57.8915,86.8359], 3);

// define addLayer function
function addLayer(layer, name, zIndex) {
    layer
        .setZIndex(zIndex)
        .addTo(map);
}

// add basemap only
addLayer(L.mapbox.tileLayer('tylermachado.7xu07ldi'), 'Base Map', -1);

// here are the new layers we're going to add
var layers =  [L.mapbox.tileLayer('tylermachado.vvl323xr'),
      L.mapbox.tileLayer('tylermachado.5f315rk9'),
      L.mapbox.tileLayer('tylermachado.pebchaor'),
      L.mapbox.tileLayer('tylermachado.2jglow29'),
      L.mapbox.tileLayer('tylermachado.b48fflxr'),
      L.mapbox.tileLayer('tylermachado.n9widx6r'),
      L.mapbox.tileLayer('tylermachado.8idon7b9'),
      L.mapbox.tileLayer('tylermachado.1irafw29'),
      L.mapbox.tileLayer('tylermachado.lx5n4s4i'),
      L.mapbox.tileLayer('tylermachado.rghqia4i'),
      L.mapbox.tileLayer('tylermachado.iyl4ygb9'),
      L.mapbox.tileLayer('tylermachado.qhzg2e29'),
      L.mapbox.tileLayer('tylermachado.6m4vaemi'),
      L.mapbox.tileLayer('tylermachado.8l0daemi'),
      L.mapbox.tileLayer('tylermachado.wkdtpgb9'),
      ];

// and the length of said array so that the timer will stop
var arrayLength = layers.length;

// set the counter for the timer
var i = 0;   

var playbutton = document.getElementById("play");
var resetbutton = document.getElementById("reset");

function showReset () {
  resetbutton.style.display = 'block';
}                  

// set the timer delay function to add layers to map, calling function name in HTML button
function gogogo () {           
   setTimeout(function () {    
      addLayer(layers[i], i); // adding one layer at a time from the array
      i++;                     
      if (i < arrayLength) {            
        gogogo();             
      }  
      else if (i >= arrayLength) {
        showReset();
      }                      
   }, 750); // delay between layer adds in milliseconds
}

function deleteLayers () {          
   setTimeout(function () {    
      i--;
      if (i < 0) {
        i++;
        gogogo();
      }  else {   
        map.removeLayer(layers[i]);         
        deleteLayers();             
      }          
   }, 1); // delay between layer adds in milliseconds
}

playbutton.onclick=function() {
  document.getElementById("play").style.display = 'none';
  gogogo();
}

resetbutton.onclick=function() {
  document.getElementById("reset").style.display = 'none';
  deleteLayers();
}
