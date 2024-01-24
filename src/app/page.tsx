"use client";

import Image from "next/image";
// Import React and useState
import React, { useEffect, useState } from "react";
import { Chrono } from "react-chrono";

export default function Home() {
	const [text, setText] = useState("");
	const [isTyping, setIsTyping] = useState(true);

	useEffect(() => {
		const messages = ["Srinivas Prasad Akella", "A MERN stack Developer"]; // Replace with the desired messages
		const typingDelay = 150; // Delay between typing characters
		const erasingDelay = 100; // Delay between erasing characters
		const pauseBeforeStart = 1000; // Pause before starting the animation

		const animate = async () => {
			while (true) {
				for (let i = 0; i < messages.length; i++) {
					const currentText = messages[i];
					setIsTyping(true);
					for (let j = 0; j < currentText.length; j++) {
						setText(currentText.substring(0, j + 1));
						await new Promise((resolve) => setTimeout(resolve, typingDelay));
					}

					await new Promise((resolve) => setTimeout(resolve, pauseBeforeStart));

					setIsTyping(false);

					for (let j = currentText.length; j > 0; j--) {
						setText(currentText.substring(0, j - 1));
						await new Promise((resolve) => setTimeout(resolve, erasingDelay));
					}

					await new Promise((resolve) => setTimeout(resolve, pauseBeforeStart));
				}
			}
		};

		animate();
	}, []);

	const stacks = [
		{
			img: "/frontend.jpeg",
			name: "Frontend Development",
		},
		{
			img: "/backend.jpeg",
			name: "Backend Development",
		},
		{
			img: "/full.webp",
			name: "Full Stack Development",
		},
		{
			img: "/database.jpeg",
			name: "Database Management",
		},
		{
			img: "/logical.jpeg",
			name: "Software Logics",
		},
	];

	const skills = [
		{
			logo: "/html.png",
		},
		{
			logo: "/css.png",
		},
		{
			logo: "/js.png",
		},
		{
			logo: "/react.png",
		},
		{
			logo: "/node.png",
		},
		{
			logo: "/python.png",
		},
		{
			logo: "/angular.png",
		},
		{
			logo: "/reactNative.png",
		},
		{
			logo: "/mongoDB.png",
		},
		{
			logo: "/sql.png",
		},
		{
			logo: "/git.png",
		},
		{
			logo: "/tailwind.png",
		},
		{
			logo: "/redux.svg",
		},
		{
			logo: "/next.png",
		},
		{
			logo: "/ts.png",
		},
		{
			logo: "/express.png",
		},
		{
			logo: "/bit.png",
		},
		{
			logo: "/flask.png",
		},
	];

	const chronoItems = [
		{
			title: "Dec 2020 - Nov 2021",
			cardTitle: "Teknotrait Solutions PVT LTD.",
			url: "https://www.teknotrait.com/",
			cardSubtitle: "Web Development Intern",
			cardDetailedText: [
				"Learning logics in ReactJS, NodeJS & MySQL",
				"Developing web pages with vanilla Javascript",
				"Learning Global State Management with Redux & Context",
			],
			media: {
				type: "IMAGE",
				source: {
					url: "https://teknotrait.com/wp-content/uploads/2019/05/Teknotrait_logo_dark.png",
				},
			},
		},
		{
			title: "Dec 2021 - May 2023",
			cardTitle: "Teknotrait Solutions PVT LTD.",
			url: "https://www.teknotrait.com/",
			cardSubtitle: "Associate Software Engineer",
			cardDetailedText: [
				"Developing Web Applications with ReactJS, NodeJS & MySQL",
				"Developing web pages with ReactJS",
				"Integrating REST API's with Redux core",
			],
			media: {
				type: "IMAGE",
				source: {
					url: "https://teknotrait.com/wp-content/uploads/2019/05/Teknotrait_logo_dark.png",
				},
			},
		},
		{
			title: "Jun 2023 - Jan 2024",
			cardTitle: "Aroha Technologies PVT LTD.",
			url: "https://www.aroha.co.in/",
			cardSubtitle: "Full Stack Trainer",
			cardDetailedText: [
				"Training people to up skill themselves in Full stack technologies",
				"Preparing pre-built projects for the trainees to work on them as assignments",
				"Mentoring the trainees on their projects",
				"Developing web pages with NextJS",
				"Up skilling myself in Python, Flask, NextJS and many more technologies.",
			],
			media: {
				type: "IMAGE",
				source: {
					url: "https://media.licdn.com/dms/image/C510BAQH4iKCyQozIEA/company-logo_200_200/0/1631346171097?e=2147483647&v=beta&t=qNYafM17XIRLnf8pIernDuB24M2ktIL01snp72bVl8s",
				},
			},
		},
	];

	return (
		<React.Fragment>
			<div className="portfolio-bg p-4">
				<div className="flex flex-col pl-10 mb-20 h-20">
					<h1 className="sm:text-3xl md:text-4xl font-extrabold text-white">
						Hi, I`M
					</h1>
					<h1 className="sm:text-3xl md:text-4xl font-extrabold text-yellow-600 typing-animation">
						{" "}
						{text}
					</h1>
				</div>
				<h3 className="text-xl pl-10 text-white font-bold sm:w-full md:w-1/2">
					I am a MERN stack developer with a passion for building beautiful and
					logically sound web applications. I love building application with
					MERN stack. I am primarily focused on building robust and scalable web
					applications with ReactJS and I am a core React Developer too.
				</h3>
			</div>
			<div className="bg-black md:p-10 sm:p-5">
				<h3 className="text-white text-2xl font-extrabold underline mb-5">
					Overview
				</h3>
				<p className="text-orange-400 text-lg font-bold mb-10 sm:w-full md:w-1/2">
					All the control lies in the backend & database, and I{"'"}ve always
					wanted to build the full stack applications and websites. Because of
					that, I started learning backend with NodeJS, Python, Flask and
					Express along with data bases like MongoDB, mySQL and SQLite and I
					started loving those controllers and middlewares and slowly I became a
					skilled full stack developer with self learning and now I am a Full
					stack Developer with the skills MERN stack, Python, React Native and
					some more technologies.
				</p>
				<div className="flex flex-wrap justify-center items-center space-y-2 space-x-3 md:p-10 sm:p-2">
					{stacks.map((stack, idx) => {
						return (
							<div
								key={idx}
								className="flex flex-col items-center space-y-4 p-4 border-2 rounded-md border-white animate-pulse">
								<Image
									src={stack.img}
									alt=""
									width={200}
									height={200}
									style={{ height: "200px", width: "200px" }}
								/>
								<h3 className="text-white text-xl font-extrabold">
									{stack.name}
								</h3>
							</div>
						);
					})}
				</div>
			</div>
			<div className="bg-black flex flex-col items-center">
				<h3 className="text-white text-2xl font-extrabold underline mb-5">
					My Skills:
				</h3>
				<div className="md:w-[70%] flex flex-wrap justify-center items-center space-x-10 sm:w-full">
					{skills.map((skill, idx) => {
						return (
							<Image
								src={skill.logo}
								alt=""
								height={70}
								width={100}
								key={idx}
								className={
									idx % 2 === 0 ? "animate-oneWay1" : "animate-oneWay2"
								}
								style={{
									backgroundColor: skill.logo === "/flask.png" ? "white" : "",
									borderRadius: skill.logo === "/flask.png" ? "50%" : "",
									width: "150px",
									height: "120px",
								}}
							/>
						);
					})}
				</div>
			</div>
			<div className="hidden md:block bg-black p-10">
				<h2 className="text-white text-4xl font-extrabold mb-5">
					My Work Experience
				</h2>
				<div className="w-full rounded-md bg-black p-5 border-2 border-blue-600">
					<Chrono items={chronoItems} mode="VERTICAL_ALTERNATING" />
				</div>
			</div>
		</React.Fragment>
	);
}
