/* In dit script plaats je de code om de kaart in de id apMap te tekenen, zodat de AP-Hogeschool met adres Ellermanstraat 33 gecentreerd staat.  
* Gebruik hiervoor de documentatie op https://leafletjs.com/ 
* Verander in de code online alle "var" in "let".
*/
let map = L.map('apMap').setView([51.23009, 4.41616], 17);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    minZoom: 2,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);



// plaats een marker met als tekst "AP-Hogeschool" en eronder "Ellermanstraat 33"
let myIcon = L.icon({
    iconUrl: '../assets/coffee-icon-shadow.png',
    iconAnchor: [5, 60],
    popupAnchor: [-3, -76],
});
let marker = L.marker([51.23009, 4.41616], {icon: myIcon}).addTo(map);
marker.bindPopup("<b>AP-Hogeschool</b><br>Ellermanstraat 33").openPopup();