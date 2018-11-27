const express = require('express');
const VoiceResponse = require('twilio').twiml.VoiceResponse;

const app = express();

app.post('/voice', (req, res) => { 

	const response = new VoiceResponse();
	const dial = response.dial({
		callerId: '+12028166212' //'+12023749435' resulted in 15 secs silence then line busy
	}); 
	dial.number('+12023749435');//('+12028166212');

	console.log(response.toString());
	
	// Render the response as XML in reply to the webhook request
 	res.type('text/xml');
 	res.send(response.toString()); // add a string representation of our voice response obj to the response                                        

});

app.listen(1337);
