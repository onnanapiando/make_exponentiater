//define functions and global variables here...
var siteloc = "http://localhost/make_exponentiater";
var scriptloc = "/scripts/"

 

function act3_square()
{
  $.ajax({
      url: siteloc + scriptloc + "act3_square.py",
<<<<<<< HEAD
      data: {result:$("#inputnumber").val(),
             },
      success: function (res) { 
	              $("p").html("<br>");
                  $("p").append(res); 
				  }
=======
      data: {
				 result:$("#inputnumber").val()   

	    } 
>>>>>>> b6ae296727468f4fe4d3ff15dcba13867f79f433
    });
}

function act3_cube()
{
  $.ajax({
      url: siteloc + scriptloc + "act3_cube.py",
<<<<<<< HEAD
      data: {result:$("#inputnumber").val(),
             },
      success: function (res) { 
	              $("p").html("<br>");
                  $("p").append(res); 
				  }
=======
      data: {
				 result:$("#inputnumber").val()  

	    } 
>>>>>>> b6ae296727468f4fe4d3ff15dcba13867f79f433
    });
}
