;(function(){
    google.maps.event.addDomListener(window,"load",()=>{
       const map = new google.maps.Map(
           document.getElementById('map'),
           {
               center: {
                lat: 19.689018,
                lng: -101.167633
               },
               zoom: 15
           }
       )
    })
})()