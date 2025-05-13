import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    colour: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    colour: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    colour: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    colour: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    colour: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    colour: "#FF3B00",
  },
  {
    skill: "Cryptography",
    level: "intermediate",
    colour: "#ADD8E6",
  },
  {
    skill: "Authentication and Authorization",
    level: "beginner",
    colour: "#80ef80",
  },
  {
    skill: "AI and Machine Learning",
    level: "advanced",
    colour: "#FFFF00",
  },
  {
    skill: "Advanced Endpoint Protection",
    level: "advanced",
    colour: "#fffdd0",
  },
];
function App() {
  return (
    <div className="card">
      <Avatar avatarImage />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <figure>
      <img className="avatar" src="cyber_developer.jpg" alt="avatar_image" />
      <figcaption>Designed by Freepik</figcaption>
    </figure>
  );
}

function Intro() {
  return (
    <div>
      <h1>Sean Naples</h1>
      <p>
        Sean is a cybersecurity and app developement expert that specializes in
        the areas of cloud security, application security and monitoring of
        database management systems in regards to cybersecurity. He also has
        knowledge in frontend and backend technologies. His hobbies include
        fishing, football and camping. He speaks fluently Spanish and French
        langauges.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skill={skill.skill} colour={skill.colour} level={skill.level} />
      ))}
    </div>
  );
}

function Skill({ skill, colour, level }) {
  return (
    <div className="skill" style={{ backgroundColor: colour }}>
      <span>{skill}</span>
      <span>
        {level === "beginner" && "👶"}
        {level === "intermediate" && "👍"}
        {level === "advanced" && "💪"}
      </span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
