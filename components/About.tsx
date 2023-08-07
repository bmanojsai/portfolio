"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
	const { ref } = useSectionInView("About", 0.5);

	return (
		<motion.section
			ref={ref}
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.175 }}
			className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
			id="about"
		>
			<SectionHeading>About me</SectionHeading>
			<p className="mb-3">
				After graduating with a degree in{" "}
				<span className="font-medium">Engineering</span>, I decided to pursue my
				passion for programming. I joined various courses and learned{" "}
				<span className="font-medium">web development using django</span>. Later
				after joining Bounteus company, I leaned{" "}
				<span className="font-medium">
					web and mobile development using Javascript
				</span>
				.<span className="italic">My favorite part of programming</span> is the
				problem-solving aspect. I <span className="underline">love</span> the
				feeling of finally figuring out a solution to a problem. My core stack
				is{" "}
				<span className="font-medium">
					JavaScript, React, Next.js, React Native, Node.js and express
				</span>
				. I am also familiar with TypeScript. I am always looking to learn new
				technologies.
			</p>

			<p>
				<span className="italic">When I'm not coding</span>, I enjoy watching
				movies, playing some mobile games, doing GYM. I also enjoy{" "}
				<span className="font-medium">learning new things</span>.
			</p>
		</motion.section>
	);
}
