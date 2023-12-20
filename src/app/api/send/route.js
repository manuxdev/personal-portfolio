// // import { EmailTemplate } from "../../../components/EmailTemplate";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(request) {
  const { email, subject, message } = await request.json();

  try {
    const data = await resend.emails.send({
      from: fromEmail,
      to: ["manuxdev1010@gmail.com"],
      subject: subject,
      react: (
        <>
          <h1>{subject}</h1>
          <h2>{email}</h2>
          <p>Thank you for contacting me!</p>
          <p>{message}</p>
        </>
      ),
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
