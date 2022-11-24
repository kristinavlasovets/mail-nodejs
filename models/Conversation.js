const {Schema, model} = require('mongoose');

const Conversation = new Schema({
	members: {
		type: Array,
	},
});

module.exports = model('Conversation', Conversation);
