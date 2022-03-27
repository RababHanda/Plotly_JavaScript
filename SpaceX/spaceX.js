const url = "https://api.spacexdata.com/v2/launchpads";

d3.json(url).then(receivedData => console.log(receivedData));

//to only retrieve code from Vandenberg Air Force Base
d3.json(url).then(receivedData => console.log(receivedData[0]));

//just retrieve a value of a key in the object, use the dot notation
d3.json(url).then(receivedData => console.log(receivedData[0].full_name));

//to get the latitude
d3.json(url).then(receivedData => console.log(receivedData[0].location.latitude));

//only print lat & long of each launch station
d3.json(url).then(receivedData => console.log(receivedData.map(data => data.location.latitude)));
d3.json(url).then(receivedData => console.log(receivedData.map(data => data.location.longitude)));