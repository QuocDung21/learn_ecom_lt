const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const bodyParser = require("body-parser");
const { dbConnect } = require("./utiles/db");
const port = process.env.PORT || 3000;

app.use(
  cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);
app.use(bodyParser.json());

app.use("/api", require("./routes/authRoutes"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});
dbConnect();
app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
