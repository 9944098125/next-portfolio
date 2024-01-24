"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdOutlineMenu } from "react-icons/md";

import "./styles.css";
import useClickOutside from "./useClickOutside";

const Navbar = () => {
	const [showMenu, setShowMenu] = React.useState(false);
	const menuRef = React.useRef(null);
	useClickOutside(menuRef, () => setShowMenu(false));

	return (
		<React.Fragment>
			<div className="flex justify-between items-center gradient-bg border-b-2 border-green-400">
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
				<div className="md:hidden px-5">
					<MdOutlineMenu
						onClick={() => setShowMenu(!showMenu)}
						fontSize={50}
						className="text-gray-400 cursor-pointer"
					/>
					{showMenu && (
						<div
							ref={menuRef}
							className="absolute z-10 right-10 top-50 bg-white py-2 px-4 rounded-md shadow-md">
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

				<div className="hidden md:flex items-center space-x-4 px-5">
					<Link href="/work">
						<p className="animate-moveUpDown1 bg-gradient-to-l from-blue-800 via-green-500 to-blue-300 lg:text-md text-white font-extrabold md:w-[150px] p-2 rounded-md">
							What do I do ?
						</p>
					</Link>

					<Link href="/projects">
						<p className="animate-moveUpDown2 bg-gradient-to-r from-red-800 via-pink-400 to-red-400 lg:text-md text-white font-extrabold md:w-[150px] p-2 rounded-md">
							Portfolio
						</p>
					</Link>

					<Link href="/about">
						<p className="animate-moveUpDown3 bg-gradient-to-l from-orange-900 via-yellow-600 to-green-800 lg:text-md text-white font-extrabold md:w-[150px] p-2 rounded-md">
							About Me
						</p>
					</Link>

					<Link href="/contact">
						<p className="animate-moveUpDown4 bg-gradient-to-r from-green-400 via-yellow-400 to-red-600 lg:text-md text-white font-extrabold md:w-[150px] p-2 rounded-md">
							Contact Me
						</p>
					</Link>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Navbar;
