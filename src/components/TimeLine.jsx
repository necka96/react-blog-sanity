import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { ReactComponent as SchoolIcon } from "../assets/school.svg";
import { ReactComponent as WorkIcon } from "../assets/work.svg";
import timelineElements from "../timeline.js";

function TimeLine() {
  let workIconStyles = { background: "#06d6a0" };
  let schoolIconStyles = { background: "#f9c74f" };
  return (
    <div className='pb-5'>
      <VerticalTimeline>
        {timelineElements.map((element) => {
          let isWorkIcon = element.icon === "work";
          let showButton =
            element.buttonText !== undefined &&
            element.buttonText !== null &&
            element.buttonText !== "";

          return (
            <VerticalTimelineElement
              key={element.key}
              date={element.date}
              dateClassName='date'
              iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
              icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
            >
              <h3 className='vertical-timeline-element-title'>
                {element.title}
              </h3>
              <h5 className='vertical-timeline-element-subtitle'>
                {element.location}
              </h5>
              <p id='description'>{element.description}</p>
              {showButton && (
                <a
                  className={`button ${
                    isWorkIcon ? "workButton" : "schoolButton"
                  }`}
                  href={element.buttonLink}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {element.buttonText}
                </a>
              )}
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
}

export default TimeLine;
