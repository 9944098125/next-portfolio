"use client";

import React from "react";

export default function useClickOutside(
	ref: React.RefObject<any>,
	toggleButtonRef: React.RefObject<any>,
	func: Function
) {
	React.useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				ref.current &&
				!ref.current.contains(event.target as Node) &&
				toggleButtonRef.current &&
				!toggleButtonRef.current.contains(event.target as Node)
			) {
				func();
			}
		};

		document.addEventListener("mousedown", handleClickOutside);

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [ref, toggleButtonRef, func]);
}
