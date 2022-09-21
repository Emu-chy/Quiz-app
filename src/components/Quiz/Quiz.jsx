import React from "react";
import "./quiz.css"

const Quiz = () => {
  return (
    <div className="quiz">
      <div className="question"> What's the best youtube chennel?</div>
      
      <div className="answers">
        <div className="answer">Lama Dev</div>
        <div className="answer">Leart whith Sumit</div>
        <div className="answer">Programming Hero</div>
        <div className="answer">Stack Learner</div>
      </div>
    </div>
  );
};

export default Quiz;
