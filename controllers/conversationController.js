const Conversation = require('../models/Conversation');
class ConversationController {
	async createConversation(req, res) {
		const newConversation = new Conversation({
			members: [req.body.senderId, req.body.receiverId],
		});

		try {
			const savedConversation = await newConversation.save();
			res.status(200).json(savedConversation);
		} catch (e) {
			res.status(500).json(e);
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
