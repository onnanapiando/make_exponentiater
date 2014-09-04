import math

def make_exponentiater(e):
    return lambda(x): pow(x,e)
	

square = make_exponentiater(2)

def index(req, result):
    result = int(result)
    return square(result)
	

# square(4) -- returns 16
