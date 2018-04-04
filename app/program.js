var OSinfo = require('../modules/OSinfo');

process.stdin.setEncoding('utf-8'); //ustawienie enkodowania na UTF-8 (domyślnie szesnastkowe)

console.log('\n\nType one of these commands: \n"/version" - see your Node version, \n"/language" - see your system language, \n"/getOSinfo" - get information about your computer, \n"/exit" - quit app.');

process.stdin.on('readable', function() {
	var input = process.stdin.read(); //read - odczytanie, co użytkownik podał na wejściu
	if (input !== null) {
		var instruction = input.toString().trim();
		switch (instruction) {
			case '/version':
				console.log(process.versions);
			break;
			case '/language':
				console.log(process.env.lang);
			break;
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