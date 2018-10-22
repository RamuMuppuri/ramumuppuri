
var google;

var markers = [];
function initialize() {
    
        var mapOptions = {
            zoom: 7,
            center: new google.maps.LatLng(30.4515, -91.2515038),
            mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var iconbase = "https://maps.google.com/mapfiles/ms/icons/";
        var map = new google.maps.Map(document.getElementById("googlemap"), mapOptions);

        var locations = [
            ['I am Here <br/> Ramu Muppuri <br/> Baton Rouge, LA', 30.4515, -91.2515038, 
            iconbase+ 'green-dot.png', 'Click Me to Zoom']
        ];
    

        var marker, i;
        var infowindow = new google.maps.InfoWindow();

        google.maps.event.addListener(map, 'click', function() {
            infowindow.close();
        });


        for (i = 0; i < locations.length; i++) {
            marker = new google.maps.Marker({
                position: new google.maps.LatLng(locations[i][1], locations[i][2]),
                map: map,
                icon: locations[i][3],
                //label: locations[i][4],
                animation: google.maps.Animation.DROP
            });


            google.maps.event.addListener(marker, 'click', (function(marker, i) {
                return function() {
                    infowindow.setContent(locations[i][0]);
                    this.map.setZoom(13);
                    this.map.setCenter(this.getPosition());
                    infowindow.open(map, marker);
                }
            })(marker, i));
    
            markers.push(marker);
        }

    }
    
    function myClick(id){
        google.maps.event.trigger(markers[id], 'click');
    }

google.maps.event.addDomListener(window, 'load', initialize);