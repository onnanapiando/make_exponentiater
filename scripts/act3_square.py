import math

def make_exponentiater(e):
    return lambda(x): pow(x,e)
	

square = make_exponentiater(2)

def index(req, result):
<<<<<<< HEAD
    result = int(result)
=======
    newresult = int(result)
>>>>>>> b6ae296727468f4fe4d3ff15dcba13867f79f433
    return square(result)
	

# square(4) -- returns 16
