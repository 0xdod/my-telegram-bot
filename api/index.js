const express = require('express'),
	axios = require('axios');

const { genInsult } = require('./util');

const app = express(),
	port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/new-message', (req, res) => {
	const { message } = req.body;

	if (!message || message.text.toLowerCase().indexOf('shakespeare') < 0) {
		return res.end();
	}

	axios
		.post(
			'https://api.telegram.org/bot1639727523:AAFfFGn9gHFW5JjFqcZZKUDPMkZT6chZ2KI',
			{
				chat_id: message.chat.id,
				text: genInsult(),
			}
		)
		.then(response => {
			console.log('message posted.');
			res.end('ok');
		})
		.catch(err => {
			console.error('Error: ', err.stack);
			res.end('Error: ' + err);
		});
});

app.listen(port, () => {
	console.log(`Telegram bot listening on ${port}`);
});

module.exports = app;
