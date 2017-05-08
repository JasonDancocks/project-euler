function getTriplet()
{
	var c =0;
	var ansArray = [];

	for(var a = 1; a < 1000; a++)
	{
		for(var b = 1; b < 1000; b++)
		{
			c = Math.sqrt((a*a) + (b*b));
			
			if(a + b + c == 1000)
			{
				ansArray = [a,b,c];
				return ansArray;
			}

		}
	}
}

function getProduct(array)
{
	var product = 1;

	for(var i =0; i<array.length; i++)
	{
		product *= array[i];
	}

	return product;
}

var triplet = getTriplet();
var product = getProduct(triplet);

console.log(triplet);
console.log(product);
