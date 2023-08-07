"use client";

import Image from "next/image";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useActiveSectionContext } from "@/context/ActiveSectionContext";
import { useInView } from "react-intersection-observer";
import { useSectionInView } from "@/lib/hooks";

export default function Intro() {
	const { ref } = useSectionInView("Home", 0.5);

	return (
		<section
			ref={ref}
			className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
			id="home"
		>
			<div className="flex items-center justify-center">
				<div className="relative">
					<motion.div
						initial={{ opacity: 0, scale: 0 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ type: "tween", duration: 0.2, delay: 0.1 }}
					>
						<Image
							src={"/profile-pic.png"}
							alt="profile pic of Manoj"
							width={192}
							height={192}
							quality={95}
							priority
							className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
						/>
					</motion.div>

					<motion.span
						className="text-4xl absolute bottom-0 right-0"
						initial={{ opacity: 0, scale: 0 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{
							type: "spring",
							stiffness: 125,
							delay: 0.1,
							duration: 0.7,
						}}
					>
						👋
					</motion.span>
				</div>
			</div>

			<motion.p
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 1, y: 0 }}
				className="mb-10 mt-4 px-4 font-medium text-2xl !leading-[1.5] sm:text-4xl"
			>
				<span className="font-bold">Hello, I'm Manoj</span>. I'm a{" "}
				<span className="font-bold">Javascript developer</span> with{" "}
				<span className="font-bold"></span>1 year of experience. I enjoy
				developing{" "}
				<span className="italic">fully functional websites and apps</span>. My
				primary focus is
				<span className="underline">React, React Native.</span>
			</motion.p>

			<motion.div
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.1 }}
				className="flex flex-col sm:flex-row gap-2 px-4  text-lg font-medium items-center justify-center"
			>
				<Link
					href={"#contact"}
					className=" group bg-gray-900 text-white px-7 py-3 flex items-center justify-center gap-2 rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15] hover:bg-gray-950 active:scale-105 transition-all"
				>
					Contact me here{" "}
					<BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
				</Link>
				<a
					className="group bg-white text-gray-900 px-7 py-3 flex items-center justify-center gap-2 rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition-all cursor-pointer border border-black/10"
					href="/profile-pic.png"
					download
				>
					Download CV{" "}
					<HiDownload className="opacity-65 group-hover:translate-y-1 transition" />
				</a>
				<a
					className="bg-white text-gray-700 p-4 flex items-center justify-center gap-2 rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition-all cursor-pointer border border-black/10 hover:text-gray-950"
					href="https://linkedin.com"
					target="_blank"
				>
					<BsLinkedin />
				</a>
				<a
					className="bg-white text-gray-700 p-4 flex items-center justify-center gap-2 rounded-full text-[1.35rem] outline-none focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition-all cursor-pointer border border-black/10 hover:text-gray-950"
					href="https://github.com"
					target="_blank"
				>
					<FaGithubSquare />
				</a>
			</motion.div>
		</section>
	);
}
