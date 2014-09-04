//define functions and global variables here...
var siteloc = "http://localhost/make_exponentiater";
var scriptloc = "/scripts/"

 

function fetchmake_exponentiater()
{
  $.ajax({
      url: siteloc + scriptloc + "act3_py.py",
      data: {make_exponentiater:make_exponentiater},
      dataType: 'json',
      success: function (res) {
                  console.log(res);
              }
    });
}

