// define map
var map = L.map('map').setView([57.8915,86.8359], 3);

// define addLayer function
function addLayer(layer, zIndex) {
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

var months = ["October 2010", "November 2010", "December 2010", "January 2011", "February 2011", "March 2011", "April 2011", "May 2011", "June 2011", "July 2011", "August 2011", "September 2011", "October 2011", "November 2011", "December 2011", "January 2012", "February 2012", "March 2012", "April 2012", "May 2012", "June 2012", "July 2012", "August 2012", "September 2012", "October 2012", "November 2012", "December 2012", "January 2013", "February 2013", "March 2013", "April 2013", "May 2013", "June 2013", "July 2013", "August 2013", "September 2013", "October 2013", "November 2013", "December 2013", "January 2014", "February 2014", "March 2014", "April 2014"];

var monthsLength = months.length;

// set the counter for the timers
var i = 0;   
var j = 0;

// the two big buttons for our UX
var playbutton = document.getElementById("play");
var resetbutton = document.getElementById("reset");

// reset button is hidden by default, this unhides it at the right time
function showReset () {
  resetbutton.style.display = 'block';
}     

function monthCounter () {           
   setTimeout(function () {    
      document.getElementById('monthSpace').innerHTML=months[j];
      j++;                     
      if (j < monthsLength) {            
        monthCounter();             
      }                    
   }, 250);
}      

function monthKiller () {
  j = 0;
  document.getElementById('monthSpace').innerHTML=" ";
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

// reverse of the previous function to remove the layers
function deleteLayers () {          
   setTimeout(function () {    
      i--; // i is one integer too large to start with
      if (i < 0) {
        i++;
        gogogo();
        monthCounter(); // this repopulates the map when it's empty
      }  else {   
        map.removeLayer(layers[i]);         
        deleteLayers();   
        monthKiller();          
      }          
   }, 1); // delay between layer removals in milliseconds
}

// play
playbutton.onclick=function() {
  document.getElementById("play").style.display = 'none';
  gogogo();
  monthCounter();
};

// reset
resetbutton.onclick=function() {
  document.getElementById("reset").style.display = 'none';
  deleteLayers();
};
