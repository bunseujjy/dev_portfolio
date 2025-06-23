import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST!,
    port: Number(process.env.SMTP_PORT) || 0,
    secure: false,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD
    }
})



export const sendEmail = async (
  subject: string,
  html: string,
  replyTo?: string
): Promise<string | null> => {
  const info = await transporter.sendMail({
    from: process.env.EMAIL_TO,
    to: process.env.EMAIL_TO, // your Gmail
    subject,
    html,
    replyTo, // user’s real email
  });

  return info?.messageId;
};
