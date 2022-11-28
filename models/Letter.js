const {Schema, model} = require('mongoose');

const Letter = new Schema({
	conversationId: {
		type: String,
	},
	sender: {
		type: String,
	},
	receiver: {
		type: String,
	},
	subject: {
		type: String,
	},
	text: {
		type: String,
	},
	sendTime: {
		type: Date,
		default: Date.now,
	},
});

module.exports = model('Letter', Letter);
