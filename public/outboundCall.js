
const accountSid = 'AC2599d6b8ad24552c95739b244fe27d3e';
const authToken = '3aae8d030a9fd79f310d0fe8c39ababf'; // to be put into environment var

// create Twilio rest client
const client = require('twilio')(accountSid, authToken);

// for creating outbound calls. run node outboundCall.js from ~/dev/client-quickstart-js-master/public
client.calls.create({
	url: 'https://handler.twilio.com/twiml/EH6577a53b0a3dd80ea7ab4a9599f22b8a',
	to: '+12023749435',
	from: '+12028166212'
}, function(err,call){
	if(err){
		console.log(err);
	} else {
		console.log(call.sid); // CAfdd55c7b752d4dae22b47df19c48da14
	}
});


