function hello(){
    return "hello";
}


export {hello}



// Creating a function for conversion of squares to acres

function squarefeet2acres (squarefeet) {
    
    var acres = squarefeet / 43560;

    return acres;

}

// Test cases for square footage to acres
var conversions = [10000, 50000, 75000]; // square feet
conversions.forEach(function(squarefeet) {
    var acres = squarefeetToAcres(squarefeet);
    console.log(squarefeet + " square feet is equal to " + acres + " acres.");
}


// Function for the amount of time that is needed to cut a lawn (Meters and meter squared)

function mowLawnTime(width, length, squareMetersPerMinute) {
    
    var lawnArea = width * length;
    
    var minutes = lawnArea / squareMetersPerMinute;
    
    return minutes;

}
// Test for time needed for mowing of lawns of variable sizes (min)

var lawns = [

{ width: 12, length: 30, squareMetersPerMinute: 6 },
{ width: 8, length: 15, squareMetersPerMinute: 4 },
{ width: 20, length: 40, squareMetersPerMinute: 10 },
]


// Air Quality index Test

function computeAirQuality(aqi) {
   
    if (aqi >= 0 && aqi <= 50) {
        return "Good";
    } 
    else if (aqi >= 51 && aqi <= 100) {
        return "Moderate";
    } 
    else if (aqi >= 101 && aqi <= 150) {
        return "Unhealthy for Sensitive Groups";
    } 
    else if (aqi >= 151 && aqi <= 200) {
        return "Unhealthy";
    } 
    else if (aqi >= 201 && aqi <= 300) {
        return "Very Unhealthy";
    } 
    else {
        return "Hazardous";
    }
}

// Test cases
var tests = [
    { aqi: 38, expected: "Good" },
    { aqi: 80, expected: "Moderate" },
    { aqi: 256, expected: "Very Unhealthy" },
    { aqi: 360, expected: "Hazardous" }
];





// Yeha FUNCTION 

function yee_ha(number) {
    if (number % 3 === 0 && number % 7 === 0) {
        return "Yee Ha";
    } else if (number % 3 === 0) {
        return "Yee";
    } else if (number % 7 === 0) {
        return "Ha";
    } else {
        return "Nada";
    }
}

// Test cases
var tests = [
    { number: 21, expected: "Yee Ha" }, // divisible by both 3 and 7
    { number: 9, expected: "Yee" },     // divisible by 3
    { number: 14, expected: "Ha" },     // divisible by 7
    { number: 8, expected: "Nada" }     // not divisible by 3 or 7
];

// Slope of a line calculation function

function slope(x1, y1, x2, y2) {
    var rise = y2 - y1;
    var run = x2 - x1;
    var slp = rise / run;
    return slp;
}

// Test cases
var lines = [
    { x1: 1, y1: 2, x2: 3, y2: 4 },  // slope should be 1
    { x1: -1, y1: 0, x2: 1, y2: 4 }, // slope should be 2
    { x1: 0, y1: 5, x2: 5, y2: 0 }   // slope should be -1
];

lines.forEach(function(line, index) {
    var slp = slope(line.x1, line.y1, line.x2, line.y2);
    console.log("Test Line " + (index + 1) + ": The slope is " + slp);
});
