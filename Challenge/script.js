/*
//retrieve data from locally stored data source
d3.json("samples.json").then(function(data){
    console.log(data);
});

//frequency from each person
d3.json("samples.json").then(function(data){
    wfreq = data.metadata.map(person => person.wfreq);
    console.log(wfreq);
});

//sort in descdending order
d3.json("samples.json").then(function(data){
    wfreq = data.metadata.map(person => person.wfreq).sort((a,b) => b - a);
    console.log(wfreq);
});

//delete null values
d3.json("samples.json").then(function(data){
    wfreq = data.metadata.map(person =>person.wfreq).sort((a,b) => b - a);
    filteredWfreq = wfreq.filter(element => element !=null);
    console.log(filteredWfreq);
});

//display the metadata of any individual ------- in this case we want at index 0
d3.json("samples.json").then(function(data){
    firstPerson = data.metadata[0];
    Object.entries(firstPerson).forEach(([key, value]) => {console.log(key + ': ' + value);});
});
*/

d3.selectAll("body").on("change", updatePage);

function updatePage() {
  var dropdownMenu = d3.selectAll("#selectOption").node();
  var dropdownMenuID = dropdownMenu.id;
  var selectedOption = dropdownMenu.value;

  console.log(dropdownMenuID);
  console.log(selectedOption);
};