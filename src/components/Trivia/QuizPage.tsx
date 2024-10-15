// import React,{FC, useState} from "react";
// import HorizontalLinearStepper from '../Stepper/stepper.tsx';
// import { replies } from "../../data/Quiz.ts";
// import classes from './Default.module.css';
// import TabButton from "./TabButton.tsx";

// const DefaultQuizPage: FC = ()=>{

//     const [selectedValue,setSelectedValue] = useState<string | null>(null);

//     // const handleClick = (selctedButton : string)=>{
//     //     console.log(selctedButton)
//     // }
//     const handleClick = (selectedBtn : string)=>{
//         setSelectedValue(selectedBtn);
//         console.log(selectedBtn);
//     }


//     return (
// <>
//         <main className={classes.main}>
//         <h4>Country Quiz</h4>

//         {/* stepper - 10 steps each step representing a question */}
//         <div className={classes.stepper}>
//             <HorizontalLinearStepper/>
//         </div>

//     <div className={classes.trivia}>
//         {replies.map((item,index)=>(
//             <div className={classes.content} key={index}>
//             <h3>{item.question}</h3>
//             <div className={classes.answers}>
//             {/* <TabButton onClick={()=>handleClick('f1')}>{item.answers.ans1}</TabButton>
//             <TabButton onClick={()=>handleClick('f2')}>{item.answers.ans2}</TabButton>
//             <TabButton onClick={()=>handleClick('f3')}>{item.answers.ans3}</TabButton>
//             <TabButton onClick={()=>handleClick('f4')}>{item.answers.ans4}</TabButton> */}

//             <TabButton onClick={()=>handleClick(item.answers[0])}  isActive={selectedValue === item.answers[0]}>{item.answers[0]}</TabButton>
//             <TabButton onClick={()=>handleClick(item.answers[1])}  isActive={selectedValue === item.answers[1]}>{item.answers[1]}</TabButton>
//             <TabButton onClick={()=>handleClick(item.answers[2])}  isActive={selectedValue === item.answers[2]}>{item.answers[2]}</TabButton>
//             <TabButton onClick={()=>handleClick(item.answers[3])}  isActive={selectedValue === item.answers[3]}>{item.answers[3]}</TabButton>

//             </div>
//             </div>
//         ))}

//     </div>

//         </main>
//     </>
//     )
// }

// export default DefaultQuizPage;


// import React, { FC, useState } from 'react';
// import HorizontalLinearStepper from '../Stepper/stepper.tsx';
// import { replies } from '../../data/Quiz.ts';
// import classes from './Default.module.css';
// import TabButton from './TabButton.tsx';

// const DefaultQuizPage: FC = () => {
//   const [activeStep, setActiveStep] = useState(0);
//   const [selectedValue, setSelectedValue] = useState<string | null>(null);

//   const handleNext = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//     setSelectedValue(null); // Reset selected value for the next question
//   };

//   const handleBack = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep - 1);
//     setSelectedValue(null); // Reset selected value when going back
//   };

//   return (
//     <>
//       <main className={classes.main}>
//         <h4>Country Quiz</h4>

//         <div className={classes.stepper}>
//           <HorizontalLinearStepper activeStep={activeStep} totalSteps={replies.length} />
//         </div>

//         <div className={classes.trivia}>
//           <div className={classes.content}>
//             <h3>{replies[activeStep].question}</h3>
//             <div className={classes.answers}>
//               {replies[activeStep].answers.map((answer, index) => (
//                 <TabButton
//                   key={index}
//                   onClick={() => setSelectedValue(answer)}
//                   isActive={selectedValue === answer}
//                 >
//                   {answer}
//                 </TabButton>
//               ))}
//             </div>
//           </div>
//         </div>

//         <div className={classes.navigation}>
//           <button onClick={handleBack} disabled={activeStep === 0}>
//             Back
//           </button>
//           <button onClick={handleNext} disabled={selectedValue === null}>
//             {activeStep === replies.length - 1 ? 'Finish' : 'Next'}
//           </button>
//         </div>
//       </main>
//     </>
//   );
// };

// export default DefaultQuizPage;


import React, { FC, useEffect, useState } from 'react';
import HorizontalLinearStepper from '../Stepper/stepper.tsx';
import { replies } from '../../data/Quiz.ts'; // Assuming you have a data file with quiz questions and answers
import classes from './Default.module.css';
import TabButton from './TabButton.tsx';
import Congrats from '../Congratulatory/Congrats.tsx'; // Import the Congrats component for displaying after completing the quiz

const DefaultQuizPage: FC = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [selectedValue, setSelectedValue] = useState<string | null>(null);
  const [userAnswers, setUserAnswers] = useState<(string | null)[]>(new Array(replies.length).fill(null));
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);

  useEffect(()=>{
//   ensure once answer is selected ,movesto next step automatically without having to click back or next buttons

     if (selectedValue !== null) {
    handleNext();
     }

  },[selectedValue]);


  const handleNext = () => {
      // Check if the selected answer is correct
      if (selectedValue === replies[activeStep].correctAnswer) {
        setScore((prevScore) => prevScore + 1);
      }

      // Update userAnswers with the selected answer
      setUserAnswers((prevAnswers) => {
        const newAnswers = [...prevAnswers];
        newAnswers[activeStep] = selectedValue;
        return newAnswers;
      });

      // Move to the next step
      setActiveStep((prevActiveStep) => prevActiveStep + 1);

      // Reset selectedValue for the next question
      setSelectedValue(null);

      // Check if all questions are answered
      if (activeStep === replies.length - 1) {
        setQuizCompleted(true);
      }
    
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    setSelectedValue(null); // Reset selectedValue when going back
  };

  const resetQuiz = () => {
    setActiveStep(0);
    setUserAnswers(new Array(replies.length).fill(null));
    setScore(0);
    setQuizCompleted(false);
  };

  return (
    <>
      {quizCompleted ? (
        <Congrats score={score} totalQuestions={replies.length} onPlayAgain={resetQuiz} quizCompleted={quizCompleted}/>
      ) : (
        <main className={classes.main}>
          <h4>Country Quiz</h4>

          <div className={classes.stepper}>
            <HorizontalLinearStepper activeStep={activeStep} totalSteps={replies.length} />
          </div>

          <div className={classes.trivia}>
            <div className={classes.content}>
              <h3>{replies[activeStep].question}</h3>
              <div className={classes.answers}>
                {replies[activeStep].answers.map((answer, index) => (
                  <TabButton
                    key={index}
                    onClick={() => setSelectedValue(answer)}
                    isActive={selectedValue === answer}
                  >
                    {answer}
                  </TabButton>
                ))}
              </div>
            </div>
          </div>

          {/* <div className={classes.navigation}>
            <button onClick={handleBack} disabled={activeStep === 0}>
              Back
            </button>
            <button onClick={handleNext} disabled={selectedValue === null}>
              {activeStep === replies.length - 1 ? 'Finish' : 'Next'}
            </button>
          </div> */}

          {/* <div className={classes.userAnswers}>
            {userAnswers.map((answer, index) => (
              <div key={index}>
                <p>Question {index + 1}: {answer}</p>
              </div>
            ))}
          </div> */}
        </main>
      )}
    </>
  );
};

export default DefaultQuizPage;

