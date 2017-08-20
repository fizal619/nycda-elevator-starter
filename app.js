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

    // The Elevator starts at 1
    this.currentFloor = 1;

    //set this to true if someone is on the elevator.
    this.passenger = false;
  }
}

// In England, elevators are called lifts :)
const lift = new Elevator();

lift.on('up', ()=>{
  // you're going to need to add your own logic here.
  console.log("I'm going up, wankers!");

});

lift.on('down', ()=>{
  // same goes here.
  console.log("Bullocks, I'm going down...");

})

// run node app.js and take note of what happens.
// what happens if you change it to 'down'?
lift.emit('up');

// The following is the heartbeat of the Elevator
// You can add logic to this to dictate how it reaches
// the end state of tenants being empty and no one is on
// the elevator. I mean lift!
const intervalPID = setInterval( ()=>{
  // stuff in here will be run every second
  let tenant = tenants.pop();
  console.log(tenant.name);

  // clearInterval is needed to stop the setInterval.
  // https://www.w3schools.com/jsref/met_win_clearinterval.asp
  if (tenants.length === 0 && lift.passenger == false) {
    console.log('No passengers left.');
    clearInterval(intervalPID);
  }

}, 1000);
