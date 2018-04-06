var OSinfo = require('../modules/OSinfo');

process.stdin.setEncoding('utf-8');

console.log('\n\nType one of these commands: \n"/version" - see your Node version, \n"/language" - see your system language, \n"/getOSinfo" - get information about your computer, \n"/exit" - quit app.');

process.stdin.on('readable', function() {
	var input = process.stdin.read();
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
				OSinfo.print();
				break;
			default:
				process.stderr.write('Wrong instruction!\n');
		}
	}
});