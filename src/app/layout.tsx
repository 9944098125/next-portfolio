import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Layout from "@/Components/Layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Portfolio Website",
	description: "ASP Portfolio Website",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<link href="/logo.png" rel="icon" />
			</head>
			<body className={inter.className}>
				<Layout>{children}</Layout>
			</body>
		</html>
	);
}
