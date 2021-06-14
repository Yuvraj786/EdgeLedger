function GetMap(){
     var map = new Microsoft.Maps.Map('.map', {
          credentials:'Asg8BVLAtEY4zXbLE1K8lG-q3NRXUwxnJXoEbPCwLOjvJMQZZBlBriHQ4Hdh_Z29',
          center: new Microsoft.Maps.Location(42.360081,-71.058884),
          mapTypeId: Microsoft.Maps.MapTypeId.road,
          zoom: 10
      });

     // Adding the pushpin
     var center = map.getCenter();

        //Create custom Pushpin
        var pin = new Microsoft.Maps.Pushpin(center, {
          icon: '../img/pushpin.svg',
          title: 'Office',
        });

         //Add the pushpin to the map
         map.entities.push(pin);
}

$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });