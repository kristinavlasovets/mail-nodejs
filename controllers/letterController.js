const Letter = require('../models/Letter');
class LetterController {
	async createLetter(req, res) {
		const newLetter = new Letter(req.body);
		try {
			const savedLetter = await newLetter.save();
			res.status(200).json(savedLetter);
		} catch (e) {
			res.status(500).json(e);
		}
	}

	async getLetter(req, res) {
		try {
			const letter = await Letter.find({
				conversationId: req.params.conversationId,
			});
			res.status(200).json(letter);
		} catch (e) {
			res.status(500).json(e);
		}
	}

	async getLetters(req, res) {
		try {
			const letters = await Letter.find();
			res.status(200).json(letters);
		} catch (e) {
			console.log(e);
		}
	}
}

module.exports = new LetterController();
