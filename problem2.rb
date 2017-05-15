fibonacciNumbers = [1,2]
nextFibonacci = 0
max = 4000000
total = 0


while nextFibonacci <=max
	nextFibonacci = fibonacciNumbers[fibonacciNumbers.length-1] + fibonacciNumbers[fibonacciNumbers.length-2]
	fibonacciNumbers.push(nextFibonacci)
end

i = 0

while i < fibonacciNumbers.length
	
	current = fibonacciNumbers[i]
	
	if(current<max and current%2 == 0)
		total = total + current
	end
	
	i += 1

end



puts total