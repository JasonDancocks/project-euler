var amount = 100;

function sumOfSquares(number)
{
	var sumOfSquares = 0;

	for ( i = 1; i <=number ; i++)
	{
		sumOfSquares += (i*i);
	}

	return sumOfSquares;
}

function squareOfSum(number)
{
	var sum = 0;
	var squareOfSum = 0;

	for( i = 1; i <= number; i++)
	{
		sum += i;

	}

	squareOfSum = sum*sum;

	return squareOfSum;

}

var difference = squareOfSum(amount) -sumOfSquares(amount);
console.log("The sum of the squares of the first " + amount + " natural numbers is " + sumOfSquares(amount));
console.log("The square of the sum of the first " + amount + " natural numbers is " + squareOfSum(amount));
console.log("The difference is " + difference);