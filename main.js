$(document).ready(function() {
// write your code here
    $.getJSON("data.json", function(result){
        $.each(result, function(i, field){
            $("table tbody").append("<tr><td>"+ field.name +"</td><td>"+ field.description +"</td><td><a href = https://www.google.com/maps?q="+ field.location +">Open in Google Maps</a></td></tr>");
            //var coord = {lat: field.location[0], lng: field.location[1]};
            //new google.maps.Marker({position: coord, map: map});
        });
    });
});

var map; 
function initMap() { 
    map = new google.maps.Map(document.getElementById('map'), { center: {lat: 32.7157, lng: -117.1611}, zoom: 9 }); 
}