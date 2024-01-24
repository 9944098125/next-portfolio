"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdOutlineMenu } from "react-icons/md";

import useClickOutside from "./useClickOutside";

const Navbar = () => {
	const [showMenu, setShowMenu] = React.useState(false);
	const menuRef = React.useRef(null);
	const toggleBtnRef = React.useRef(null);
	useClickOutside(menuRef, toggleBtnRef, () => setShowMenu(false));

	const toggleMenu = () => {
		setShowMenu((prev) => !prev);
	};

	return (
		<React.Fragment>
			<div className="gradient-bg">
				<Link href="/">
					<div className="px-5 flex items-center space-x-4">
						<Image
							src="/logo.png"
							alt=""
							width={80}
							height={50}
							style={{
								borderRadius: "50%",
								width: "110px",
								height: "80px",
							}}
							priority
						/>
						<h3 className="hidden lg:flex text-white font-extrabold md:text-2xl sm:text-lg">
							Srinivas Akella
						</h3>
					</div>
				</Link>
				<div className="small-device-menu-container">
					<div ref={toggleBtnRef}>
						<MdOutlineMenu
							onClick={toggleMenu}
							fontSize={50}
							className="text-gray-400 cursor-pointer"
						/>
					</div>
					{showMenu && (
						<div ref={menuRef} className="absolute-container">
							<Link href="/work">
								<p className="text-md text-gray-700 font-extrabold">
									What do I do ?
								</p>
							</Link>
							<hr className="border-b-1 border-gray-600 mt-2 mb-2" />
							<Link href="/projects">
								<p className="text-md text-gray-700 font-extrabold">
									Portfolio
								</p>
							</Link>
							<hr className="border-b-1 border-gray-600 mt-2 mb-2" />
							<Link href="/about">
								<p className="text-md text-gray-700 font-extrabold">About Me</p>
							</Link>
							<hr className="border-b-1 border-gray-600 mt-2 mb-2" />
							<Link href="/contact">
								<p className="text-md text-gray-700 font-extrabold">
									Contact Me
								</p>
							</Link>
						</div>
					)}
				</div>

				<div className="medium-device-menu-container">
					<Link href="/work">
						<p className="animate-moveUpDown1 gradient-links">What do I do ?</p>
					</Link>

					<Link href="/projects">
						<p className="animate-moveUpDown2 gradient-links">Portfolio</p>
					</Link>

					<Link href="/about">
						<p className="animate-moveUpDown3 gradient-links">About Me</p>
					</Link>

					<Link href="/contact">
						<p className="animate-moveUpDown4 gradient-links">Contact Me</p>
					</Link>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Navbar;
