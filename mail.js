// Step 3
// contain every single things that we need to send email
const nodemailer = require("nodemailer");
const mailGun = require("nodemailer-mailgun-transport");

const auth = {
  auth: {
    api_key: "3412081890fd76894e416cd1cbf5f1cf-a65173b1-3f12c3dc",
    domain: "sandbox42a4e112dca046729560489ceb1cea67.mailgun.org",
  },
};

const transporter = nodemailer.createTransport(mailGun(auth));

// Step 4
const sendMail = (email, subject, text, cb) => {
  const mailOptions = {
    from: email,
    to: "armortivore10@gmail.com",
    subject,
    text,
  };

  transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
      cb(err, null);
    } else {
      cb(null, data);
    }
  });
};

module.exports = sendMail;
