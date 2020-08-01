// MAIL
require("dotenv").config();
const nodemailer = require("nodemailer");
// const express = require("express");
// const bodyParser = require("body-parser");
// const exphbs = require("express-handlebars");

// const app = express();

// app.get("/", (req, res) => {
//   res.send("Hello");
// });

// app.listen(8080, () => console.log("server started..."));

let userName = document.querySelector(".user_email");
let userText = document.querySelector(".user_text");

// Step 1
let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
});

// Step 2 Mail option
let mailOption = {
  from: userName,
  to: "armortivore10@gmail.com",
  subject: "Helloo testing 1",
  text: userText,
};

// Step 3
transporter.sendMail(mailOption, function () {
  if (err) {
    console.log("error");
  } else {
    console.log("email sent");
  }
});

//
//
//
//
//
//

//Smooth Scroll   (Easing Equations)

function smoothScroll(target, duration) {
  var target = document.querySelector(target);
  var targetPosition = target.getBoundingClientRect().top;
  var startPosition = window.pageYOffset;
  var startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    var timeElapsed = currentTime - startTime;
    var run = ease(timeElapsed, startPosition, targetPosition, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
}

var sec1 = document.querySelector(".sec1");

sec1.addEventListener("click", function () {
  smoothScroll("#aboutMe", 1500);
});

var sec2 = document.querySelector(".sec2");

sec2.addEventListener("click", function () {
  smoothScroll("#myWork", 1500);
});

var sec3 = document.querySelector(".sec3");

sec3.addEventListener("click", function () {
  smoothScroll("#contact", 1500);
});
