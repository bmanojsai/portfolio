"use client";

import {
	ActiveSectionContextProviderProps,
	ActiveSectionContextType,
	SectionName,
} from "@/lib/types";
import React, { useState, createContext, useContext } from "react";

export const ActiveSectionContext =
	createContext<ActiveSectionContextType | null>(null);

export default function ActiveSectionContextProvider({
	children,
}: ActiveSectionContextProviderProps) {
	const [activeSection, setActiveSection] = useState<SectionName>("Home");
	const [timeOfLastClick, setTimeOfLastClick] = useState<number>(0);
	return (
		<ActiveSectionContext.Provider
			value={{
				activeSection,
				setActiveSection,
				timeOfLastClick,
				setTimeOfLastClick,
			}}
		>
			{children}
		</ActiveSectionContext.Provider>
	);
}

export function useActiveSectionContext() {
	const contextObj = useContext(ActiveSectionContext);

	if (contextObj === null) {
		throw new Error(
			"useActiveSectionContext must be used within ActiveSectionContextProvider!"
		);
	}

	return contextObj;
}
