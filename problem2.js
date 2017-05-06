var fibonacciNumbers = [1,2];
var max = 4000000;
var total = 0;

function GetNextFibonacci()

{
	var nextFibonacci = fibonacciNumbers[fibonacciNumbers.length-1] + fibonacciNumbers[fibonacciNumbers.length-2];
	fibonacciNumbers.push(nextFibonacci);
	return nextFibonacci;

}

while (GetNextFibonacci() <=max)
{	
	
		GetNextFibonacci();
	
}

for(i =0; i < fibonacciNumbers.length; i++)
{
	var current = fibonacciNumbers[i];
	if(current<max && current%2 == 0)
	{
		total += current;
	}

}


console.log(fibonacciNumbers);
console.log(total);