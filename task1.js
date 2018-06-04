var degree = parseInt(process.argv[3])
var numbers = parseInt(process.argv[2])
var sum = 0;

for (; numbers > 0;numbers--)
	{
		sum += Math.pow(numbers, degree);
	}
process.stdout.write(String(sum) + '\n');