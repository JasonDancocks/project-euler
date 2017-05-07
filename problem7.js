var number = 10001;
var primeArray = [];
var lastPrime = 0;

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

function generatePrimes(amount)
{	
	var primeArray = [];

	for(var i = 1; primeArray.length < amount -1 ; i+=2)
	{
		
		var testPrime = isPrime(i);
				
		if(testPrime == true)
		{	
			primeArray.push(i);
		}
		
	}

	return primeArray;
}

primeArray = generatePrimes(number);

primeArray.unshift(2);

lastPrime = primeArray[primeArray.length-1];

console.log(lastPrime);
