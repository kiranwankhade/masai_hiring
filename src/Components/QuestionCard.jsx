import { useState } from "react";

const QuestionCard = ({data}) => {
  console.log('data:', data)


  const [buttonText,SetButtonText] = useState("Show Ans")
  
  const [pTag,SetPtag] = useState(false)
  // console.log('pTag:', pTag)

  return (
    <div className="question-card">
      {/* add question here */}
      <h3>{data.question}</h3>
      <div className="options">

      </div>
      <div className="show-ans">
        <button onClick={()=>{
          SetButtonText((state)=> state =="Show Ans" ? "HideAns" : "Show Ans")
          SetPtag((state)=> state == false ? true : false);
        }}>{buttonText}</button>
        {
          pTag ? <p>{data.options[data.correctOptionIndex]}</p> : ""
        }
      </div>
    </div>
  );
};

export default QuestionCard;
