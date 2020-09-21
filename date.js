//jshint esversion:6

//export this to be use in main app.js file
//Test to see if the current day is the weekend
//as an anomymous function
exports.getDate = function () {
    const today = new Date();
    //Perform Datetime rendering using toLocaleDateString()
    const options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    return today.toLocaleDateString("en-US", options);
}

//export this to be use in main app.js file
exports.getDay = function () {
    const today = new Date();
    //Perform Datetime rendering using toLocaleDateString()
    const options = {
        weekday: "long",

    };
    return today.toLocaleDateString("en-US", options);

}
