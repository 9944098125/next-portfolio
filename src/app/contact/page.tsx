"use client";

import axios from "axios";
import { Formik, Form, Field } from "formik";
import Image from "next/image";
import React from "react";
import toast from "react-hot-toast";

type FormValues = {
	name: string;
	email: string;
	message: string;
};

export default function Contact() {
	const [initialValues, setInitialValValues] = React.useState({
		name: "",
		email: "",
		message: "",
	});

	const validate = (values: FormValues) => {
		let errors: Partial<FormValues> = {};
		if (!values.name) {
			errors.name = "Tell me your Name dude 😒 !";
		}
		if (!values.email) {
			errors.email = "Email is required dude ❌ !";
		}
		if (!values.message) {
			errors.message = "What you wanna talk about ? 🤷‍♂️";
		}
		return errors;
	};

	const submitContactForm = async (values: FormValues) => {
		try {
			const body = {
				name: values.name,
				email: values.email,
				message: values.message,
			};
			const res = await axios.post("/api/contact", body);
			if (res.data) {
				toast.success(res.data.message);
			}
		} catch (err: any) {
			console.log(err);
			toast.error(err.response?.data.error || err.response?.data.message);
		}
	};

	return (
		<React.Fragment>
			<div className="bg-black min-h-screen p-5 md:p-15">
				<h2 className="text-white text-2xl font-extrabold underline">
					Contact Me
				</h2>
				<div className="flex flex-col md:flex-row p-5 md:p-15">
					<div className="w-full md:w-1/2 flex flex-col md:flex-row flex-wrap space-y-2 md:space-x-5 items-center justify-center md:p-10">
						<Image
							src="/contact5.png"
							alt=""
							height={450}
							width={450}
							className="contact-image animate-oneWay2"
							placeholder="empty"
							quality={100}
							loading="eager"
						/>
					</div>
					<div className="w-full md:w-1/2 sm:p-5 md:p-25">
						<Formik
							initialValues={initialValues}
							validate={(values: FormValues) => validate(values)}
							onSubmit={(values: FormValues, { resetForm }) => {
								submitContactForm(values);
								resetForm();
							}}>
							{({ errors, touched }: any) => {
								return (
									<Form>
										<div className="w-full mb-5">
											<label
												className="text-white text-xl font-bold"
												htmlFor="name">
												Name:
											</label>
											<Field
												type="text"
												name="name"
												placeholder="Enter your Name"
												className={
													errors.name && touched.name
														? "border-2 border-red-500 focus:border-green-400 h-[45px] w-full rounded-md outline-none p-2 px-5"
														: "border-2 focus:border-green-400 h-[45px] w-full rounded-md outline-none p-2 px-5"
												}
												id="name"
											/>
											{errors.name && touched.name && (
												<div className="text-red-500 font-bold-text-sm">
													{errors.name}
												</div>
											)}
										</div>
										<div className="w-full mb-5">
											<label
												className="text-white text-xl font-bold"
												htmlFor="email">
												Email
											</label>
											<Field
												type="text"
												name="email"
												placeholder="Enter your Email address..."
												className={
													errors.email && touched.email
														? "border-2 border-red-500 focus:border-green-400 h-[45px] w-full rounded-md outline-none p-2 px-5"
														: "border-2 focus:border-green-400 h-[45px] w-full rounded-md outline-none p-2 px-5"
												}
												id="email"
											/>
											{errors.email && touched.email && (
												<div className="text-red-500 font-bold-text-sm">
													{errors.email}
												</div>
											)}
										</div>
										<div className="w-full mb-5">
											<label
												className="text-white text-xl font-bold"
												htmlFor="message">
												Message
											</label>
											<Field
												as="textarea"
												placeholder="Enter the message"
												rows={5}
												name="message"
												className={
													errors.message && touched.message
														? "border-2 border-red-500 focus:border-green-400 w-full rounded-md outline-none p-2 px-5"
														: "border-2 focus:border-green-400 w-full rounded-md outline-none p-2 px-5"
												}
												id="message"
											/>
											{errors.message && touched.message && (
												<div className="text-red-500 font-bold-text-sm">
													{errors.message}
												</div>
											)}
										</div>
										<div className="w-full">
											<button type="submit" className="gradient-btn">
												Send Message
											</button>
										</div>
									</Form>
								);
							}}
						</Formik>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}
