import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const data = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    /* 1️⃣ EMAIL TO YOU */
    await transporter.sendMail({
      from: "Azdello Website <azdelloservices@gmail.com>",
      to: "azdelloservices@gmail.com",
      subject: "New Contact Form Enquiry",
      html: `
        <h3>New Enquiry</h3>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Business Type:</strong> ${data.businessType}</p>
        <p><strong>Message:</strong><br/>${data.message}</p>
      `,
    });

    /* 2️⃣ AUTO-REPLY TO CUSTOMER */
    await transporter.sendMail({
      from: "Azdello <azdelloservices@gmail.com>",
      to: data.email,
      subject: "We’ve received your enquiry – Azdello",
      html: `
        <p>Hi ${data.name},</p>

        <p>Thank you for contacting <strong>Azdello</strong>.</p>

        <p>We’ve received your enquiry and a member of our team will get in touch with you shortly.</p>

        <p>If your request is urgent, feel free to reply to this email.</p>

        <br/>
        <p>Best regards,</p>
        <p><strong>Azdello Team</strong></p>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return Response.json({ success: false }, { status: 500 });
  }
}
