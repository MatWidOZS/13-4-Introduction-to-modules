var os = require('os');
var uptimeInfo = require('./uptimeInfo');

function getOSinfo() {
		var type = os.type(),
			release = os.release(),
			cpu = os.cpus()[0].model,
			userInfo = os.userInfo();

		if (type === 'Darwin') {
			type = 'OSX';
		} else if (type === 'Windows_NT') {
			type = 'Windows';
		} else if (type === 'Linux') {
			type = 'Linux';
		}
		console.log('System: ', type);
		console.log('Release: ', release);
		console.log('CPU model: ', cpu);
		uptimeInfo.format();
		console.log('User name: ', userInfo.username);
		console.log('Home dir: ', userInfo.homedir);
	}

exports.print = getOSinfo;