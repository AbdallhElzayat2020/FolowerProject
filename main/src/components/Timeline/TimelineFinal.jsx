import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./TimeLine.css";
const TimelineFinal = () => {
  return (
    <>
      <section className="experience  timeline">
        <h4 className="text-center mb-5">What I Have Done</h4>
        <VerticalTimeline lineColor="#fff">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2023 - SEP"
            iconStyle={{
              background: "#0d9965",
              color: "#fff",
              width: "45px",
              display: "flex",
              height: "45px",
            }}
            icon={
              // <AiOutlineCheck />
              <i className="fa-solid fa-check fs-3 icon text-center  d-flex align-items-center justify-content-center"></i>
            }
          >
            <h3 className="vertical-timeline-element-title">First Target</h3>
            <p>1000 Users and 10,000 EX-Change</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2023 - OCT"
            iconStyle={{
              background: "#fff",
              color: "#000",
              width: "45px",
              display: "flex",
              height: "45px",
            }}
            icon={
              // <AiOutlineCheck />
              <i className="fa-solid fa-hourglass-start fs-3 icon text-center d-flex align-items-center justify-content-center"></i>
            }
          >
            <h3 className="vertical-timeline-element-title">First Target</h3>
            <p>10,000 Users and 100,000 EX-Change</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="February - 2023"
            iconStyle={{
              background: "#fff",
              color: "#000",
              width: "45px",
              display: "flex",
              height: "45px",
            }}
            icon={
              <i className="fa-solid fa-hourglass-start fs-3 icon text-center d-flex align-items-center justify-content-center"></i>
            }
          >
            <h3 className="vertical-timeline-element-title">First Target</h3>
            <p>50,000 Users and 1M EX-Change</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="February - 2023"
            iconStyle={{
              background: "#fff",
              color: "#000",
              width: "45px",
              display: "flex",
              height: "45px",
            }}
            icon={
              <i className="fa-solid fa-hourglass-start fs-3 icon text-center d-flex align-items-center justify-content-center"></i>
            }
          >
            <h3 className="vertical-timeline-element-title">First Target</h3>
            <p>100,000 Users and 5M EX-Change</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </section>
    </>
  );
};

export default TimelineFinal;
