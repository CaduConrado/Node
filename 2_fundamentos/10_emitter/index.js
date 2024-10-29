const EventEmitter = require("events");
const eventEmitter = new EventEmitter();

eventEmitter.on("start", () => {
  console.log("Running");
});

console.log("Start");

eventEmitter.emit("start");

console.log("Finish");
