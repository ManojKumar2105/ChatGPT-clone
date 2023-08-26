import ClipLoader from "react-spinners/ClipLoader";
export default function ChatMessage({message},loading){
 return (
    <div className={`chat-message ${message.user==="gpt" && "chatgpt"}`}>
    {/*  <div className="chat-message"> */}
    <div className='chat-message-center'>
      <div className='message'>
        {message.message  }
      </div>
    </div>
    </div>
 )   
}

