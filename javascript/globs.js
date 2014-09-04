//define functions and global variables here...
var siteloc = "http://localhost/make_exponentiater";
var scriptloc = "/scripts/"

 

function act3_square()
{
  $.ajax({
      url: siteloc + scriptloc + "act3_square.py",
      data: {result:$("#inputnumber").val(),
             },
      success: function (res) { 
	              $("p").html("<br>");
                  $("p").append(res); 
				  }
    });
}

function act3_cube()
{
  $.ajax({
      url: siteloc + scriptloc + "act3_cube.py",
      data: {result:$("#inputnumber").val(),
             },
      success: function (res) { 
	              $("p").html("<br>");
                  $("p").append(res); 
				  }
    });
}
