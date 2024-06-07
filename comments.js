// Create web server with Express.js
// 1. Create a new Express.js project
// 2. Create a new route: GET /comments
// 3. Send some comments as JSON as a response from the server
// 4. Start and test the server
// 5. Add a new comment to the list
// 6. Test the server

const express = require("express");
const app = express();
const port = 3000;

let comments = [
  { name: "John", comment: "Hello" },
  { name: "Jane", comment: "Hi" },
  { name: "Joe", comment: "Hey" },
];

app.get("/comments", (req, res) => {
  res.json(comments);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
