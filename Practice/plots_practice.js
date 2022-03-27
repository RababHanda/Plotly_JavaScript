// Plotly.newPlot("plotArea", [{x: [1, 2, 3], y: [10, 20, 30]}]);

//////////////////////////////////////////////////////

// var trace = {
//     x: ["burrito", "pizza", "chicken"],
//     y: [10, 18, 5],
//     type: "bar"
//  };

//  var layout = {
//      title: "Luncheon Survey",
//      xaxis: {title: "Food Option"},
//      yaxis: {title: "Number of Respondents"}
//  };

//  Plotly.newPlot("plotArea", [trace], layout);

 //////////////////////////////////////////////////////

 var trace = {
    labels: ["nonalcoholic beer", "nonalcoholic wine", "nonalcoholic martini", "nonalcoholic margarita", "ice tea", "nonalcoholic rum & coke", "nonalcoholic mai tai", "nonalcoholic gin & tonic"],
    values: [22.7, 17.1, 9.9, 8.7, 7.2, 6.1, 6.0, 4.6],
    type: 'pie'
   };
   var data = [trace];
   var layout = {
    title: "'Pie' Chart",
   };
Plotly.newPlot("plotArea", data, layout);

//////////////////////////////////////////////////////

 var numbers = [1, 2, 3, 4];
 var doubled = numbers.map(num => num*2);
 console.log(doubled);

 ////////////////////////////////////////////////////

 var cities = [
    {
      "Rank": 1,
      "City": "San Antonio ",
      "State": "Texas",
      "Increase_from_2016": "24208",
      "population": "1511946"
    },
    {
      "Rank": 2,
      "City": "Phoenix ",
      "State": "Arizona",
      "Increase_from_2016": "24036",
      "population": "1626078"
    },
    {
      "Rank": 3,
      "City": "Dallas",
      "State": "Texas",
      "Increase_from_2016": "18935",
      "population": "1341075"
    }
];

var cityNames = cities.map(function(city){
    return city.City;
});
console.log(cityNames);

//////////////////////////////////////////////////////

let nums = [13, 22, 36, 54, 55];

// want to filter for only even numbers
var evenNum = nums.filter(number => number % 2 == 0);
console.log(evenNum);

//////////////////////////////////////////////////////

var filteredArray = cities.filter (city => city.Rank > 1);
console.log(filteredArray);

//////////////////////////////////////////////////////

// 12.2.1 name starting with 's'

var words = ['seal', 'dog', 'scorpion', 'orangutan', 'salamander'];

var nameWithS = words.filter(word => word.charAt(0)=="s");
console.log(nameWithS);
console.log(words.slice(3, ));

//////////////////////////////////////////////////////

var familyAge = [3,2,39,37,9];
var sortedAge = familyAge.sort((a,b) => a - b);
console.log(sortedAge);