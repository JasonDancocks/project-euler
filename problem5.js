var number = 0;

for(i = 1; i < 100000000000000000; i++)
{
	if(i%1 == 0 && i%2 == 0 && i%3 == 0 && i%4 == 0 && i%5 == 0 & i%6 == 0 && i%7 == 0 && i%8 == 0 && i%9 == 0 && i%10 == 0 && i%11 == 0 && i%12 == 0 && i%13 == 0 && i%14 == 0 && i%15 == 0 & i%16 == 0 && i%17 == 0 && i%18 == 0 && i%19 == 0 && i%20 == 0)
	{
		number = i;
		break;
	}
}

console.log(number);