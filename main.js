var mapDisplay = document.getElementById("map");
var ip = document.getElementById("ip-address")
var lugar = document.getElementById("location")
var timezone = document.getElementById("timezone")
var nombre = document.getElementById("isp")

var map = L.map('map').setView([34.0614, -118.08162], 13);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1Ijoia2V2ZXRpaDg2MSIsImEiOiJja2h4MzFxaG8wOW5pMzBsdGZ1NXFoeHh5In0.hw5mLyF4KWalDgcxAWrmuw'
}).addTo(map);
var marker = L.marker([34.0614, -118.08162]).addTo(map);

document.getElementById("form").addEventListener("submit", (e) => {
  e.preventDefault();
  var userInput = e.target[0].value;
   main(userInput);
})  

function main(userInput){
  var ip = userInput;
  var api_key = 'at_mtNvZ7kNeCbfXLUT1z3IwG9VLtaIr';
  var api_url = 'https://geo.ipify.org/api/v1?';
  var url = api_url + 'apiKey=' + api_key + '&ipAddress=' + ip;  
  fetch(url)
    .then(res => {
      return res.json();
    })
    .then(res => {
      displayInfo(res)
      displayMap(res);
    })
} 

function displayInfo(res){
  ip.innerText = res.ip;
  lugar.innerText = res.location.city + ", " + res.location.country + " " + res.location.postalCode;
  timezone.innerText = "UTC " + res.location.timezone;
  nombre.innerText = res.isp; 
}

function displayMap(res){
 map.setView([res.location.lat, res.location.lng], 13);
 marker.setLatLng([res.location.lat, res.location.lng])
}
 

 /* , {
  .
  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'your.mapbox.access.token'
}) */;
/*var marker = L.marker([34.0614, -118.08162]).addTo(mymap);

function displayMap(res){
    mymap.setView([res.location.lat, res.location.lng], 13);
    marker.setLatLng([res.location.lat, res.location.lng])
  }
  
  document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault();
    var userInput = e.target[0].value;
    // add an ip validation here
    main(userInput);
  })
 */