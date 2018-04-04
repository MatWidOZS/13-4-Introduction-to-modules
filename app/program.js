var OSinfo = require('../modules/OSinfo');

process.stdin.setEncoding('utf-8'); //ustawienie enkodowania na UTF-8 (domyślnie szesnastkowe)

console.log(process.versions);
console.log(process.env.lang);
console.log('\n\nType "/exit" to quit app\nType "/getOSinfo" to get information about your computer');

process.stdin.on('readable', function() {
	var input = process.stdin.read(); //read - odczytanie, co użytkownik podał na wejściu
	if (input !== null) {
		var instruction = input.toString().trim();
		switch (instruction) {
			case '/exit':
				process.stdout.write('Quitting app!\n');
				process.exit();
				break;
			case '/getOSinfo':
				// process.stdout.write('Tutaj będzie info o systemie!\n');
				OSinfo.print();
				break;
			default:
				process.stderr.write('Wrong instruction!\n');
		}
	}
});