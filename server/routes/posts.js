const express = require("express");
const app = express();
const port = 3000;

// Assuming you have the getPostsFromDatabase function defined

app.get("/posts", (req, res) => {
  getPostsFromDatabase()
    .then((posts) => {
      // let's just send them as JSON in the response
      res.json(posts);
    })
    .catch((err) => {
      console.error("Error retrieving posts:", err.message);
      res.status(500).json({ error: "Internal Server Error" });
    });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
