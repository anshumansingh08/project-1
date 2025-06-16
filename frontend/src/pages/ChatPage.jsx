import axios from "axios";
import { useEffect, useState } from "react";
const ChatPage = () => {
  const [chat, setChat] = useState([]);
  const fetchChats = async () => {
    const { data } = await axios.get("/api/chat");
    console.log(data);
    setChat(data);
  };

  useEffect(() => {
    fetchChats();
  }, []);
  return (
    <div>
      <h1>ChatPage</h1>
      {chat.map((data) => (
        <div key={data._id}>{data.chatName}</div>
      ))}
    </div>
  );
};

export default ChatPage;
