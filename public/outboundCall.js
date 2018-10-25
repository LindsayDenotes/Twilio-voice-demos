
const accountSid = 'AC2599d6b8ad24552c95739b244fe27d3e';
const authToken = '3aae8d030a9fd79f310d0fe8c39ababf'; // to be put into environment var

// create Twilio rest client
const client = require('twilio')(accountSid, authToken);

// for creating outbound calls
client.calls.create({
	url: 'https://handler.twilio.com/twiml/EH6577a53b0a3dd80ea7ab4a9599f22b8a',
	to: '+12023749435',
	from: '+12028166212'
}, function(err,call){
	if(err){
		console.log(err);
	} else {
		console.log(call.sid);
	}
});

