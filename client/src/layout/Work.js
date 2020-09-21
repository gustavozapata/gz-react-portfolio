import React, { useState, useEffect } from "react";
import JobCard from "../components/JobCard";
import "./styles/Work.css";

export default function Work() {
  const [data, setData] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const res = await fetch("http://192.168.1.29:4000/api/v1/assets");
    const json = await res.json();
    setData(json.data[0].name);
  };

  return (
    <div className="Work">
      <div className="page">
        <h1>Work</h1>
        <h3>All of my favorite projects</h3>
        <p>
          From my first Web Development book to a software engineering job in
          the heart of Silicon Valley, I have gained a wide range of
          <span> professional and technical skills.</span>
        </p>
        <main>
          <JobCard
            company="Cisco"
            role="Software Engineer"
            image={"cisco.jpg"}
          />
          <JobCard
            company="Sunny Eco"
            role="Fullstack Developer"
            image={"sunny.png"}
          />
          <JobCard company="SHL" role="Web Developer" image={"shl.png"} />
          <JobCard
            company="Real Media Now"
            role="Web Designer and Web Developer"
            image={"realmedia.jpg"}
          />
        </main>
      </div>
    </div>
  );
}
