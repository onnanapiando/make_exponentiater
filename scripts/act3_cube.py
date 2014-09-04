import math

def make_exponentiater(e): 
    return lambda(x): pow(x,e)   

cube = make_exponentiater(3)	
	
def index(req, result): 
    newresult = int(result)
    return cube(newresult)
	
  

# cube(4) -- returns 64