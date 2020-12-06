const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = require("./app");

dotenv.config();

const DB = process.env.DB_URI;
const port = porcess.env.PORT || 4000;

app.listen(port, () => {
  console.log(`*** listening on port ${port} ***`);
});

mongoose.connect(DB, () => {
  console.log(`*** connected to mongodb ***`);
});
