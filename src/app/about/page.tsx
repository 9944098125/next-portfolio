import Image from "next/image";
import Link from "next/link";
import React from "react";

import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

export default function About() {
	return (
		<React.Fragment>
			<div className="w-full h-full bg-black space-y-10 p-5 md:p-15">
				<div className="flex flex-col md:flex-row items-center justify-around px-5 md:px-15 sm:space-y-5">
					<div className="w-full md:w-[50%] p-5 md:p-15 border-2 border-green-400 rounded-md">
						<h2 className="text-white text-2xl font-bold">
							My Passion is to build innovative applications and websites with
							new beautiful styles, cool effects, animations and smart logics.
						</h2>
					</div>
					<Image
						src="https://res.cloudinary.com/dakda5ni3/image/upload/v1705679470/v7h1kvc1t9mjl0v4wp3b.jpg"
						height={250}
						width={200}
						style={{ borderRadius: "50%" }}
						alt=""
						className="animate-bounce"
					/>
				</div>

				<div className="flex flex-col md:flex-row items-center justify-around px-5 md:px-15">
					<div className="flex items-center space-x-10 p-5 md:p-15">
						<Link href="https://github.com/9944098125" target="_blank">
							<FaGithubSquare
								className="animate-bounce"
								color="white"
								fontSize={50}
							/>
						</Link>
						<Link
							href="https://www.linkedin.com/in/srinivas-prasad-akella-6abb28195/"
							target="_blank">
							<FaLinkedin
								className="animate-bounce"
								color="white"
								fontSize={50}
							/>
						</Link>
					</div>
					<div className="w-full md:w-1/2 p-5 md:p-15 border-2 border-green-400 rounded-md">
						<h2 className="text-white text-2xl font-bold">
							I consider myself a creative and smart working as my stats show.
						</h2>
					</div>
				</div>
				<div className="w-full p-5 md:p-15 border-2 border-green-400 rounded-md">
					<h2 className="text-white text-2xl font-bold">
						Through my 3 years of experience I have worked on various projects
						and with facing issues in them learnt so many new things and
						implemented as well.
					</h2>
				</div>
			</div>
		</React.Fragment>
	);
}
