import nodemailer from 'nodemailer';

export class Mailer {
  constructor(email:string, password:string) {
    this.email = email;
    this.password = password;
  }

  email:string;
  password:string;

  async sendMail(to:string, subject:string, text:string) {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      host: 'smtp.gmail.com',
      port: 465,
      auth: {
        user: this.email,
        pass: this.password,
      },
    });

    const mailOptions = {
      from: this.email,
      to,
      subject,
      text,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
  }
}