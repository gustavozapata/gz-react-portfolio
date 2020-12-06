import React, { useContext } from "react";
import JobCard from "../components/JobCard";
import schools from "../data/schools.json";
import GZContext from "../context/GZContext";
import "./styles/Education.css";

export default function Education() {
  const { content, styling } = useContext(GZContext);

  return (
    <div className="Education">
      <div className="page">
        <h1 style={styling.morado}>{content.EDUCATION_TITLE}</h1>
        <h3 style={styling.gris}>College and University Education</h3>
        {/* <p style={styling.gris}>
          I gained technical as well as professional skills during these 5 years
          in education
          <span> professional and technical skills.</span>
        </p> */}
        <main>
          {schools.map((school) => (
            <JobCard
              key={school.id}
              company={school.institution}
              role={school.course}
              period={school.period}
              image={school.image}
              // description={school.description}
              modules={school.modules}
            />
          ))}
        </main>
      </div>
    </div>
  );
}
