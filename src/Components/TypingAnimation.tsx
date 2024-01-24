"use client";

import React, { useState, useEffect } from "react";

const TypingAnimation = () => {
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
	return (
		<React.Fragment>
			<h1 className="typing-animation"> {text}</h1>
		</React.Fragment>
	);
};

export default TypingAnimation;
