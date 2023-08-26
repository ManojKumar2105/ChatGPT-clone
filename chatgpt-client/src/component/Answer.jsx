import { useEffect, useState } from "react";
import '../App.css';
// import ChatMessage from "../ChatMessage";

export default function Answer(){

  const [answers,setAnswers] = useState([])
  const historyStore = JSON.parse(localStorage.getItem('History'));

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
return <div className="App">
       <div className='sidemenu' >
          <div className='sidebtn' onClick={clearChat} >
            <h5 className='new'>+ New Chat</h5>   
          </div> 
          
       </div>
       <div className='mainside'>
        <div className='chatlog'>
    {/*  <div className="chat-message"> */}
    {answers.map((message,index)=>( 
          (index>0) && 
          <div>
          <div className={"chat-message"}>
           <div className='chat-message-center'>
            <div className='message'>
            {historyStore[index-1]}
            {/* <div style={{ width:"00px",background:"#343541"}} className={"chat-message "}> </div> */}
          </div>
            
        </div>
        </div>
          <div className={"chat-message chatgpt gpt "}>
           <div className='chat-message-center'>
            <div className='message'>
            {message.message}
            {/* <div style={{ width:"00px",background:"#343541"}} className={"chat-message "}> </div> */}
          </div>
            
        </div>
        </div>
        </div>
         ))}
         
    
        
        </div>
    
       </div>
      </div>
}


// {/* <div className="App">
//        <div className='sidemenu'>
//           <div className='sidebtn'>
//             <h5 className='new'>+ New Chat</h5>   
//           </div> 
//           <div className='history'>
//         {/* {chatlog.map((message,index)=>(
//           (message.user == "me" && index==0) &&
//           <div key={index} className='previousValues' onClick={handleLog} >
//             {message.message}
//           </div>
//       ))} */}
//         </div>
//        </div> */}
//        <div className='mainside'>
//         <div className='chatlog'>
//         <div className={`chat-message gpt`}>
//     {/*  <div className="chat-message"> */}
//     <div className='chat-message-center'>
//       <div className='message'>
//         {answers[0]}
//       </div>
//     </div>
//     </div>
//         </div>
        
//        </div>
//       </div>
// }



