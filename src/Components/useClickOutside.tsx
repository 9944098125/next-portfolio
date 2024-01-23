"use client";

import React from "react";

export default function useClickOutside(ref: any, func: Function) {
	const listener = (event: any) => {
		if (!ref.current || ref.current.contains(event.target)) {
			return;
		}
		func();
	};

	React.useEffect(() => {
		document.addEventListener("mousedown", listener);
		document.addEventListener("touchstart", listener);
		return () => {
			document.removeEventListener("mousedown", listener);
			document.removeEventListener("touchstart", listener);
		};
	}, []);
}
