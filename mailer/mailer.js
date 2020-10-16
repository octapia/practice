import nodemailer from 'nodemailer';

var transporter = nodemailer.createTransport({
  service: 'Gmail',
  host: 'smtp.gmail.com',
  auth: {
    user: 'mister.sakil.cse@gmail.com',
    // pass: 'your-email-password'
    pass: 'Email&2044#'
  }
});

var mailOptions = {
  from: 'mister.sakil.cse@gmail.com',  
  to: 'hmdiftakher@gmail.com,sakilorb@icloud.com',  
  subject: 'Sending Email using Node.js, Nodemailer and sakil',
  text: 'Ki vai apnar nodemailer kaj kortesey?'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});  
