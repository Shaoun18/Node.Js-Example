var nodemailer = require('./node_modules/nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'rdas845622@gmail.com',
    pass: 'R@kesh327' 
  }
});

var mailOptions = {
  from: 'rdas845622@gmail.com',
  to: 'yaseenadib.ctg@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'Name : Rakesh Kumar Das,  ID - CSE 066 07750,  Batch - 66(D)'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});