//define functions and global variables here...
var siteloc = "http://localhost/make_exponentiater";
var scriptloc = "/scripts/"

 

function act3_square()
{
  $.ajax({
      url: siteloc + scriptloc + "act3_square.py",
      data: {make_exponentiater:make_exponentiater},
      dataType: 'json',
      success: function (res) {
                  console.log(res);
              }
    });
}

function act3_cube()
{
  $.ajax({
      url: siteloc + scriptloc + "act3_cube.py",
      data: {make_exponentiater:make_exponentiater},
      dataType: 'json',
      success: function (res) {
                  console.log(res);
              }
    });
}
