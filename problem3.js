var targetNumber = 600851475143;


function getFactors(number)
{
	var factors = [];
	var factorPairs= [];
	for(i =1; i <= Math.floor(Math.sqrt(number)); i++)
	{
		if(number%i == 0)
		{
			factors.push(i);
		}
	}
	
	for(i = 0; i < factors.length; i++)
	{
		factorPairs[i] = number / factors[i];

		
	}

	for(i = factorPairs.length-1; i >= 0; i--)
	{	
		factors.push(factorPairs[i]);                      

	}

	return factors;

}

function isPrime(number)
{
	if( number == 1)
	{
		return false;

	}
	else
	{

		for (i = 2; i<number;i++)
		{
			if(number%i == 0)
			{
				return false;
			}
			
		}
	}
	return true;

}

function getLargestPrimeFactor(array)
{
	var testArray = array;
	var largestPrimeFactor =0;

	while(testArray.length >0)
	{

		var testFactor = array[array.length-1];
		
		if(isPrime(testFactor)==true)
		{
			largestPrimeFactor = testFactor;
			break;
		}

		testArray.pop();
		
	}
	return largestPrimeFactor
}

var testFactors = getFactors(targetNumber);
console.log("The factors of " + targetNumber + " are " + testFactors)
var answer = getLargestPrimeFactor(testFactors);
console.log(answer);
