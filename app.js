let logMessage = function(a, b) {
    console.log(this, a, b);
};

logMessage.apply({
    vorname: "Max"
}, [3, 4]);

/*
logMessage.call({
    vorname: "Max"
}, 3, 4);
 */

/*
let logThisBound = logThis.bind({
    vorname: "Max"
});

logThisBound();
 */
