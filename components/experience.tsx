"use client";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SectionHeading from "./section-heading";
import { experiencesData } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience">
      <SectionHeading>my experience</SectionHeading>
      <VerticalTimeline>
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
            contentStyle={{
              background:"#f3f4f6",
              boxShadow:"none",
              border:"1px solid rgba(0, 0, 0, 0.05)",
              textAlign:"left",
              padding:"1.3rem 2rem"
            }}
            contentArrowStyle={{
              borderRight:"7px solid #f3f4f6",
            }}
            >
              <h3>{item.title}</h3>
              <h3>{item.location}</h3>
              <h3>{item.description}</h3>
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
