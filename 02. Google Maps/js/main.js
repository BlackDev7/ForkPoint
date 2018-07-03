$(document).ready(function () {
    $("input").first().focus();
    jQuery.validator.addMethod("phone", function (value, element) {
        return /^\+359\d{9}$/.test(value);
    }, 'Phone format: +359xxxxxxxxx');
    $('#form').validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            },
            url: {
                required: true,
                url: true
            },
            phone: {
                required: true,
                phone: true
            }
        },
        messages: {
            name: {
                required: "Please enter your firstname",
                minlength: "Your name must consist of at least 2 characters"
            },
            email: "Please enter a valid email address",
            url: "Please enter valid url",
        },
        submitHandler: function (form) {
            var name = $('#name').val();
            var email = $('#email').val();
            var phone = $('#phone').val();
            var website = $('#website').val();
            var address = $('#address').val();

            var user = {
                name: name,
                email: email,
                phone: phone,
                website: website,
                address: address
            };
            var localStorage = window.localStorage;
            
            var retrievedObject = localStorage.getItem('user');
            var parsed = JSON.parse(retrievedObject);
            if(parsed == null || parsed.email != user.email) {
                localStorage.setItem('user', JSON.stringify(user));
            } else {
                alert("Local storage contain that email");
            }
        }   
    });
});

$('form').submit(function (e){
    e.preventDefault();
})

function initialize() {
    var marker = null;
    var map = null;
    var myLatlng = { lat: 43.8546369, lng: 25.9899254 };
    map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: myLatlng
    });
    var input = document.getElementById('address');
    var autocomplete = new google.maps.places.Autocomplete(input);

    autocomplete.addListener('place_changed', function () {
        var place = autocomplete.getPlace();
        if (!place.geometry) {
            $('#adressError').show("slow");
            return;
        }
        if (place.geometry.viewport) {
            map.fitBounds(place.geometry.viewport);
            placeMarker(place.geometry.location);
            map.setZoom(15);
            map.setCenter(place.geometry.location);
        }
    });

    map.addListener('click', function markerThing(e) {
        if (marker != null) marker.setMap(null)
        placeMarker(e.latLng);
        map.setCenter(e.latLng);

        var geocoder = new google.maps.Geocoder();
        geocoder.geocode({
            'latLng': e.latLng
        }, function (results, status) {
            input.value = results[0].formatted_address;
        });

    });
    function placeMarker(location) {
        marker = new google.maps.Marker({
            position: location,
            map: map,
            icon: {
                url: "images/marker.png"
            }
        });
    }
}