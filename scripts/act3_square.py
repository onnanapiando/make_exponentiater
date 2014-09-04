import math
   
def make_exponentiater(e):
     return lambda(value):  pow(value,e)

square= make_exponentiater(2)
 #gets the request
def index(req, result): 
      newresult  = int(result)
      return square(newresult)
	
	
