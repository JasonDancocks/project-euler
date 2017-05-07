var targetNumber = 600851475143;
var currentFactors = [];
var largestPrimeFactor 

function getFactors(number)
{
	var factors = [];

	for(i =1; i <= number; i++)
{
	if(number%i == 0)
	{
		factors.push(i);
	}
}

return factors;

}

function isPrime(number)
{
	if( number == 1)
	{
		return false;

	}
	else if(number%2 ==0)
	{
		return false;
	}
	else
	{

		for (i = 3; i<number;i++)
		{
			if(number%i == 0)
			{
				return false;
			}
			
		}
	}
	return true;

}

function getLargestFactor(array)
{
	return array[array.length-1];
	
}


currentFactors = getFactors(12345678912);


console.log("There are " + currentFactors.length + " factors");
console.log(currentFactors);

var testArray = currentFactors;

while(testArray.length >0)
{

	var testFactor = getLargestFactor(testArray);
		
	if(isPrime(testFactor)==true)
	{
		largestPrimeFactor = testFactor;
		break;
	}

	testArray.pop();
		
}


console.log("The largest prime factor is " + largestPrimeFactor);






