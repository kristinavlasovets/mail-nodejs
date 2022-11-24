const User = require('../models/User');
class EnterController {
	async enter(req, res) {
		try {
			const {username} = req.body;
			const candidate = await User.findOne({username});

			if (candidate) {
				return res.json(candidate);
			}

			const user = new User({username});
			await user.save();

			return res.json(user);
		} catch (e) {
			console.log(e);
			res.status(400).json({message: 'Enter error'});
		}
	}
	async getUsers(req, res) {
		try {
			const users = await User.find();
			res.json(users);
		} catch (e) {
			console.log(e);
		}
	}
}

module.exports = new EnterController();
