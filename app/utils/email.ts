import nodemailer from "nodemailer";
const email = process.env.EMAIL as string;
const password = process.env.PASS as string;
const LocalLink = process.env.LOCAL as string;
export const sendEmail = (user: any) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for port 465, false for other ports
    auth: {
      user: email,
      pass: password,
    },
  });

  const mailOptions = {
    from: email, // Replace with your email address
    to: user.email, // Replace with the recipient's email address
    subject: "Verify Your Email", // Replace with your desired subject
    text: "This is a plain text email body.", // Plain text content
    // or
    html: ` <body style="padding: 0; margin: 0">
    <div
      style="width: 100%; height: min-h-200px; padding: 10px; background-color: gold"
    >
      <div style="display: flex; justify-content: center">
        <h1>SFOX</h1>
      </div>

      <div style="display: flex; flex-direction: column; gap: 10px">
        <p>Hello dear,</p>
        <p>Thank you for registering with us,</p>
      </div>
      <p>Your verification code is 112345</p>
      <p>
        This is a secure platform made for everyone who want to grow their
        income. We stands to be the best platform so far. Kindly click on the
        button below to verify your email
      </p>
      <button
        style="
          padding: 5px;
          width: 200px;
          font-size: 20px;
          color: blue;
          border: none;
          border-radius: 10px;
        "
      >
        <a href="http://localhost:3000/verify/${user._id}">Verify</a>
        
      </button>
    </div>
  </body>`, // HTML content (optional)
  };

  transporter.sendMail(mailOptions, (error) => {
    if (error) {
      console.error(error);
    } else {
      console.log("Email sent ");
    }
  });
};
