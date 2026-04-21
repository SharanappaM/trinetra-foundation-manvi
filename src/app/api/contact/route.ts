import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      parent,
      child,
      phone,
      email,
      age,
      program,
      city,
      message,
    } = body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // you receive it

      subject: "New Consultation Booking – Trinetra Website",
      text: `
Parent: ${parent}
Child: ${child}
Phone: ${phone}
Email: ${email}
Age: ${age}
Program: ${program}
City: ${city}
Message: ${message}
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Email failed" },
      { status: 500 }
    );
  }
}