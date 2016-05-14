// Set the temperature to some celsius value
// Convert the temperature to Fahrenheit
// Set a threshold temperature in Fahrenheit
// If the F temperature is below the threshold, set the background color to gray for the body
// Otherwise, set the background color to yellow
// Write the temperature to the page using either. document.write or set the
//innerHTML of a tag on the HTML page.
// How else can you change the body color using setAttribute and CSS? 


var celsius = 50;
var fahrenheit = (9/5) * celsius + 32;
var threshold = 70;

if (fahrenheit < threshold) {
    document.body.setAttribute("style","background-color: gray;");
} 
else {
    document.body.setAttribute("style","background-color: yellow;");
}


document.write(fahrenheit);


