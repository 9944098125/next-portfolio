import TypingAnimation from "@/Components/TypingAnimation";
import Image from "next/image";
import React from "react";

export default function Home() {
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

	return (
		<React.Fragment>
			<div className="portfolio-bg p-4">
				<div className="flex flex-col pl-10 mb-20 h-20">
					<h1 className="sm:text-3xl md:text-4xl font-extrabold text-white">
						Hi, I`M
					</h1>
					<TypingAnimation />
				</div>
				<h3 className="text-xl pl-10 text-white font-bold sm:w-full md:w-1/2">
					I am a MERN stack developer with a passion for building beautiful and
					logically sound web applications. I love building application with
					MERN stack. I am primarily focused on building robust and scalable web
					applications with ReactJS and I am a core React Developer too.
				</h3>
			</div>
			<div className="bg-black w-full p-5 md:p-10">
				<h3 className="text-white text-2xl font-extrabold underline mb-5">
					Overview
				</h3>
				<p className="text-orange-400 text-md font-bold mb-10 sm:w-full md:w-1/2">
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
		</React.Fragment>
	);
}
