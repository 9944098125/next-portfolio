"use client";

import React from "react";

export default function useClickOutside(ref: any, func: Function) {
	React.useEffect(() => {
		const listener = (event: any) => {
			if (!ref.current || ref.current.contains(event.target)) {
				return;
			}
			func(event);
		};

		if (typeof window !== "undefined") {
			// Add event listeners only in the client-side environment
			document.addEventListener("mousedown", listener);
			document.addEventListener("touchstart", listener);

			return () => {
				document.removeEventListener("mousedown", listener);
				document.removeEventListener("touchstart", listener);
			};
		}
	}, [ref, func]);
}
