"use client";

import React from "react";
import Navbar from "./Navbar";

const Layout = ({ children }: any) => {
	return (
		<React.Fragment>
			<Navbar />
			<div className="outlet">{children}</div>
		</React.Fragment>
	);
};

export default Layout;
