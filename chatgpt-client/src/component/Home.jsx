import { useEffect, useState } from "react";
import ChatMessage from '../ChatMessage';
import '../App.css'; 
import { useNavigate } from "react-router";
import ClipLoader from "react-spinners/ClipLoader";


const Home = () =>{
    
    const [loading,setLoading] = useState(false);
    const [input,setInput] = useState("")
    const [chatlog,setChatlog] = useState((JSON.parse(localStorage.getItem('Chatlog')))?JSON.parse(localStorage.getItem('Chatlog')):[]);
    const [history,setHistory] = useState((JSON.parse(localStorage.getItem("History")))?JSON.parse(localStorage.getItem("History")):[]);
    const [answers,setAnswers] = useState((JSON.parse(localStorage.getItem("Answers")))?JSON.parse(localStorage.getItem("Answers")):[null])

  const navigate = useNavigate();

  
  function NewChat(){
    setChatlog([]);
    
  }

  function clearData(){
    setHistory([]);
    setChatlog([]);
    setAnswers([null])
  }
   

   useEffect(()=>{
    localStorage.setItem("Answers",JSON.stringify(answers))
   },[answers])

   useEffect(()=>{
    localStorage.setItem("History",JSON.stringify(history))
   },[history])

   
   useEffect(()=>{
    localStorage.setItem("Chatlog",JSON.stringify(chatlog))
  },[chatlog])


  const historyStore = JSON.parse(localStorage.getItem('History'));
  const chatStore = JSON.parse(localStorage.getItem('Chatlog'));



    async function handleSubmit(e){
      e.preventDefault();
      setLoading(true)
      let ChatLogNew =([...chatlog,{user:"me",message:`${input}`}]);
      setInput("");
      setChatlog(ChatLogNew);
      setHistory([...history,input]);
      const messages = ChatLogNew.map((message)=>message.message).join("\n")

      // Fetch
      const response = await fetch("http://localhost:4000/",{
        method:"POST",
        headers:{"Content-Type":"application/json"},
    
        body:JSON.stringify({
          message:messages
        })
      });
      // Response
      const data = await response.json();
      setChatlog([...ChatLogNew,{user:"gpt",message:`${data.message}`}]);
      console.log(data);
       setAnswers([...answers,data])
      setLoading(false)


    }
    function handleLog(e){
      navigate("/Answer")
    }

    return (
      <div className="App">
       <div className='sidemenu'>
          <div className='sidebtn' onClick={NewChat}>
            <h5 className='new'>+ New Chat</h5>   
          </div> 
          <div className='history'>
          {historyStore!=null && historyStore.map((message,index)=>(
           (index==0) && <div key={index} className='previousValues' onClick={handleLog} >
                {message}
              </div>
          ))}      
        </div>
        <div className="delbtn">
          <div className='clearbtn' onClick={clearData}>
              <h5 className='new'>Clear Data</h5>
          </div>
          </div>
       </div>
       <div className='mainside'>
        <div className='chatlog'>
        { chatlog.map((message,index,array)=>(
          (index == array.length-1) ? (loading ?  <ClipLoader color={"#36d7b7"} /> : <ChatMessage key={index} message={message} loading = {loading} />) : <ChatMessage key={index} message={message} loading = {loading} />  
         
        ))}  
        </div>
          <div className='chat-input'>
          <form onSubmit={handleSubmit}>
            <input className='chat-prompt' placeholder='Type your message' rows="1" onChange={(e)=>setInput(e.target.value) } value={input} />
            {/* <button type='submit' className='btn'>Submit</button> */}
            </form>
          </div>
       </div>
      </div>
    );
}

export default Home;
