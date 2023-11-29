const fs = require("fs");

const userData = fs.readFileSync("users.json", "utf-8");
const users = JSON.parse(userData);

users.forEach((user) => {
  user.totalPosts = user.posts.length;
});

// Write modified data back to a new JSON file
const modifiedData = JSON.stringify(users, null, 2);
fs.writeFileSync("modifiedUsers.json", modifiedData);
