const Conversation = require('../models/Conversation');
class ConversationController {
	async createConversation(req, res) {
		try {
			const conversation = await Conversation.findOne({
				members: [req.body.senderId, req.body.receiverId],
			});

			if (conversation) {
				return res.json(conversation);
			}

			const newConversation = new Conversation({
				members: [req.body.senderId, req.body.receiverId],
			});
			const savedConversation = await newConversation.save();

			return res.status(200).json(savedConversation);
		} catch (error) {
			console.log(error);
			res.status(500).json({message: 'error'});
		}
	}

	async getConversation(req, res) {
		try {
			const conversation = await Conversation.find({
				members: {$in: [req.params.userId]},
			});

			res.status(200).json(conversation);
		} catch (e) {
			res.status(500).json(e);
		}
	}
}

module.exports = new ConversationController();
