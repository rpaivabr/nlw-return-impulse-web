import nodemailer from "nodemailer";
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "7b6c9d19299157",
    pass: "c7598899ff9007",
  },
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail(data: SendMailData): Promise<void> {
    const { subject, html } = data;

    await transport.sendMail({
      from: "Equipe Feedget <oi@feedget.com>",
      to: "Rafael Paiva <r.paivabr@gmail.com>",
      subject,
      html,
    });
  }
}
