const express = require('express');
const VoiceResponse = require('twilio').twiml.VoiceResponse;
const urlencoded = require('body-parser').urlencoded;

// Update with your own phone number in E.164 format
const MODERATOR = '+12023749435';

const app = express();

// Parse incoming POST params with Express middleware
app.use(urlencoded({ extended: false }));

// Create a route that will handle Twilio webhook requests, sent as an
// HTTP POST to /voice in our application
app.post('/voice', (request, response) => {
  // Use the Twilio Node.js SDK to build an XML response
  const twiml = new VoiceResponse();

  // Start with a <Dial> verb
  const dial = twiml.dial();
  // If the caller is our MODERATOR, then start the conference when they
  // join and end the conference when they leave
  if (request.body.From == MODERATOR) {
    dial.conference('My conference', {
      startConferenceOnEnter: true,
      endConferenceOnExit: true,
    });
  } else if (request.body.From == '+15017250604'){
    // Otherwise have the caller join as a regular participant
    dial.conference('My conference', {
      startConferenceOnEnter: false,
    });
  } else {
    twiml.reject();
    console.log('It\'s an outsider. Rejected call.');
  }

  // Render the response as XML in reply to the webhook request
  response.type('text/xml');
  response.send(twiml.toString());
});

// Create an HTTP server and listen for requests on port 1337
console.log('Twilio Client app HTTP server running at http://127.0.0.1:1337');
app.listen(1337);
