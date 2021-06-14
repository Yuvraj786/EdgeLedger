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