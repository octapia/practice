var nodemailer = require('nodemailer');


var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'hmdiftakher@gmail.com',
    pass: 'yourpassword'
  }
});

var mailOptions = {
  from: 'hmdiftakher@gmail.com',
  to: 'iftakher.tec@yahoo.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
