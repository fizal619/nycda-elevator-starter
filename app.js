// Require events of course
const EventEmitter = require('events');

// Make the tenant array
const tenants = [
  {	name:	'Jerry',	destination:	4	},
  {	name:	'Kramer',	destination:	10	},
	{	name:	'Newman',	destination:	2	}
];

// The elevator class
class Elevator extends EventEmitter {
  constructor(){
    // this needs to be called so that Elevator
    // gets all the methods and properties of
    // EventEmitter
    super();

    // The Elevator starts at 1 with no one in it
    this.currentFloor = 1;
    this.passenger = {};

  }
}







// In England, elevators are called lifts :)
const lift = new Elevator();

lift.on('up', (passenger)=>{
  // Defensive coding, only change the passenger if one was supplied.
  if (passenger){
    lift.passenger = passenger;
  }

  setTimeout(()=>{
      // Add your own code after here.

      console.log("I'm going up, wankers!");

      // you probably shouldn't keep the following in your version.
      // just here for demonstration purposes.
      lift.emit('down');
  }, 1000)

});






lift.on('down', ()=>{

  setTimeout(()=>{
    // Add your own code after here.

    console.log("Bullocks, I'm going down...");
  }, 1000)

})





// run node app.js and take note of what happens.
// what happens if you change it to 'down'?
lift.emit('up', tenants.pop() );
