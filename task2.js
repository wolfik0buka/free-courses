

var alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
var message = process.argv[2];
//process.stdout.write(String(process.argv));

var step = parseInt(process.argv[3]);
message = message.split('');



step = step % 26;  

for (var i = message.length - 1; i >= 0; i--) {
	IndexNew = alphabet.indexOf(message[i]);
	if (IndexNew >= 0){
		IndexNew = (IndexNew < 26)  ? (IndexNew + step) % 26 : (IndexNew + step) % 26 + 26;
	//	process.stdout.write(message[i]+':');
		message[i] = alphabet[IndexNew];
	//	process.stdout.write(String(IndexNew) +' ' + message[i]+'\n');
	}
	
}

process.stdout.write(message.join('') + '\n');

