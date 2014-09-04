import math

def make_exponentiater(e):
<<<<<<< HEAD
    return lambda(x): pow(x,e)
=======
    return lambda(x): math.pow(x,e)
>>>>>>> b6ae296727468f4fe4d3ff15dcba13867f79f433

cube = make_exponentiater(3)	
	
def index(req, result):
<<<<<<< HEAD
    result = int(result)
    return cube(result)
	

=======
    newresult = int(result)
    return cube(result)
	
	



>>>>>>> b6ae296727468f4fe4d3ff15dcba13867f79f433

# cube(4) -- returns 64