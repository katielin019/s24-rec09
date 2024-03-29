import React, { useState } from 'react'
import './Quiz.css'
import QuizQuestion from '../core/QuizQuestion';
import QuizCore from '../core/QuizCore';

interface QuizState {
  quiz: QuizCore
  // questions: QuizQuestion[]
  // currentQuestionIndex: number
  currentQuestion: QuizQuestion | null
  selectedAnswer: string | null
  // hasNextQuestion: boolean
  // score: number
  // attempts: number
}

const Quiz: React.FC = () => {
  // const initialQuestions: QuizQuestion[] = [
  //   {
  //     question: 'What is the capital of France?',
  //     options: ['London', 'Berlin', 'Paris', 'Madrid'],
  //     correctAnswer: 'Paris',
  //   },
  // ];
  const qCore: QuizCore = new QuizCore();

  const [state, setState] = useState<QuizState>({
    quiz: qCore,
    currentQuestion: qCore.getCurrentQuestion(),
    // questions: initialQuestions,
    // currentQuestionIndex: 0,  // Initialize the current question index.
    selectedAnswer: null,  // Initialize the selected answer.
    // hasNextQuestion: qCore.hasNextQuestion(),
    // score: 0,  // Initialize the score.
    // attempts: 0,  // Initialize the number of attempts.
  });

  const handleOptionSelect = (option: string): void => {
    setState((prevState) => ({ ...prevState, selectedAnswer: option }));
  }


  const handleButtonClick = (): void => {
    // Task3: Implement the logic for button click, such as moving to the next question.
    if (state.selectedAnswer !== null) {
      state.quiz.answerQuestion(state.selectedAnswer);
      state.quiz.nextQuestion();
      setState((prevState) => ({
        ...prevState,
        selectedAnswer: null,
        currentQuestion: state.quiz.getCurrentQuestion(),
        // hasNextQuestion: state.quiz.hasNextQuestion(),
      }));
    }
  } 

  const { quiz, selectedAnswer } = state;
  // const currentQuestion = quiz.getCurrentQuestion();// questions[currentQuestionIndex];

  if (state.currentQuestion === null) {
    return (
      <div>
        <h2>Quiz Completed</h2>
        <p>Final Score: {quiz.getScore()} out of {quiz.getTotalQuestions()}</p>
      </div>
    );
  }

  return (
    <div>
      <h2>Quiz Question:</h2>
      <p>{state.currentQuestion.question}</p>
    
      <h3>Answer Options:</h3>
      <ul>
        {state.currentQuestion.options.map((option) => (
          <li
            key={option}
            onClick={() => handleOptionSelect(option)}
            className={selectedAnswer === option ? 'selected' : ''}
          >
            {option}
          </li>
        ))}
      </ul>

      <h3>Selected Answer:</h3>
      <p>{selectedAnswer ?? 'No answer selected'}</p>

      <button onClick={ () => handleButtonClick()}>Next Question</button>
    </div>
  );
};

export default Quiz;