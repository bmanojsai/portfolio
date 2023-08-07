import { useInView } from "react-intersection-observer";
import React, { useEffect } from "react";
import { useActiveSectionContext } from "@/context/ActiveSectionContext";
import { SectionName } from "./types";


export function useSectionInView(SectionName: SectionName, threshold = 0.75) {
    const { ref, inView } = useInView({
        threshold: threshold,
    });

    const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

    useEffect(() => {
        if (inView && Date.now() - timeOfLastClick > 1000) setActiveSection(SectionName);
    }, [inView, setActiveSection, timeOfLastClick, SectionName]);

    return {
        ref
    }
}