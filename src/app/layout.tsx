import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Layout from "@/components/LayoutWithSidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Alan Chat",
	description: "Application de messagerie instantanée",
};

export default function RootLayout({
									   children,
								   }: {
	children: React.ReactNode;
}) {
	return (
		<html lang="fr">
		<body className={inter.className}>
		<Layout>{children}</Layout>
		</body>
		</html>
	);
}