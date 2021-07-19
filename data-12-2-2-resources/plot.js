// 1.Sort the cities in descending order of population growth.
var sortedCities = cityGrowths.sort((a,b) => a.Increase_from_2016-b.Increase_from_2016).reverse();

// 2. Select only the top five cities in terms of growth.
var topFiveCities = sortedCities.slice(0,7);

// 3.Create separate arrays for the city names and their population growths.
// create 2 arrays using .map() to extract the data
var topFiveCityNames = topFiveCities.map(city => city.City);
var topFiveCityGrowths = topFiveCities.map(city=> parseInt(city.Increase_from_2016));
// 4.Use Plotly to create a bar chart with these arrays.
var trace = {
    x: topFiveCityNames,
    y: topFiveCityGrowths,
    type: "bar"
};

var data = [trace];
var layout = {
    xaxis: {title: "City"},
    yaxis: {title: "Population Growth, 2016-2017"}
};
Plotly.newPlot("bar-plot",data,layout);