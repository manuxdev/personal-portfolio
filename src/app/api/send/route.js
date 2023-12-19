// // import { EmailTemplate } from "../../../components/EmailTemplate";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req, res) {
  const { body } = await req.json();
  const { email, subject, message } = body;

  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: ["manuxdev1010@gmail.com", email],
      subject: subject,
      react: (
        <>
          <h1>{subject}</h1>
          <p>Thank you for contacting me!</p>
          <p>{message}</p>
        </>
      ),
    });

    return res.status(200).json(data);
  } catch (error) {
    return res.status(400).json({ error });
  }
}
