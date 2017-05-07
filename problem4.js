
var largestPalindrome = 0;

function isPalindrome(number)
{
 	var palindrome = parseInt(number.toString().split("").reverse().join(""));
 	if(number == palindrome)
 	{
 		return true;
 	}
 	else
 	{
 		return false;
 	}
}


for(i =999; i >99; i--)
{
	for(j=999; j>99; j--)
	{
		var product = i*j;
		
		if(isPalindrome(product))
		{
			if(product > largestPalindrome)
			{
				largestPalindrome = product;
			}
		}
		
	}
}



console.log(largestPalindrome);