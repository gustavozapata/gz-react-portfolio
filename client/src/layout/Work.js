import React, { useContext } from "react";
import JobCard from "../components/JobCard";
import GZContext from "../context/GZContext";
import jobs from "../data/jobs.json";
import "./styles/Work.css";

export default function Work() {
  const { styling } = useContext(GZContext);

  return (
    <div className="Work">
      <div className="page">
        <h1 style={styling.title}>Work</h1>
        <h3 style={styling.subtitle}>All of my favorite projects</h3>
        <p>
          From my first Web Development book to a software engineering job in
          the heart of Silicon Valley, I have gained a wide range of
          <span> professional and technical skills.</span>
        </p>
        <main>
          {jobs.map((job) => (
            <JobCard
              key={job.id}
              company={job.company}
              period={job.period}
              role={job.role}
              image={job.image}
              description={job.description}
            />
          ))}
        </main>
      </div>
    </div>
  );
}
