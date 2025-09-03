const express = require("express");
const { dbConnect } = require("./connection");
const urlRouter = require("./routes/urlRoutes.js");
const app = express();
const PORT = 8001;
dbConnect(
  "mongodb+srv://huzaifashoaib7:huzaifa10@cluster0.n1a4uqb.mongodb.net/"
)
  .then(() => console.log("MongoDB Connected"))
  .catch((e) => console.error("MongoDB Error", e));
app.use(express.json());
app.use("/url", urlRouter);
app.use("/", urlRouter);

app.listen(PORT, () => {
  console.log(`Server Started At Port : ${PORT}`);
});
