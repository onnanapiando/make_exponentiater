import math

def make_exponentiater(e):
    return lambda(x): math.pow(x,e)
	

cube = make_exponentiater(3)

# cube(4) -- returns 64