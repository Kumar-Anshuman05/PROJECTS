import React, { useState, useEffect, useRef } from 'react';

const Timer = ({ initialSeconds = 15, onTimeout, questionIndex }) => {
  const [seconds, setSeconds] = useState(initialSeconds);
  const timerRef = useRef(null);

  useEffect(() => {
    // Reset timer when question changes
    setSeconds(initialSeconds);
    
    // Clear existing interval if any
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }

    timerRef.current = setInterval(() => {
      setSeconds((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          onTimeout();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    // Cleanup on unmount
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [questionIndex, initialSeconds, onTimeout]);

  const isWarning = seconds < 5;

  return (
    <div className="flex items-center justify-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm border border-slate-100">
      <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 ${isWarning ? 'text-red-500 animate-pulse' : 'text-slate-500'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <span className={`text-lg font-bold ${isWarning ? 'text-red-500 animate-pulse' : 'text-slate-700'}`}>
        00:{seconds.toString().padStart(2, '0')}
      </span>
    </div>
  );
};

export default Timer;
