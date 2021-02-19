const express = require('express'),
	axios = require('axios');

const { genInsult } = require('./util');

const app = express(),
	port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/new-message', (req, res) => {
	const { message } = req.body;

	let messageBody = message.text.toLowerCase() || '';

	if (!message) {
		return res.end();
	}

	var text = '';

	if (messageBody.includes('shakespeare')) {
		text = genInsult();
	} else {
		text =
			"Macbeth and damilola says you're mad ni?!!\nFollow simple instruction!.";
	}

	axios
		.post(
			'https://api.telegram.org/bot1639727523:AAFfFGn9gHFW5JjFqcZZKUDPMkZT6chZ2KI/sendMessage',
			{
				chat_id: message.chat.id,
				text,
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
