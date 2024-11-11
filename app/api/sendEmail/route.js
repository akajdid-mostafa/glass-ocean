import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, phone, email, service, message } = await req.json();

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const emailContent = `
  <div style="font-family: Arial, sans-serif; color: #333; display: flex; justify-content: center; align-items: center; min-height: 100vh; background-color: #f3f4f6;">
    <div style="max-width: 600px; width: 100%; background-color: #ffffff; border-radius: 12px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); padding: 20px; text-align: center;">
      <!-- Header -->
      <h2 style="
  background: linear-gradient(to right, #2563EB, #DC2626);
  background-clip: text;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  color: transparent;
  padding-bottom: 10px;
  border-bottom: 2px solid linear-gradient(to right, #2563EB, #DC2626);
">
  Nouveau contact avec Ocean nettoyage
</h2>

      
      <!-- Details Section -->
      <p style="margin: 0; padding: 8px 0;"><strong>Nom:</strong> ${name}</p>
      <p style="margin: 0; padding: 8px 0;"><strong>Téléphone:</strong> ${phone}</p>
      <p style="margin: 0; padding: 8px 0;"><strong>Email:</strong> ${email}</p>
      <p style="margin: 0; padding: 8px 0;"><strong>Service:</strong> ${service}</p>
      
      <!-- Message Section -->
      <div style="margin-top: 20px;">
        <h3 style="color: #2563EB; border-bottom: 1px solid #ddd; padding-bottom: 8px;">Message:</h3>
        <p style="padding: 8px; background-color: #f9f9f9; border-radius: 8px; border: 1px solid #ddd;">${message}</p>
      </div>
      
      <!-- Footer -->
      <footer style="margin-top: 20px; padding-top: 10px; border-top: 1px solid #eee;">
        <p style="font-size: 0.9em; color: #777;">Cet e-mail a été envoyé à partir du formulaire de contact du site web d'Interface Cleaning.</p>
      </footer>
      
    </div>
  </div>
`;


    await transporter.sendMail({
      from: "Ocean Glass",
      to: "mostafaakajdid6@gmail.com", 
      subject: "Nouveau formulaire de contact",
      html: emailContent,
    });

    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ message: "Error sending email" }, { status: 500 });
  }
}
