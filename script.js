const nodemailer = require("nodemailer");
require('dotenv').config()


async function main() {
  
  let transporter = nodemailer.createTransport({
    host: "smtp.ethereal.email",
    port: 587,
    secure: false, 
    service:'gmail',
    auth: {
      user: process.env.FROM, 
      pass: process.env.PASS, 
    },
    tls:{
        rejectUnauthorized:false
    }
  });

  
  let info = await transporter.sendMail({
    from: '"Deeksha👻" <foo@example.com>',
    to: process.env.TO.split(','), 
    subject: "Hello ✔",
    text: "", 
    html: "<b>Hello guys welcome to the world of coding by deeksha</b>",
     
  });

  console.log("Message sent: %s", info.messageId);
  
  
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
}

main().catch(console.error);
