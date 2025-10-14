import nodemailer from "nodemailer";
const email = process.env.EMAIL as string;
const password = process.env.PASS as string;

export const sendEmail = (user: any) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for port 465, false for other ports
    auth: {
      user: "ambergomez407@gmail.com",
      pass: "djnb gwlr amdu xyzb",
    },
  });

  const mailOptions = {
    from: "bonnie.feil55@ethereal.email", // Replace with your email address
    to: user.email, // Replace with the recipient's email address
    subject: "Verify Your Email", // Replace with your desired subject
    text: "This is a plain text email body.", // Plain text content
    // or
    html: `<h1>Welcome!</h1><p>Click on the button below to verify your email.</p> <button><a href='https://broker-eight-theta.vercel.app/api/verify/${user._id}'>Verify Email</a></button>`, // HTML content (optional)
  };

  transporter.sendMail(mailOptions, (error) => {
    if (error) {
      console.error(error);
    } else {
      console.log("Email sent ");
    }
  });
};
