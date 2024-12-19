import nodemailer from "nodemailer";

export async function POST(req) {
  const { firstName, lastName, email, subject, message } = await req.json();

  try {
    // Create a transporter with SMTP configuration
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // Use TLS
      auth: {
        user: process.env.EMAIL_USER, // Your email address
        pass: process.env.EMAIL_PASS, // Your email password or app-specific password
      },
    });

    // Construct the email
    const mailOptions = {
      from: `"${firstName} ${lastName}" <${email}>`, // Sender's name and their email
      to: process.env.EMAIL_USER, // Your email address
      subject: subject,
      text: `
        From: ${firstName} ${lastName}
        Email: ${email}

        Message:
        ${message}
      `,
      html: `
        <p><strong>From:</strong> ${firstName} ${lastName} (${email})</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ message: "Email sent successfully!" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({ message: "Failed to send email" }),
      { status: 500 }
    );
  }
}
