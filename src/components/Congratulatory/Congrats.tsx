// congratulatory message with number of questions answered correctly 

// import React ,{FC, useState}from "react";
// import classes from './Congrats.module.css';
// import Confetti2 from "./Confetti";
// import {question,correctAnswer} from '../../data/Quiz.ts';


// const Congrats : FC = ()=>{
// //     // holds user's answers
//     const [userAnswers,setUserAnswers] = useState<(string | null)[] >(new Array(question.length).fill(null));
    
//     // giving scores based on user's answers
//     const [score,setScore] = useState(0);

//     const handleUserAnswers = (questionIndex : number, selectedAnswer : string) => {
//         setUserAnswers((prevAns)=>{
//             const newAnswers = [...prevAns];
//             newAnswers[questionIndex] =selectedAnswer;
//             return newAnswers;
//         })


//         // check if answer is correct to give score
//         if(question[questionIndex].correctAnswer === selectedAnswer)
//             setScore((prevScore)=> prevScore + 1)

//     }

// //    restart by clicking play again button
//     const resetQuiz = () =>{
//         setUserAnswers(new Array(question.length).fill(null));
//         setScore(0);

//     }


    // return (
    //     <section className={classes.congrats}>
    //     <div className={classes.confetti}>
    //         <Confetti2/>
    //     </div>
    //      <div className={classes.message}>
    //      <h2>Congrats! You completed the quiz.</h2>
    //      {/* <p>You answered {score}/{question.length} correctly</p> */}
    //      <p>You answered 4/10 correctly</p>

         {/* <button className={classes.btn} onClick={resetQuiz}>Play Again</button> */}
         {/* <button className={classes.btn} >Play Again</button> */}



         {/* {question.map((question, index) => (
          <div key={index}>
            <h3>{question.question}</h3>
            {question.answers.map((option,optionIndex) => (
              <button
                key={optionIndex}
                onClick={() => handleUserAnswers(index, optionIndex)}
                className={
                  userAnswers[index] === option
                    ? classes.selectedAnswer
                    : ''
                }
              >
                {option}
              </button>
            ))}
          </div>
        ))}
//       </div> */}
{/* //          </div>
        
//         </section> */}
{/* //     )
// } */}

// export default Congrats;



import React, { FC } from 'react';
import classes from './Congrats.module.css';
import Confetti2 from './Confetti';

interface CongratsProps {
  score: number;
  totalQuestions: number;
  onPlayAgain: () => void;
  quizCompleted : boolean;
}

const Congrats: FC<CongratsProps> = ({ score, totalQuestions, onPlayAgain }) => {
  return (
    <section className={classes.congrats}>
      <div className={classes.confetti}>
        <Confetti2 />
      </div>
      <div className={classes.message}>
        <h2>Congrats! You completed the quiz.</h2>
        <p>You answered {score}/{totalQuestions} correctly</p>
        <button className={classes.btn} onClick={onPlayAgain}>
          Play Again
        </button>
      </div>
    </section>
  );
};

export default Congrats;
