var os = require('os');

function changeTime() {
	var uptime = os.uptime(),
		hour = 0,
		min = 0,
		sek = 0;

	if(uptime < 60) {
		console.log('Uptime: ~', uptime, 's');
	} else if (uptime < 3600) {
		min = (uptime / 60).toFixed(0);
		sek = uptime % 60;
		console.log('Uptime: ~', min, 'min ', sek, 's');
	} else if (uptime > 3600) {
		hour = (uptime / 3600).toFixed(0);
		min = ((uptime % 3600) / 60).toFixed(0);
		sek = ((uptime % 3600) % 60).toFixed(0);
		console.log('Uptime: ~', hour, 'h', min, 'min', sek, 's');
	}
}

exports.format = changeTime;