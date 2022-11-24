const express = require("express");
const mongoose = require("mongoose");
const mailRouter = require("./mailRouter");
const PORT = process.env.PORT || 5000;
const app = express();
app.use(express.json());
app.use("/mail", mailRouter);

const start = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://kristina:kristina123@mail-cluster.fippgoe.mongodb.net/mail?retryWrites=true&w=majority"
    );
    app.listen(PORT, () => console.log(`server started in port ${PORT}`));
  } catch (e) {
    console.log(e);
  }
};

start();
