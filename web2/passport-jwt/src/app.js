const express = require("express");
const app = express();
require("dotenv").config();

const port = process.env.PORT || 3030;

app.use(express.json());
require("./config/auth");
app.use(require("./routes"));

app.listen(port, () => {
  console.log("server running on port", port);
});
