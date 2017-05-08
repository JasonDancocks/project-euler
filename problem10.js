var number = 2000000;
var primes = [];
var sum = 0;


function generatePrimes(amount)
{	
	var primeArray = [];
	var output = [];

	for(var i = 0; i <amount; i++)
	{
		primeArray.push(true);
	}

	for (var i = 2; i <= Math.sqrt(amount); i++)
	{
		if(primeArray[i])
		{
			for (var j = i * i; j < amount; j +=i)
			{
				primeArray[j] = false;
			}
		}
	}

	for (var i = 2; i < amount; i++)
	{
		if(primeArray[i])
		{
			output.push(i);
		}
	}
	
	return output;
}

function getSum(array)
{
	var sum = 0;

	for(var i = 0; i< array.length; i++)
	{
		sum += array[i];
	}

	return sum;

}

primes = generatePrimes(number);

sum = getSum(primes);

console.log(sum);
