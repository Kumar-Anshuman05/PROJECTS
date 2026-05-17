import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [lastScore, setLastScore] = useState(null);

  useEffect(() => {
    const savedName = localStorage.getItem('quiz_username');
    const savedScore = localStorage.getItem('quiz_last_score');
    
    if (savedName) setName(savedName);
    if (savedScore) setLastScore(savedScore);
  }, []);

  const handleStart = (e) => {
    e.preventDefault();
    if (name.trim()) {
      localStorage.setItem('quiz_username', name.trim());
      navigate('/quiz');
    }
  };

  const handleClearHistory = () => {
    localStorage.removeItem('quiz_username');
    localStorage.removeItem('quiz_last_score');
    localStorage.removeItem('quiz_last_answers');
    setName('');
    setLastScore(null);
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl shadow-xl p-8 sm:p-12 w-full max-w-md text-center">
        <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 transform rotate-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white transform -rotate-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
        
        <h1 className="text-4xl font-extrabold text-slate-800 mb-2">React Quiz</h1>
        <p className="text-slate-500 mb-8 font-medium">Test your ReactJS knowledge</p>

        {lastScore && (
          <div className="bg-blue-50 border border-blue-100 text-blue-800 px-4 py-3 rounded-xl mb-6 flex justify-between items-center">
            <span className="font-semibold">Your Last Score:</span>
            <span className="font-bold text-lg bg-white px-3 py-1 rounded-lg text-blue-600 shadow-sm">{lastScore}/10</span>
          </div>
        )}

        <form onSubmit={handleStart} className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Enter your name to begin"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-colors text-slate-700 font-medium placeholder-slate-400"
              required
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-all duration-200 transform hover:-translate-y-1 hover:shadow-lg focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Start Quiz
          </button>
        </form>

        {(name || lastScore) && (
          <button
            onClick={handleClearHistory}
            className="mt-6 text-sm text-slate-400 hover:text-red-500 font-medium transition-colors underline-offset-4 hover:underline"
          >
            Clear History
          </button>
        )}
      </div>
    </div>
  );
};

export default Home;
