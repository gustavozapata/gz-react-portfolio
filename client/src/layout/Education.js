import React from "react";
import JobCard from '../components/JobCard'
import schools from '../data/schools.json'
import "./styles/Education.css";

export default function Education() {
  return (
    <div className="Education">
      <div className="page">
        <h1>Education</h1>
        <h3>All of my favorite projects</h3>
        <p>
          From my first Web Development book to a software engineering job in
          the heart of Silicon Valley, I have gained a wide range of
          <span> professional and technical skills.</span>
        </p>
        <main>
        {schools.map((school) => (
            <JobCard
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
