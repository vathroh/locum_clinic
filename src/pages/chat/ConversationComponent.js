import { SearchContainer, SearchInput } from "./ContactListComponent";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Picker from "emoji-picker-react";
import styled from "styled-components";
import io from "socket.io-client";
import env from "react-dotenv";
import axios from "axios";

const socket = io.connect(env.BASE_URL, {
    withCredentials: false,
});

const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex: 3;
    height: 100%;
    width: 100%;
    background: #f6f7f8;
`;

const ProfileHeader = styled.div`
    display: flex;
    flex-direction: row;
    background: #ededed;
    padding: 10px;
    align-items: center;
`;

const ProfileInfo = styled.div`
    display: flex;
    flex-direction: row;
    background: #ededed;
    align-items: center;
    gap: 10px;
`;

const ProfileImage = styled.img`
    width: 32px;
    height: 32px;
    border-radius: 50%;
`;

const ContactName = styled.span`
    font-size: 16px;
    color: black;
`;

const MessageContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow-y: auto;
    background: #e5ddd6;
`;
const MessageDiv = styled.div`
    display: flex;
    justify-content: ${(props) => (props.isYours ? "flex-end" : "flex-start")};
    margin: 5px 15px;
`;
const Message = styled.div`
    background: ${(props) => (props.isYours ? "#daf8cb" : "white")};
    padding: 8px 10px;
    border-radius: 4px;
    max-width: 50%;
    color: #303030;
    font-size: 14px;
`;

const ChatBox = styled.div`
    display: flex;
    flex-direction: row;
    background: #f0f0f0;
    padding: 10px;
    align-items: center;
    bottom: 0;
`;

const EmojiImage = styled.img`
    width: 28px;
    height: 28px;
    border-radius: 50%;
    opacity: 0.4;
    cursor: pointer;
`;

function ConversationComponent(props) {
    const user = useSelector((state) => state.user);
    const idToken = useSelector((state) => state.idToken);
    const { selectedChat, messages } = props;
    const onEmojiClick = (emoji, e) => {
        setText(text + emoji.emoji);
        togglePicker(false);
    };
    const [pickerVisible, togglePicker] = useState(false);
    const [messageList, setMessageList] = useState([]);
    const [text, setText] = useState("");

    useEffect(() => {
        setMessageList(messages);
    }, [messages]);

    const onEnterPress = async (event) => {
        if (event.key === "Enter") {
            const message = {
                conversation_id: selectedChat._id,
                sender: user._id,
                text: text,
                to: selectedChat.user._id,
            };

            const messages = [...messageList];
            messages.push(message);
            setMessageList(messages);
            socket.emit("message", message);

            await axios({
                url: env.BASE_URL + "/messages",
                method: "POST",
                headers: {
                    Authorization: "Bearer " + idToken,
                },
                data: message,
            });

            setText("");
        }
    };

    socket.emit("join", user);

    socket.on("message", (data) => {
        const messages = [...messageList];
        console.log(data);
        if (data.to === user._id) {
            messages.push(data);
            setMessageList(messages);
        }
    });

    socket.on("user-disconnected", (data) => {
        // console.log(data);
    });
    return (
        <Container>
            <ProfileHeader>
                <ProfileInfo>
                    <ProfileImage
                        src={env.BASE_URL + selectedChat.user.profile_pict}
                    />
                    <ContactName>{selectedChat.user.full_name}</ContactName>
                </ProfileInfo>
            </ProfileHeader>

            <MessageContainer>
                {messageList.map((item, index) => (
                    <MessageDiv isYours={item.sender === user._id} key={index}>
                        <Message isYours={item.sender === user._id}>
                            {item.text}
                        </Message>
                    </MessageDiv>
                ))}
            </MessageContainer>

            <ChatBox>
                <SearchContainer>
                    {pickerVisible && (
                        <Picker
                            emojiStyle={{
                                position: "absolute",
                                bottom: "60px",
                            }}
                            onEmojiClick={onEmojiClick}
                        />
                    )}
                    <EmojiImage
                        src={"/whatsapp-clone/data.svg"}
                        onClick={() =>
                            togglePicker((pickerVisible) => !pickerVisible)
                        }
                    />
                    <SearchInput
                        placeholder="Type a message"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        onKeyDown={onEnterPress}
                    />
                </SearchContainer>
            </ChatBox>
        </Container>
    );
}

export default ConversationComponent;
