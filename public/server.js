const express = require('express');
const VoiceResponse = require('twilio').twiml.VoiceResponse;

const app = express();

app.post('/voice', (req, res) => { 
                                   
	const twiml = new VoiceResponse();
	
	const say = twiml.say({ voice: 'Polly.Salli'}, 'Hello');

	say.ssmlProsody(
	  {
	    pitch: '-5%',
	    rate: '98%'
	  },
	  'from Lindsay Browns Twilio app.'
	);

	say.ssmlProsody(
	  {
	    pitch: '-8%',
	    rate: '80%',
	    volume: '-1dB'
	  },
	  'And'
	);

	say.ssmlBreak({
  		strength: 'weak',
  		time: '500ms'
	});

	say.ssmlProsody(
	  {
	    pitch: '120%',
	    rate: '60%',
	    volume: '+3dB'
	  },
	  'Happy Halloween'
	);

	say.ssmlBreak({
  		strength: 'weak',
  		time: '1.5s'
	});

  	say.ssmlProsody(
	  {
	    pitch: '-10%',
	    rate: '90%',
	    volume: '-1dB'
	  },
	  'Are you still there?'
	);

	say.ssmlBreak({
  		strength: 'weak',
  		time: '500ms'
	});

	say.ssmlEmphasis(
	  {
    	level: 'reduced'
  	  },
  	  'Good! Glad I didnt scare you away!'
	);

	say.ssmlBreak({
  		strength: 'weak',
  		time: '500ms'
	});

	say.ssmlProsody(
	  {
	    pitch: 'default',
	    rate: '100%',
	    volume: 'default'
	  },
	  'Here is a song I made myself.'
	); 
	
	say.ssmlBreak({
  		time: '500ms'
	});

	say.ssmlProsody(
	  {
	    pitch: '-8%',
	    rate: '95%',
	    volume: 'default'
	  }, 'Its 45 seconds long.'
	);

	// twiml.play({}, 

	twiml.play({}, 'https://magnolia-cat-4216.twil.io/assets/Flickers.wav');
	// const song = new VoiceResponse();
	// 	song.play('https://magnolia-cat-4216.twil.io/assets/Flickers.wav');

	say.ssmlProsody(
	  {
	    pitch: '-10%',
	    rate: '80%',
	    volume: '-1dB' 
	  },
	  'I hope I\'ve shown you my creativity.'
	); 

	say.ssmlBreak({
  		strength: 'x-strong'
	});

	say.ssmlProsody(
	  {
	    pitch: '-10%',
	    rate: '100%',
	    volume: '+1dB' 
	  },'Thank you for calling my app.'
	);

	say.ssmlBreak({
  		strength: 'x-strong',
	});

	say.ssmlProsody(
	  {
	    pitch: '10%',
	    rate: '105%',
	    volume: 'medium' 
	  },
  	  'My name is Lindsay Brown.'
  	);

	say.ssmlBreak({
  		strength: 'x-strong',
  		time: '500ms'
	});

	say.ssmlProsody(
	  {
	    pitch: '-10%',
	    rate: '100%',
	    volume: '+1dB' 
	  },'And I hope to get a phone call from you soon.'
	);

	say.ssmlBreak({
  		strength: 'x-strong',
  		time: '500ms'
	});

	say.ssmlS('Good bye!');
	
	// console.log(twiml.toString());
	
	// Render the response as XML in reply to the webhook request
 	res.type('text/xml');
 	res.send(twiml.toString()); // add a string representation of our voice response obj to the response                                        

});

app.listen(1337);



