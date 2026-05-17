import React from 'react';

const ReviewCard = ({ index, question, userAnswer, correctAnswer }) => {
  const isCorrect = userAnswer === correctAnswer;
  const isSkipped = !userAnswer;

  let borderColor = "border-slate-200";
  let bgColor = "bg-white";

  if (isCorrect) {
    borderColor = "border-green-400";
    bgColor = "bg-green-50";
  } else if (!isSkipped) {
    borderColor = "border-red-400";
    bgColor = "bg-red-50";
  }

  return (
    <div className={`p-6 rounded-xl border-2 mb-4 ${borderColor} ${bgColor}`}>
      <div className="flex items-start mb-4">
        <span className="bg-slate-800 text-white font-bold rounded-md w-8 h-8 flex items-center justify-center mr-3 shrink-0">
          {index + 1}
        </span>
        <h3 className="text-lg font-semibold text-slate-800 mt-1">{question}</h3>
      </div>
      
      <div className="ml-11 space-y-2">
        {isSkipped ? (
          <p className="text-slate-500 font-medium">You skipped this question.</p>
        ) : (
          <div className="flex items-center space-x-2">
            <span className="font-semibold text-slate-600 w-24">Your Answer:</span>
            <span className={`font-medium ${isCorrect ? 'text-green-700' : 'text-red-700 line-through'}`}>
              {userAnswer}
            </span>
          </div>
        )}

        {!isCorrect && (
          <div className="flex items-center space-x-2">
            <span className="font-semibold text-slate-600 w-24">Correct:</span>
            <span className="font-bold text-green-700">
              {correctAnswer}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReviewCard;
