function initialize(){
    cities();

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
//pop up message when you click on the screen
  function clickme(){

    alert('Hey, you clicked me!');
  };

  $("table").on("click", clickme);
  });
};

//call the initialize function when the window has loaded
$(document).ready(initialize);
 
