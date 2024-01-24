"use client";

import Image from "next/image";
import React from "react";

import "./styles.css";

export default function Work() {
	const workingOn = [
		{
			img: "/websiteDevelopment.jpg",
			title: "Web Development",
			description:
				"Web development involves creating websites and web applications using technologies such as HTML, CSS, and JavaScript. It includes front-end development for user interfaces and back-end development for server-side logic.",
		},
		{
			img: "/android.avif",
			title: "Android Development",
			description:
				"Android development focuses on creating mobile applications for devices running the Android operating system. This involves using languages like React Native, Java, Kotlin and so many more using android SDK's.",
		},
		{
			img: "/apiDevelopment.avif",
			title: "API Development",
			description:
				"API (Application Programming Interface) development involves creating endpoints that allow different software systems to communicate with each other. API development is crucial for building scalable and modular applications that can interact seamlessly with other services.",
		},
		{
			img: "/appDevelopment.jpg",
			title: "Application Development",
			description:
				"Application development is a broader term that encompasses the entire process of creating software applications. This includes planning, design, development, testing, and deployment. It can refer to web applications, mobile apps, desktop applications, or any other type of software.",
		},
		{
			img: "/db.jpg",
			title: "Database Design",
			description:
				"Database design involves creating the structure and organization of databases to store and manage data efficiently. This includes defining tables, relationships, and constraints to ensure data integrity. A well-designed database is crucial for the performance and scalability of applications.",
		},
		{
			img: "/reduxDevelopment.jpg",
			title: "API Integration with Redux Core",
			description:
				"Integrating APIs with Redux involves connecting external data sources (such as APIs) to a React-Redux application. Redux is a state management library for JavaScript applications, and integrating APIs allows for fetching and updating data in a consistent and efficient manner.",
		},
	];

	return (
		<React.Fragment>
			<div className="flex flex-col bg-black md:p-10 sm:p-5">
				{workingOn.map((eachWork, idx) => {
					return (
						<div
							key={idx}
							className={`flex flex-col space-y-5 items-center md:flex-row border-2 mb-10 border-green-400 w-full rounded-md space-x-5 p-5 ${
								idx % 2 === 0 ? "move-left-to-right" : "move-right-to-left"
							}`}>
							<div className="sm:w-full md:w-[50%] border-2 border-green-400 p-2 rounded-lg">
								<Image
									src={eachWork.img}
									alt=""
									className="work-images"
									height={100}
									width={100}
								/>
							</div>
							<div className="h-full p-2 border-2 border-green-400 rounded-md space-y-2">
								<div className="border-2 border-green-400 p-2">
									<h5 className="text-2xl text-white font-extrabold underline mb-5">
										{eachWork.title}
									</h5>
								</div>
								<div className="border-2 border-green-400 p-2">
									<p className="text-md text-white font-bold">
										{eachWork.description}
									</p>
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</React.Fragment>
	);
}
