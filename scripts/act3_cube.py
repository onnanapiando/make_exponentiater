import math

def make_exponentiater(e):
    return lambda(x): pow(x,e)

cube = make_exponentiater(3)	
	
def index(req, result):
    result = int(result)
    return cube(result)
	


# cube(4) -- returns 64