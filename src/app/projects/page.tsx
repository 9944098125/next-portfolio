import Image from "next/image";
import Link from "next/link";
import React from "react";

import "./styles.css";

export default function Portfolio() {
	const projects = [
		{
			link: "https://asp-foa-react.onrender.com",
			img: "https://res.cloudinary.com/dakda5ni3/image/upload/v1706020915/qkbjypu14wqomakvq82w.png",
			title: "Food Ordering Application",
			description:
				"Here, I have built an application with two roles admin and user. Here an admin after creating an account can create restaurant, food items in it and do CRUD operations with those food items as well as the restaurant and one admin can create only one restaurant and can do CRUD operations on his own restaurant and food items only. And a user can add some food items to the cart and can place order by doing the payment.",
			technologies: ["ReactJS", "NodeJS", "ExpressJS", "MongoDB", "MUI"],
		},
		{
			link: "https://souvenir-frontend.onrender.com",
			img: "https://res.cloudinary.com/dakda5ni3/image/upload/v1706020915/dyqfrl8z5zvkwl4sk5lv.png",
			title: "Souvenir",
			description:
				"Here, I have built an application to store the question & answer set to the database according to the user in the technologies they want. Initially while preparing for interviews I had searched many resources for various questions, if an app exists like this anyone can store the selected questions in selected technologies.",
			technologies: ["MongoDB", "ExpressJS", "ReactJS", "NodeJS", "MUI"],
		},
		{
			link: "https://hotel-booking-frontend-bycm.onrender.com",
			img: "https://res.cloudinary.com/dakda5ni3/image/upload/v1706020915/sgj6ek748a9wr10u22gr.png",
			title: "Hotel Booking Application",
			description:
				"Here, I have built an application to book rooms/hotels for a temporary period of time. I have implemented this with search bar which takes city, dates, and number of people to stay and it shows the list of hotels according to that.",
			technologies: ["MongoDB", "ExpressJS", "ReactJS", "NodeJS"],
		},
		{
			link: "https://asp8.ccbp.tech/",
			img: "https://res.cloudinary.com/dakda5ni3/image/upload/v1706020914/arnu6eiserg0mz3jhjjq.png",
			title: "Emoji Game",
			description:
				"Here, I have built a small game with emojis of different types. In this game for each click the list of emoji is rendered again in random positions. So we must select a different emoji for each click to win.",
			technologies: ["ReactJS", "HTML", "CSS"],
		},
		{
			link: "https://aspjobbyapp801.ccbp.tech/",
			img: "https://res.cloudinary.com/dakda5ni3/image/upload/v1706020914/ucble2ks2g6uufgtq1ie.png",
			title: "Jobby App",
			description:
				"Here, I have built an application to search for jobs, filter jobs according to the salary and place of work and we can see the details of that particular job also.",
			technologies: ["ReactJS", "HTML", "CSS"],
		},
		{
			link: "https://aspyc.ccbp.tech/",
			img: "https://res.cloudinary.com/dakda5ni3/image/upload/v1706020915/hkfa2cbppjci0c5t413b.png",
			title: "Youtube Clone",
			description:
				"Here I have tried to clone the youtube to learn dealing with videos and stuff like that. So here we can see the list of videos from api and we can go to the details of the video and can save that, like that vide, and watch that video.",
			technologies: ["ReactJS", "HTML", "CSS"],
		},
		{
			link: "https://asprps.ccbp.tech",
			img: "https://res.cloudinary.com/dakda5ni3/image/upload/v1706020914/xlw2h9gu09fcqxxdi7ze.png",
			title: "Rock Paper Scissors",
			description:
				"Here, I have built a cool game that takes our choice with click, and takes a choice randomly and shows the result. If we win score is incremented and if we loose it is decremented.",
			technologies: ["ReactJS", "HTML", "CSS"],
		},
		{
			link: "https://asp801.ccbp.tech/",
			img: "https://res.cloudinary.com/dakda5ni3/image/upload/v1706020914/ju3bls3wp7qorwcfhiuv.png",
			title: "NextTrends",
			description:
				"Here, I have built an application a miniature version of amazon dealing the frontend api integration with context and displaying them, authenticating and authorizing the user with the credentials.",
			technologies: ["ReactJS", "HTML", "CSS"],
		},
	];
	return (
		<React.Fragment>
			<div className="bg-black w-full p-5 md:p-10">
				{projects.map((each, idx) => {
					return (
						<div
							key={idx}
							className={`border-2 border-green-300 p-5 mb-5 rounded-md ${
								idx % 2 === 0 ? "move-left-to-right" : "move-right-to-left"
							}`}>
							<Link href={`${each.link}`} target="_blank">
								<div className="p-2 border-2 border-green-300 rounded-md">
									<Image
										src={each.img}
										alt=""
										height={200}
										width={300}
										className={`${
											idx % 2 === 0
												? "move-image-from-left"
												: "move-image-from-right"
										}`}
										style={{ objectFit: "cover", borderRadius: "9px" }}
									/>
								</div>
								<div>
									<h3 className="text-white text-2xl font-extrabold">
										{each.title}
									</h3>
									<p className="text-white text-md font-bold underline">
										Technologies:{" "}
										{each.technologies.map((eachTech, idx) => {
											return (
												<span key={idx} className="text-gray-300 font-bold">
													{eachTech}
													{", "}
												</span>
											);
										})}
									</p>
									<p className="text-gray-300 font-bold text-md">
										{each.description}
									</p>
								</div>
							</Link>
						</div>
					);
				})}
			</div>
		</React.Fragment>
	);
}
