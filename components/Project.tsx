"use client";

import { projectsData } from "@/lib/data";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
	title,
	type,
	description,
	tags,
	imageUrl,
	orientation,
}: ProjectProps) {
	const ref = useRef<HTMLDivElement>(null);

	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["0 1", "1.33 1"],
	});

	const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
	const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

	return (
		<motion.div
			className="group sm:pr-8 mb-3 sm:mb-8 last:mb-0"
			style={{
				scale: scaleProgess,
				opacity: opacityProgess,
			}}
		>
			<section
				ref={ref}
				className="relative bg-gray-100 max-w-[42rem] border border-black/5 overflow-hidden  hover:bg-gray-200 transition"
			>
				<div className="py-4 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] sm:h-[23rem] flex flex-col group-even:ml-[22rem]">
					<h3 className="text-2xl font-semibold">{title}</h3>
					<p className="font-light text-gray-400 mt-1 mb-2">{type}</p>
					<p className="mt-2 leading-relaxed text-gray-700">{description}</p>
					<ul className="flex flex-wrap mb-4 gap-2 mt-auto">
						{tags.map((tag, index) => (
							<li
								className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full"
								key={index}
							>
								{tag}
							</li>
						))}
					</ul>
				</div>

				<Image
					src={imageUrl}
					alt={title}
					quality={95}
					className={` shadow-2xl ${
						orientation === "horizontal"
							? "w-[30rem] top-1/2 -translate-y-1/2 left-96 group-even:-left-40  group-hover:scale-110 hover:-translate-x-1/2 group-even:hover:translate-x-1/2"
							: "w-[15rem] top-1/2 -translate-y-1/4 left-96 group-even:left-24 hover:scale-[0.6] hover:-translate-y-1/2"
					}  rounded-t-lg rounded-md absolute group-even:right-[initial] transition`}
				/>
			</section>
		</motion.div>
	);
}
