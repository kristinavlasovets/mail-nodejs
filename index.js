const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const enterRouter = require('./routes/enterRouter');
const conversationsRouter = require('./routes/conversationsRouter');
const lettersRouter = require('./routes/lettersRouter');
const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use(cors());
app.use('/enter', enterRouter);
app.use('/conversations', conversationsRouter);
app.use('/letters', lettersRouter);

const start = async () => {
	try {
		await mongoose.connect(
			'mongodb+srv://kristina:kristina123@mail-cluster.fippgoe.mongodb.net/mail?retryWrites=true&w=majority'
		);
		app.listen(PORT, () => console.log(`server started in port ${PORT}`));
	} catch (e) {
		console.log(e);
	}
};

start();
