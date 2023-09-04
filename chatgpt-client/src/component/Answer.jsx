import { useEffect, useState } from "react";
import '../App.css';
import { useNavigate } from "react-router";


export default function Answer(){

  const [answers,setAnswers] = useState([])
  const historyStore = JSON.parse(localStorage.getItem('History'));
  const navigate = useNavigate();
useEffect(() => {
  const answers = JSON.parse(localStorage.getItem('Answers'));
  console.log(answers);
  if (answers) {
   setAnswers(answers);
  }
}, []);

function clearChat(){
    localStorage.removeItem("Answers");
    setAnswers([])
}

function handleChat(){
  navigate("/home");
}

return <div className="App">
            <div className='sidemenu' >
                <div className='sidebtn' onClick={clearChat} >
                  <h5 className='new'>+ New Chat</h5>   
                </div> 
                <div className="delbtn" onClick={handleChat}>
                <div className="clearbtn" >
                  <h5 className='new'>Continue Chat</h5>
                </div>
                </div>
            </div>
            
            <div className='mainside'>
              <div className='chatlog'>
              {answers.map((message,index)=>( 
                (index>0) && 
                <div>
                <div className={"chat-message"}>
                <div className='chat-message-center'>
                  <div className='message'>
                  {historyStore[index-1]}
                </div>
                  
              </div>
              </div>
                <div className={"chat-message chatgpt gpt "}>
                <div className='chat-message-center'>
                  <div className='message'>
                  {message.message}
                </div>
                  
              </div>
              </div>
              </div>
              ))}
              
          
              
              </div>
          
            </div>
      </div>
}

