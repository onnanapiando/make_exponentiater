import math

def make_exponentiater(e):
    return lambda(x): math.pow(x,e)
	

square = make_exponentiater(2)
cube = make_exponentiater(3)

# square(4) -- returns 16
# cube(4) -- returns 64