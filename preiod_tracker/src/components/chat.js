import React, { useState } from "react";
import axios from "axios";
import Message from "./message";
import "./chat.css";

function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  async function sendMessage(e) {
    setMessages([...messages, input]);
    console.log(input);
    try {
      await axios
        .post("http://127.0.0.1:8080/chatbot", {
          input,
        })
        .then((res) => {
          console.log("post response");
          console.log(res.data.data);
          // setMessages([...messages, input]);      
          setMessages([...messages, res.data.data]);
        });
    } catch (e) {
      console.log(e);
    }
  }

  return (
    // <div className="page">
    <div className="chat">
      <div className="monkey">
      HEY!   I AM YOUR PERSONAL MONKEY
      </div>
      <div className="messages">
        {messages.map((msg, index) => (
          <div>
          <Message key={index} text={msg} />
         
          </div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Type a message..."
      />
      <div>
        </div>
      <button onClick={sendMessage}>Send</button>
    </div>
    // </div>
  );
}

export default Chat;
