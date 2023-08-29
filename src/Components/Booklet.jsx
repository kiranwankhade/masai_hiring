import { useEffect, useState } from "react";
import QuestionCard from "./QuestionCard";

const Booklet = () => {

  const [start,setStart] = useState(false);

  const [data,setData] =  useState([]);

  const [score,setScore] = useState(0);

  

  
  const fetchData  = async() => {
    try{
      let res = await fetch(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-quiz`);

      let data1 = await res.json();
      setData(data1.data);
      
    }
    catch(err){
      console.log(err);
    }
  }

  // useEffect(()=>{
  //   fetchData();
  // },[])


  console.log("data",data)

  return (
    <div data-testid="Booklet">
      {/* create a div with className="welcome-div" here*/}

        {
          start ?  <div className="questions-container">
          {/* Append score and question card components here */}
          <button onClick={()=> {
                setStart(false);
                setScore(0);
              }}>End Exam</button>
              <h3>Score: {score}</h3>
  
             {
              data && data.map((q)=>(
                <QuestionCard data = {q}/>
              ))
             }
  
          
        </div> : <div className="welcome-div" >
          <h1>To begin the exam, click on the 'Start Exam' button below</h1>
          <button onClick={()=> {
            setStart(true);
            fetchData();
          }}>Start Exam</button>
      </div>        }
        
     
    </div>
  );
};

export default Booklet;
