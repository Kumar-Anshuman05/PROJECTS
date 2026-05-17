import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ReviewCard from '../components/ReviewCard';
import questions from '../data/questions';

const Review = () => {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    const savedAnswers = localStorage.getItem('quiz_last_answers');
    if (savedAnswers) {
      setAnswers(JSON.parse(savedAnswers));
    }
  }, []);

  return (
    <div className="min-h-screen p-4 sm:p-8 flex flex-col items-center">
      <div className="w-full max-w-3xl mb-8 flex justify-between items-center bg-white p-4 sm:p-6 rounded-2xl shadow-sm border border-slate-100">
        <div>
          <h1 className="text-2xl font-bold text-slate-800 tracking-tight">Review Answers</h1>
          <p className="text-sm text-slate-500 font-medium mt-1">Here is how you performed.</p>
        </div>
        
        <button
          onClick={() => navigate('/')}
          className="px-6 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-lg transition-colors border border-slate-200"
        >
          Back to Home
        </button>
      </div>

      <div className="w-full max-w-3xl">
        {questions.map((q, index) => (
          <ReviewCard
            key={q.id}
            index={index}
            question={q.question}
            userAnswer={answers[index]}
            correctAnswer={q.answer}
          />
        ))}
      </div>
      
      <div className="my-8">
         <button
          onClick={() => navigate('/')}
          className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl shadow-md hover:shadow-lg transition-all"
        >
          Return to Home
        </button>
      </div>
    </div>
  );
};

export default Review;
