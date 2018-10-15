var helloWorld = function() {
    console.log("Hallo Welt!")
}

const countdown = require("./countdown");

countdown.setDecrementsPerSecond(3);

countdown.setCountdown(helloWorld, 10);