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
    <img className="avatar" src="cyber_developer.jpg" alt="avatar_image" />
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

function SkillList() {}

function Skill() {}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
