const getProjects = () => {
  $.get('/api/projects', (response) => {
    if (response.statusCode == 200){
      console.log(response);
      addProjects(response.data);
    }
    else {
      console.log(response);
    }
  }
  )
}

const addProjects = (items) => {
  items.forEach(item => {
    let itemToAppend = 
    '<div class="col l4 s12 m7">'+
    '<div class="card">' +
      '<h1 class="card-title center">'+ item.title + '</h1>' +
      '<div class="card-image">' + 
        '<img src="'+ item.image + '" style="height: 50%; width: 50%; padding-right: 5px; padding-left: 5px;">' +
      '</div>' + 
      '<div class="card-content">' +
        '<p>' + item.description + '</p>' + 
      '</div>' + 
      '<div class="card-action">' + 
        '<a href="'+ item.link +'"><img src="assets/github.png" style="height: 20px; padding-right: 15px;"></i> Checkout the project !</a>' + 
      '</div>' + 
    '</div>' +
  '</div>' ;
  $("#projects").append(itemToAppend);
  });
}


// Add sample chart
// https://canvasjs.com/html5-javascript-line-chart/
let timeSeriesData;

const getTimeSeriesData = () => {
  $.get('/api/time-series-data', (response) => {
    if (response.statusCode == 200){
      // console.log(response);
      
      timeSeriesData = 
        [{
          type : response.data[0].type, 
          indexLabelFontSize : response.data[0].indexLabelFontSize, 
          dataPoints: response.data[0].dataPoints
        }];

        console.log(timeSeriesData);

        var chart = new CanvasJS.Chart("chartContainer", {
          animationEnabled: true,
          theme: "light1",
          title:{
            text: "Time-series data"
          },
          data: timeSeriesData
        });
        
        chart.render();
      
    }
    else {
      console.log(response);
    }
  }
  )
}



$(document).ready(function(){
  // addProjects(projectList);
  getProjects();
  getTimeSeriesData();
  
});