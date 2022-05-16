const express = require("express");
const app = express();

const port = process.env.PORT || 3030;
//middleweares
app.use(express.json());

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
