import React from "react";

function Skill({skill}) {
  return (
    <>
      <p>{skill.name}</p>
      <div className="w3-grey">
        <div
          className="w3-container w3-dark-grey w3-padding w3-center"
          style={{ width: `${skill?.rate}%` }}
        >
          {skill?.rate}%
        </div>
      </div>
    </>
  );
}

export default Skill;
