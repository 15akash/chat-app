import { useState, useEffect } from "react";
import "./Chat.css";
import SendIcon from "@mui/icons-material/Send";
import { IconButton } from "@material-ui/core";
import db, { auth } from "../firebase";
import Message from "./Message";
import { useSelector } from "react-redux";
import { selectChatId, selectChatName } from "../features/chatSlice";
import firebase from "firebase/compat/app";
import { selectUser } from "../features/userSlice";
import FlipMove from "react-flip-move";

const Chat = () => {
  const user = useSelector(selectUser);
  const [input, setInput] = useState("");
  const chatName = useSelector(selectChatName);
  const chatId = useSelector(selectChatId);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (chatId) {
      db.collection("chats")
        .doc(chatId)
        .collection("messages")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) => {
          setMessages(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          );
        });
    }
  }, [chatId]);

  const sendMessage = (e) => {
    e.preventDefault();

    db.collection("chats").doc(chatId).collection("messages").add({
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      message: input,
      uid: user.uid,
      photo: user.photo,
      email: user.email,
      displayName: user.displayName,
    });

    setInput("");
  };

  return (
    <div className="chat">
      <div className="chat-header">
        <h4>
          To: <span className="chat-name">{chatName}</span>
        </h4>
        <div>
          <strong>Details</strong>
          <button
            onClick={() => {
              auth.signOut();
            }}
          >
            Logout
          </button>
        </div>
      </div>

      {/* Chat Messages  */}

      <div className="chat-messages">
        <FlipMove>
          {messages.map(({ id, data }) => (
            <Message key={id} contents={data} />
          ))}
        </FlipMove>
      </div>

      <div className="chat-input">
        <form>
          <input
            placeholder="Type your message here"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <IconButton variant="outlined" className="sidebar-inputButton">
            <SendIcon onClick={sendMessage} className="chat-sendButton" />
          </IconButton>
        </form>
      </div>
    </div>
  );
};

export default Chat;
