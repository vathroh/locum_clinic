import "../../App.css";
import React, { useState } from "react";
import styled from "styled-components";
import ContactListComponent from "./ContactListComponent";
import ConversationComponent from "./ConversationComponent";

// import io from "socket.io-client";
// const socket = io.connect("http://localhost:5000");
// const socket = io.connect("http://3.1.90.174");

const Container = styled.div`
    display: flex;
    height: 100vh;
    width: 100%;
    flex-direction: row;
    align-items: center;
    background: #f8f9fb;
`;

const ChatPlaceholder = styled.img`
    width: 240px;
    height: 240px;
    border-radius: 50%;
    object-fit: contain;
`;

const Placeholder = styled.div`
    flex: 3;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    gap: 10px;
    color: rgba(0, 0, 0, 0.45);
    span {
        font-size: 32px;
        color: #525252;
    }
`;

const Chat = () => {
    const [selectedChat, setChat] = useState();
    const [messages, setMessages] = useState([]);
    // socket.emit("join", auth.user);
    // console.log(auth);
    return (
        <Container>
            <ContactListComponent setMessages={setMessages} setChat={setChat} />
            {selectedChat ? (
                <ConversationComponent
                    selectedChat={selectedChat}
                    messages={messages}
                />
            ) : (
                <Placeholder>
                    <ChatPlaceholder />
                    <span>WorkWiz</span>
                    send messages to your doctor.
                </Placeholder>
            )}
        </Container>
    );
};

export default Chat;
