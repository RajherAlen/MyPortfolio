/////////////////////////////////////////////////////////////////////////////////// 1.
// get express
const express = require("express");
const sendMail = require("./mail");
// initialize express app
const app = express();
// used path to render my HTML
const path = require("path");

const PORT = 8080;

/////////////////////////////////////////////////////////////////////////////////// 2.
// Data parsing
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.post("/email", (req, res) => {
  // SEND EMAIL HERE
  const { subject, email, text } = req.body;
  console.log("Data: ", req.body);

  sendMail(email, subject, text, function (err, data) {
    if (err) {
      res.status(500).json({ message: "Internal error" });
    } else {
      res.json({ message: "Email sent." });
    }
  });

  res.json({ message: "Message received!!" });
});

// render out and get my port listening on port 8080
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// get my port listening
app.listen(PORT, () => console.log("Server is starting on PORT, ", 8080));
