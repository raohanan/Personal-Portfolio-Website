import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";
import { SectionName } from "./types";

export default function useSectionInView(
  sectionName: SectionName,
  threshold = 0.75
) {
  const { ref, inView } = useInView({
    threshold,
  });
  const { setactiveState, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setactiveState(sectionName);
    }
  }, [inView, setactiveState, timeOfLastClick, sectionName]);

  return {
    ref,
  };
}
