import React from 'react';

const QuestionCard = ({ question, options, selectedOption, onSelectOption }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8 w-full max-w-2xl mx-auto transition-all duration-300">
      <h2 className="text-xl sm:text-2xl font-bold text-slate-800 mb-6 leading-relaxed">
        {question}
      </h2>
      <div className="space-y-3">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => onSelectOption(option)}
            className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-200 text-lg sm:text-base font-medium
              ${
                selectedOption === option
                  ? 'border-blue-500 bg-blue-500 text-white shadow-md transform scale-[1.01]'
                  : 'border-slate-200 bg-white text-slate-700 hover:border-blue-300 hover:bg-slate-50'
              }
            `}
          >
            <span className={`inline-block w-8 h-8 rounded-full text-center leading-7 mr-3 text-sm
              ${selectedOption === option ? 'bg-white/20' : 'bg-slate-100 text-slate-500'}`}>
              {String.fromCharCode(65 + index)}
            </span>
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
