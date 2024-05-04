import React from "react";
import "./CircularProgressBar.css";

const CircularProgressBar = ({ percentage }) => {
  const radius = 40;
  const circumference = 2 * Math.PI * radius;
  const progressOffset = ((100 - percentage) / 100) * circumference;

  return (
    <svg className="progress-ring" width="120" height="120">
      <circle
        className="progress-ring-circle"
        strokeWidth="10"
        fill="transparent"
        r={radius}
        cx="60"
        cy="60"
      />
      <circle
        className="progress-ring-progress"
        strokeWidth="10"
        fill="transparent"
        r={radius}
        cx="60"
        cy="60"
        strokeDasharray={circumference}
        strokeDashoffset={progressOffset}
      />
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        className="progress-text"
      >
        {percentage}%
      </text>
    </svg>
  );
};

export default CircularProgressBar;
