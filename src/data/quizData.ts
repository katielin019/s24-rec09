import QuizQuestion from "../core/QuizQuestion";

const quizData: QuizQuestion[] = [
  {
    question: "What describes a group of objects that are treated the same way as a single instance of the same type of object?",
    options: ["Composite", "Strategy", "Facade", "Decorator"],
    correctAnswer: "Composite",
  },
  {
    question: "What adds behavior to an individual object, dynamically, without affecting the behavior of other objects from the same class?",
    options: ["Adapter", "Decorator", "Facade", "Strategy"],
    correctAnswer: "Decorator",
  },
  {
    question: "Which pattern enables selecting an algorithm at runtime by providing a corresponding object implementing the algorithm?",
    options: ["Adapter", "Iterator", "Strategy", "Composite"],
    correctAnswer: "Strategy",
  },
  {
    question: "Which of the following traverse a container and access the container's elements without knowing the internals of the container?",
    options: ["Strategy", "Adapter", "Composite", "Iterator"],
    correctAnswer: "Iterator",
  },
  {
    question: "Which two teams faced off in the 2022 World Cup final?",
    options: ["Brazil and Germany", "France and Croatia", "Argentina and France"],
    correctAnswer: "Argentina and France",
  },
  {
    question: "Who was the only US President to serve more than two terms?",
    options: ["Calvin Coolidge", "Franklin D. Roosevelt", "Theodore Roosevelt", "Abraham Lincoln"],
    correctAnswer: "Franklin D. Roosevelt",
  },
  {
    question: "Which country has the longest coastline in the world?",
    options: ["Canada", "Australia", "Indonesia", "Norway"],
    correctAnswer: "Canada",
  }
];

export default quizData;
