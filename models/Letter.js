const {Schema, model} = require('mongoose');

const Letter = new Schema({
	conversationId: {
		type: String,
	},
	sender: {
		type: String,
	},
	subject: {
		type: String,
	},
	text: {
		type: String,
	},
});

module.exports = model('Letter', Letter);
