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
    console.log('Picked up', lift.passenger.name);
  }
  //increment the floor
  lift.currentFloor++;
  console.log('Lift is now on floor', lift.currentFloor);

  setTimeout(()=>{
      //check if we need to put off whoever is riding
      if(lift.currentFloor === lift.passenger.destination){
        console.log(lift.passenger.name, 'has reached floor #' + lift.passenger.destination);
        lift.passenger = {};
        lift.emit('down');
      } else {
        // emitting up without a new passenger
        // so the current person stays in tact
        lift.emit('up');
      }

  }, 1000);

});






lift.on('down', ()=>{
  //decrement the floor.
  lift.currentFloor--;
  console.log('Lift is now on floor', lift.currentFloor);

  setTimeout(()=>{
    // check what floor the elevator is on
    if(lift.currentFloor != 1){
      //go down a floor
      lift.emit('down');
    } else {
      // grab the next person since we're on the 1st floor
      // only if there is someone to grab.
      if (tenants.length > 0){
        lift.emit('up', tenants.pop());
      } else {
        console.log('All tenants are at their respective floors.');
      }
    }
  }, 1000);

});

// Let's get down to business
lift.emit('up', tenants.pop() );
