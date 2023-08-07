import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import ftd_blogs from "@/public/ftd_blogs.png";
import pokemon from "@/public/pokemon.png";
import aiChat from "@/public/aiChat.png";
import Customization_3D_tool from "@/public/Customization_3D_tool.png";

export const links = [
    {
        name: "Home",
        hash: "#home",
    },
    {
        name: "About",
        hash: "#about",
    },
    {
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    {
        name: "Experience",
        hash: "#experience",
    },
    // {
    //     name: "Contact",
    //     hash: "#contact",
    // },
] as const;

export const experiencesData = [
    {
        title: "Graduatation",
        location: "SASTRA University",
        description:
            "I graduated from SASTRA as an ECE Engineer. My Passion towards Web Development got me a software job through campus placement.",
        icon: React.createElement(LuGraduationCap),
        date: "2022",
    },
    {
        title: "Internship",
        location: "Lister Technologies, Chennai",
        description:
            "I joined lister as an intern in my final semister. I learnt more about Web Development during that.",
        icon: React.createElement(CgWorkAlt),
        date: "2022",
    },
    {
        title: "JavaScript Developer",
        location: "Bounteous, Chennai",
        description:
            "I'm now a full-stack Javascript developer working in Bounteous. My stack includes React, React Native, Next.js, TypeScript, Tailwind, Nodejs, Expressjs and many more.",
        icon: React.createElement(CgWorkAlt),
        date: "2022 - present",
    },
] as const;

export const projectsData = [
    {
        title: "FTD Blogs",
        type: "company",
        orientation: "horizontal",
        description:
            "I worked as a frontend developer on this project for 3 months. Its basically a blog website for a company named FTD | Proflowers.",
        tags: ["React", "Next.js", "Contentful CMS"],
        imageUrl: ftd_blogs,
    },
    {
        title: "Pokemon",
        type: "personal",
        orientation: "vertical",
        description:
            "A mobile app to know about Pokemons. I developed the entire app just to test my knowledge on React Native. It has features like debounce search, pagination.",
        tags: ["React Native", "TypeScript", "Redux"],
        imageUrl: pokemon,
    },
    {
        title: "aiChat",
        type: "personal",
        orientation: "horizontal",
        description:
            "A Clone to ChatGPT using the same GPT engine from openai.",
        tags: ["React", "Next.js", "Tailwind"],
        imageUrl: aiChat,
    },
    {
        title: "3D Customization tool",
        type: "personal",
        orientation: "horizontal",
        description:
            "A 3D t-shirt customization tool that allows you to use custom logos on t-shirt as well to change the entire t-shirt texture.",
        tags: ["React", "Tailwind", "framer-motion", "threejs"],
        imageUrl: Customization_3D_tool,
    }
] as const;

export const skillsData = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "Tailwind",
    "Framer Motion",

    "React",
    "Next.js",
    "React Native",

    "Node.js",
    "Express",
    "GraphQL",

    "Redux",
    "Git",
    "MongoDB",
    "PostgreSQL",

] as const;