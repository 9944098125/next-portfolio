import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
	try {
		const { name, email, message } = await req.json();

		const transporter = nodemailer.createTransport({
			host: "smtp.gmail.com", // service provider
			port: 465,
			secure: true,
			auth: {
				user: "srinivas72075@gmail.com",
				pass: "ifhp vypf rhqb ubpw",
			},
		});

		// Email content
		const mailOptions = {
			from: "srinivas72075@gmail.com",
			to: "srinivas72075@gmail.com",
			replyTo: email,
			subject: `Hello Srinivas ! You have message from ${name} via your Portfolio !`,
			html: `
			<h2>Name: ${name}</h2>
			<h5>Email: ${email}</h5>
			<p>Message: ${message}</p>
			`,
		};

		// Send the email
		const info = await transporter.sendMail(mailOptions);
		return NextResponse.json(
			{
				message:
					"Sent the Mail successfully 🤩 ! Srinivas will shortly 📞 contact you.",
			},
			{ status: 200 }
		);
	} catch (err: any) {
		return NextResponse.json(
			{ message: "something went wrong !" },
			{ status: 500 }
		);
	}
}
