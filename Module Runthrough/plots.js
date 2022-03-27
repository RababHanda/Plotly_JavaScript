//create function init() for grabbing the user input in #selDtataset option selection
function init() {
    var selector = d3.select("#selDataset");
  
    d3.json("samples.json").then((data) => {
      console.log(data);
      var sampleNames = data.names;
      sampleNames.forEach((sample) => {
        selector
          .append("option")
          .text(sample)
          .property("value", sample);
      });
  })};
  
  init();
  
//create function optionChanged to plot data for option entered in init() function
function optionChanged(newSample) {
  buildMetadata(newSample);
  // buildCharts(newSample);
};

//create function metedata to filter metadata array according to the sample ID number
function buildMetadata(sample) {
  d3.json("samples.json").then((data) => {
    var metadata = data.metadata;
    var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
    var result = resultArray[0];
    var PANEL = d3.select("#sample-metadata");

    PANEL.html("");
    PANEL.append("h6").text(result.location);
  });
};