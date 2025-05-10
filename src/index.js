import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";

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
        Sean is a cybersecurity expert that specializes in the areas of cloud
        security, application security and monitoring of database management
        systems. His hobbies include fishing, football and camping. He speaks
        fluently Spanish and French langauges.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="Crytography" emoji="💪" color="#add8e6" />
      <Skill
        skill="Authentication and Authorization"
        emoji="💪"
        color="#80ef80"
      />
      <Skill skill="AI and Machine Learning" emoji="👶" color="yellow" />
      <Skill skill="Advanced Endpoint Protection" emoji="💪" color="#fffdd0" />
    </div>
  );
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
