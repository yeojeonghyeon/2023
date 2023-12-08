import { useState } from "react";
import styles from "./ChatComponent.module.css";
import axios from "axios";
import ChatList from "./ChatList";


export function ChatComponent() {
    const [message, setMessage] = useState("");
    const [chats, setChats] = useState([]);
    
    const chat = async (e, message) => {
      e.preventDefault();
      if (!message) return;
      setMessage("");
      setChats((prev)=>{
        return [...prev, { role: "user", content: message }, {role: "assistant", content: "wait"}];
      });
      try{
        const response = await axios.post("http://localhost:4000/", {
          chat: { role: "user", content: message }
        });
        setChats((prev)=>{
          return [...prev.slice(0, prev.length-1), response.data.output];
        });         
      }catch(e){
        console.log(e);
      }
    }
   
    return (
      <div>
        <h1 className={styles.chat_header}>chat gpt tutorial</h1>
        <ChatList chats={chats}></ChatList>
        <form action="" onSubmit={(e) => chat(e, message)}
          className={styles.enter}>
          <div className={styles.chat_footer}>
            <input
              type="text"
              name="message"
              value={message}
              className = {styles.input}
              placeholder="Type a message here and hit Enter..."
              onChange={(e) => setMessage(e.target.value)}
            />
            <button className={styles.btn} onclick={(e)=>chat(e, message)}>전송</button>            
          </div>
        </form>
      </div>
    );
}


