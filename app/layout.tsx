//from packages
import { Inter } from "next/font/google";

//from custom files
import Header from "@/components/Header";
import "./globals.css";
import ActiveSectionContextProvider from "@/context/ActiveSectionContext";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Manoj Sai | Personal Portfolio",
	description: "Manoj is a JS Developer with 1 year experience",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" className="!scroll-smooth">
			<body
				className={`${inter.className} bg-slate-100 text-gray-950 overflow-x-hidden relativ pt-28 sm:pt-36`}
			>
				<div className="bg-sky-600 absolute top-[-10rem] left-[-10rem] h-[32rem] w-[32rem] rounded-full  blur-[10rem] -z-10"></div>
				<div className="bg-sky-100 absolute top-[10rem] right-[-10rem] h-[32rem] w-[32rem] rounded-full  blur-[10rem] -z-10"></div>
				{/* <div className="bg-sky-600 absolute top-[50rem] right-[-10rem] h-[32rem] w-[32rem] rounded-full  blur-[30rem] -z-10" ></div>
				<div className="bg-sky-600 absolute top-[90rem] left-[-10rem] h-[32rem] w-[32rem] rounded-full  blur-[30rem] -z-10" ></div>
				<div className="bg-sky-600 absolute top-[130rem] right-[-10rem] h-[32rem] w-[32rem] rounded-full  blur-[30rem] -z-10" ></div>
				<div className="bg-sky-600 absolute top-[170rem] left-[-10rem] h-[32rem] w-[32rem] rounded-full  blur-[30rem] -z-10" ></div> */}
				<ActiveSectionContextProvider>
					<Header />
					{children}
					<Footer />
				</ActiveSectionContextProvider>
			</body>
		</html>
	);
}
