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
        <h1 style={styling.morado}>Work</h1>
        <h3 style={styling.gris}>My most recent professional experience</h3>
        <main>
          {jobs.map((job) => (
            <JobCard
              key={job.id}
              company={job.company}
              period={job.period}
              role={job.role}
              image={job.image}
              description={job.description}
              // modules={job.modules}
            />
          ))}
        </main>
      </div>
    </div>
  );
}
