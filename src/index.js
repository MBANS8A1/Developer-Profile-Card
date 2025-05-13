import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
  {
    skill: "Cryptography",
    level: "intermediate",
    color: "#add8e6",
  },
  {
    skill: "Authentication and Authorization",
    level: "beginner",
    color: "#80ef80",
  },
  {
    skill: "AI and Machine Learning",
    level: "advanced",
    color: "#FFFF00",
  },
  {
    skill: "Advanced Endpoint Protection",
    level: "advanced",
    color: "#fffdd0",
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
  return <div className="skill-list">{skills.map((skill)=>)}</div>;
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
