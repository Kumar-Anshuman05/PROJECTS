import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import ScoreCard from '../components/ScoreCard';
import questions from '../data/questions';

const Result = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [score, setScore] = useState(0);
  const [name, setName] = useState('');

  useEffect(() => {
    const savedName = localStorage.getItem('quiz_username') || 'Guest';
    setName(savedName);

    // Read score from router state if available, else from localStorage as fallback
    let finalScore = location.state?.score;
    if (finalScore === undefined) {
      finalScore = parseInt(localStorage.getItem('quiz_last_score') || '0', 10);
    }
    setScore(finalScore);
  }, [location.state]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-12 w-full max-w-2xl text-center border border-slate-100">
        
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-800 mb-2">
          Well done, <span className="text-blue-600">{name}</span>!
        </h1>
        <p className="text-slate-500 mb-10 font-medium">You have completed the React Quiz.</p>

        <ScoreCard score={score} total={questions.length} />

        <div className="mt-10 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <button
            onClick={() => navigate('/quiz')}
            className="px-8 py-4 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl transition-all duration-200 flex-1 border border-slate-200"
          >
            Retry Quiz
          </button>
          
          <button
            onClick={() => navigate('/review')}
            className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all duration-200 flex-1 shadow-md hover:shadow-lg"
          >
            Review Answers
          </button>
        </div>
      </div>
    </div>
  );
};

export default Result;
