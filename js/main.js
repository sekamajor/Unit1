function initialize(){
    cities();
    debugAjax();

};

//function to create a table with cities and their populations
function cities(){
    //define two arrays for cities and population
    var cityPop = [
        {
            city :'Oakland',
            population: 406253         
        },
        
        {
            city:'Minneapolis',
            population: 400070
        },
        
        {
            city:'Houston',
            population: 2196000
        },
        
        {
            city:'Atlanta',
            population: 447841
        }   
    ];
        

    //create the table element
   $("mydiv").append("<table>");

   $("table").append("<tr>");

   $("tr").append("<th>City</th><th> Population</th>");

   for (var i = 0; i < cityPop.length; i++) {
       var rowHtml = "<tr><td>"+ cityPop[i].city+"</td><td>" + cityPop[i].population + "</td></tr>";
       $("table").append(rowHtml);
        };
        addColumns(cityPop);
        addEvents();
    
  };
   //function to add a column to describe how large populations are on a ordinal scale
   function addColumns(cityPop){
    //use function on each tr element
    $("tr").each(function(i){
      //when the i'th value of the array is 0, add the header for the new column
      if (i == 0){
        $(this).append("<th>City Size</th>");
      
      } else {
        //if the i'th value of the array is over 0 examine the population attribute of each array value and give them a ranking
        var citySize;

        if (cityPop[i-1].population < 100000){
          citySize = "Small";

        } else if (cityPop[i-1].population < 500000){
          citySize = "Medium";

        } else {
          citySize = "Large";
        }
        //add a new entry into the City Size column
        $(this).append("<td>" + citySize + "</td>");
      }
  });
};


function addEvents(){
//this function changes the color of the text in the table while you move the mouse
  $("table").mouseover(function(){
    
    var color = "rgb(";
    //start a for loop to get 3 random colors on the RGB scale
    for (var i=0; i<3; i++){

      var random = Math.round(Math.random() * 255);

      color += random;

      if (i<2){
        color += ",";
      
      } else {
        color += ")";
    }

    $("table").css("color", color);
  };

  });
  //pop up message when you click on the screen
  function clickme(){

    alert('Hey, you clicked me!');
  };
  
  $("table").on("click", clickme);
};

//this function requests/locates the file that you're requesting
function debugAjax(){
  //this variable represents the data that will be converted into visible form
  var mydata;
  //this jquery function searches for the desired file using a specific address
  $.ajax("data/map.geojson", {
    //specifies the type of file we're searching for
    dataType: "json",
    success: function(response){
      //now that are file was successfully found, we will make it the value of the mydata variable
      mydata = response;
      debugCallback(mydata);
      
    }
  });

  
//this function converts our data from it's raw data form into a string that will be displayed on the site
function debugCallback(response){
  //data in string form
  var dataString; 
  //dataString value is filled with our data that's now converted to string
  dataString = JSON.stringify(response);
  //the string is appended to the new division in the html
  $("#geojson").append("<br>GeoJSON data:</br>" + dataString);
  };
};


//call the initialize function when the window has loaded
$(document).ready(initialize);
 
