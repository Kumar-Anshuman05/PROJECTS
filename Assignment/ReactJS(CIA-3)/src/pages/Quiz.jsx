import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import questions from '../data/questions';
import QuestionCard from '../components/QuestionCard';
import Timer from '../components/Timer';
import ProgressBar from '../components/ProgressBar';

const Quiz = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState(Array(questions.length).fill(null));
  const [score, setScore] = useState(0);

  // Read username on mount, if not present we could redirect, but let's just proceed for simplicity
  useEffect(() => {
    const name = localStorage.getItem('quiz_username');
    if (!name) {
      navigate('/');
    }
  }, [navigate]);

  const handleSelectOption = (option) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentIndex] = option;
    setSelectedAnswers(newAnswers);
  };

  const handleNext = () => {
    // Calculate score for the current question
    const currentQuestion = questions[currentIndex];
    const userAnswer = selectedAnswers[currentIndex];
    
    let currentScore = score;
    if (userAnswer === currentQuestion.answer) {
      currentScore += 1;
      setScore(currentScore);
    }

    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      finishQuiz(currentScore);
    }
  };

  const handleTimeout = () => {
    handleNext(); // auto advance on timeout
  };

  const finishQuiz = (finalScore) => {
    localStorage.setItem('quiz_last_score', finalScore);
    localStorage.setItem('quiz_last_answers', JSON.stringify(selectedAnswers));
    navigate('/result', { state: { score: finalScore } });
  };

  if (currentIndex >= questions.length) return null;

  return (
    <div className="min-h-screen p-4 sm:p-8 flex flex-col items-center">
      <div className="w-full max-w-4xl flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-slate-800 tracking-tight">React Quiz</h1>
        <Timer 
          initialSeconds={15} 
          onTimeout={handleTimeout} 
          questionIndex={currentIndex} 
        />
      </div>

      <ProgressBar current={currentIndex} total={questions.length} />

      <div className="w-full flex-grow flex flex-col items-center justify-center">
        <QuestionCard 
          question={questions[currentIndex].question}
          options={questions[currentIndex].options}
          selectedOption={selectedAnswers[currentIndex]}
          onSelectOption={handleSelectOption}
        />

        <div className="mt-8 w-full max-w-2xl flex justify-end">
          <button
            onClick={handleNext}
            className={`px-8 py-3 rounded-xl font-bold text-white transition-all shadow-md transform hover:-translate-y-0.5
              ${selectedAnswers[currentIndex] 
                ? 'bg-blue-600 hover:bg-blue-700 hover:shadow-lg' 
                : 'bg-slate-400 hover:bg-slate-500 hover:shadow-md'
              }`}
          >
            {currentIndex === questions.length - 1 ? 'Finish Quiz' : 'Next Question'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
