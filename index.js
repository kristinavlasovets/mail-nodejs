const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');
const enterRouter = require('./routes/enterRouter');
const conversationsRouter = require('./routes/conversationsRouter');
const lettersRouter = require('./routes/lettersRouter');

dotenv.config();
const PORT = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(
	cors({
		origin: process.env.CLIENT_URL,
	})
);
app.use('/enter', enterRouter);
app.use('/conversations', conversationsRouter);
app.use('/letters', lettersRouter);

const start = async () => {
	try {
		await mongoose.connect(process.env.MONGODB_URL);
		app.listen(PORT, () => console.log(`server started in port ${PORT}`));
	} catch (e) {
		console.log(e);
	}
};

start();
