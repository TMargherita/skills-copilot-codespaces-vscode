// Create web server
// Create a web server that listens on port 3000 and returns the comment from the comments.js file.
// The comments should be returned as a JSON response.

// Your server should listen on port 3000 and return the comment as a JSON response.
// The comments should be read from the comments.js file and returned as a JSON response.
// The comments should be returned as an array of objects.
// Each comment object should have two properties: name and comment.
// The server should respond with a 200 status code.
// The server should respond with a Content-Type header of application/json.

// comments.js
const comments = [
  {
    name: "John Doe",
    comment: "This is a comment"
  },
  {
    name: "Jane Smith",
    comment: "This is another comment"
  }
];

module.exports = comments;

// comment.js
const http = require("http");
const comments = require("./comments");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(comments));
});

server.listen(3000, () => {
  console.log("Server started on http://localhost:3000");
});

// To run the server, run the following command in the terminal:
// node comment.js

// To stop the server, press Ctrl + C in the terminal.git add comments.js