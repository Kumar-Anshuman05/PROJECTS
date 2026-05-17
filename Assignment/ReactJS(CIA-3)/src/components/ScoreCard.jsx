import React from 'react';

const ScoreCard = ({ score, total }) => {
  const percentage = (score / total) * 100;
  
  let message = "";
  let colorClass = "";
  let bgColorClass = "";

  if (percentage >= 80) {
    message = "Excellent! Outstanding performance.";
    colorClass = "text-green-600";
    bgColorClass = "bg-green-50 border-green-200";
  } else if (percentage >= 50) {
    message = "Good job! But there's room for improvement.";
    colorClass = "text-yellow-600";
    bgColorClass = "bg-yellow-50 border-yellow-200";
  } else {
    message = "Try Again! Don't give up, keep practicing.";
    colorClass = "text-red-600";
    bgColorClass = "bg-red-50 border-red-200";
  }

  return (
    <div className={`p-8 rounded-2xl border-2 text-center max-w-lg mx-auto ${bgColorClass}`}>
      <div className="mb-4">
        <span className="text-sm uppercase tracking-wider font-semibold text-slate-500">Your Score</span>
      </div>
      <div className="flex items-baseline justify-center mb-6">
        <span className={`text-6xl font-extrabold ${colorClass}`}>{score}</span>
        <span className="text-2xl text-slate-400 font-medium ml-2">/ {total}</span>
      </div>
      <p className={`text-lg font-medium ${colorClass}`}>
        {message}
      </p>
    </div>
  );
};

export default ScoreCard;
