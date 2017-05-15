targetNumber = 600851475143


def getFactors(number)

	factors = []
	factorPairs = []
	i = 1

	while i <= number**0.5
	
		if(number%i == 0)
			factors.push(i)
		end
		i += 1

	end
	
	j = 0

	while j < factors.length
	
		factorPairs[j] = number / factors[j]
		j += 1
	end

	k = factorPairs.length-1

	while k >= 0
		factors.push(factorPairs[k])                      
		k -= 1
	end

	return factors
end

def isPrime(number)

	if( number == 1)
		return false
	else
		i = 2
		while i<number**0.5
			if(number%i == 0)
				return false
			end
			i += 1
		end
	end
	return true

end

def getLargestPrimeFactor(array)

	testArray = array
	largestPrimeFactor =0

	while testArray.length >0

		testFactor = array[array.length-1]
		
		if(isPrime(testFactor)==true)
			largestPrimeFactor = testFactor
			break
		end

		testArray.pop()
		
	end
	return largestPrimeFactor
end

testFactors = getFactors(targetNumber)
puts "The factors of " + targetNumber.to_s + " are " + testFactors.to_s
answer = getLargestPrimeFactor(testFactors)
puts answer
