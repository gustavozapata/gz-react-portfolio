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
        <h1 style={styling.title}>{content.EDUCATION_TITLE}</h1>
        <h3 style={styling.subtitle}>All of my favorite projects</h3>
        <p>
          From my first Web Development book to a software engineering job in
          the heart of Silicon Valley, I have gained a wide range of
          <span> professional and technical skills.</span>
        </p>
        <main>
          {schools.map((school) => (
            <JobCard
              key={school.id}
              company={school.institution}
              role={school.course}
              period={school.period}
              image={school.image}
              description={school.description}
            />
          ))}
        </main>
      </div>
    </div>
  );
}
