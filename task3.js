var firstTime = parseInt(process.argv[2]);
var secondTime = parseInt(process.argv[3]);

var timeSum = firstTime + secondTime;

//var hour = 100013;
var hour = Math.floor(timeSum / 3600);
var minutes = Math.floor(timeSum / 60) - hour*60;
var seconds = timeSum % 60;


var message = '';

if (hour > 0)
	{
		message +=String(hour);
		if (hour % 100 <= 20 && hour % 100 > 4  || hour % 10 >4 || hour % 10 == 0)
		{
			message +=" часов";
		} else if (hour % 10 > 1)
		{
			message +=" часа";
		}else {
			message +=" час";
		}
	}
//if (minutes > 0 | hour > 0)
if (minutes > 0)
	{
		if (hour > 0) message+=' ';
		message +=String(minutes);
		if (minutes > 4 && minutes <=20 || minutes % 10 > 4 || minutes % 10 == 0) 
		{
			message +=" минут";
		} else if (minutes % 10 > 1)
		{
			message +=" минуты";
		}else {
			message +=" минута";
		}
	}
if (seconds > 0)
	{
		if (hour > 0 || minutes > 0) message+=' ';
		message += String(seconds);
		if (seconds > 4 && seconds <=20 || seconds % 10 > 4 || seconds % 10 == 0 ) 
		{
			message +=" секунд";
		} else if (seconds % 10 > 1)
		{
			message +=" секунды ";
		}else {
			message +=" секунда ";
		}
	}
//process.stdout.write(message + '\n');
console.log(message);