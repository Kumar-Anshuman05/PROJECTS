const questions = [
  {
    id: 1,
    question: "What is React?",
    options: [
      "A JavaScript framework for building user interfaces",
      "A JavaScript library for building user interfaces",
      "A backend framework for Node.js",
      "A database management system"
    ],
    answer: "A JavaScript library for building user interfaces"
  },
  {
    id: 2,
    question: "Which hook is used to manage state in a functional component?",
    options: ["useEffect", "useContext", "useState", "useReducer"],
    answer: "useState"
  },
  {
    id: 3,
    question: "What does DOM stand for?",
    options: [
      "Document Object Model",
      "Data Object Model",
      "Document Oriented Model",
      "Dynamic Object Model"
    ],
    answer: "Document Object Model"
  },
  {
    id: 4,
    question: "In React, what is used to pass data to a component from outside?",
    options: ["setState", "render with arguments", "PropTypes", "props"],
    answer: "props"
  },
  {
    id: 5,
    question: "Which method in a React Class component is called after the component is rendered for the first time?",
    options: [
      "componentDidUpdate",
      "componentDidMount",
      "componentWillMount",
      "useEffect"
    ],
    answer: "componentDidMount"
  },
  {
    id: 6,
    question: "How do you conditionally render a component in React?",
    options: [
      "Using the if statement inside JSX",
      "Using the switch statement inside JSX",
      "Using the ternary operator or logical &&",
      "Using the map function"
    ],
    answer: "Using the ternary operator or logical &&"
  },
  {
    id: 7,
    question: "What is a React Fragment used for?",
    options: [
      "To render multiple elements without adding an extra node to the DOM",
      "To create a separate memory space for variables",
      "To split the app into smaller chunks",
      "To style components dynamically"
    ],
    answer: "To render multiple elements without adding an extra node to the DOM"
  },
  {
    id: 8,
    question: "What does Vite do in a React project?",
    options: [
      "It manages state globally",
      "It is a database for React",
      "It is a build tool that provides a faster development experience",
      "It provides routing capabilities"
    ],
    answer: "It is a build tool that provides a faster development experience"
  },
  {
    id: 9,
    question: "How can you optimize performance for a React component so it only re-renders when its props change?",
    options: [
      "Use React.memo",
      "Use useEffect",
      "Use useState",
      "Use React.Fragment"
    ],
    answer: "Use React.memo"
  },
  {
    id: 10,
    question: "What is the purpose of the 'key' prop when rendering lists in React?",
    options: [
      "To bind the data to the DOM element",
      "To style individual list items",
      "To provide a unique identifier for React to track elements efficiently",
      "To pass data down to child components"
    ],
    answer: "To provide a unique identifier for React to track elements efficiently"
  }
];

export default questions;
