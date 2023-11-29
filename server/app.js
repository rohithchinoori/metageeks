const express = require("express");
const timestampMiddleware = require("./middleware/timestamp");

const app = express();

// Use the timestamp middleware for all incoming requests
app.use(timestampMiddleware);

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
