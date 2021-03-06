import React, { Component } from "react";
import "./Chat.scss";
import axios from "axios";

interface State {
  chat : string;
  chats: {
    message: string;
    date: string;
    username:string;
  }[];
  username : string;
  date: string;
  isChatOpen : boolean;
} 

interface Props {

}

export default class Chat extends React.Component<Props, State> {
  constructor(props : Props) {
    super(props);
    this.state = {
      chats: [],
      chat: "",
      username: "Steffi",
      date: "",
      isChatOpen: false,
    };
    
    this.handleChatAddition = this.handleChatAddition.bind(this);
    this.updateChat = this.updateChat.bind(this);
    this.toggleIsChatOpen = this.toggleIsChatOpen.bind(this);
  }

  componentDidMount() {
    this.pullChats();
  }

  handleChatAddition = (e: any) => {
    this.setState({ chat: e.target.value });
  };

  toggleIsChatOpen() {
    const { isChatOpen } = this.state;
    this.setState({
      isChatOpen: !isChatOpen,
    });
  }

  updateChat = (e: any) => {
    e.preventDefault();
    const { chat, username, chats, date } = this.state;

    // chats.push(chat);

    var now = new Date();
    var minutes = now.getMinutes().toString()
    if (minutes.length === 1) {
      minutes = `0${minutes}`;
    }
    var hours = now.getHours().toString();
    if (hours.length === 1) {
      hours = `0${hours}`;
    }
    var day = now.getDay()
    var month = now.getDate()
    var year = now.getFullYear()
    var setDate = `${hours}:${minutes} ${day}/${month}/${year}`;

    this.setState({ 
      chat: e.target.value.toString(),
      username: username.toString(),
      date: setDate.toString() 
    });

    var body = {
      username: username,
      message: chat,
      date: date
    };

    axios
      .post("http://localhost:8080/api/chats/add", body, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then( res => {
        console.log("response: " + res);
      })
      .catch( err => {
        console.log("error: " + err);
      });
      
    this.pullChats();
  };

  pullChats() {
    console.log("console");
    axios
      .get("http://localhost:8080/api/chats")
      .then(res => {
        this.setState({ chats: res.data });
        console.log(res.data);
      })
      .catch( error => {
        console.log("Error: " + error);
      });
  }

  render() {
    const { chats, chat, username, isChatOpen } = this.state;

    return(
      <>
      <div>
        <button className={`btn ${isChatOpen ? 'd-none' : 'd-block'}`} onClick={this.toggleIsChatOpen}>
          Open Live Chat
        </button>
        <button className={`btn ${isChatOpen ? 'd-block' : 'd-none'}`} onClick={this.toggleIsChatOpen}>
          Close Live Chat
        </button>
      </div>
      <div className={`${ isChatOpen ? 'd-block' : 'd-none'}`}>
        <h2 className="text-center">Chat</h2>
        {chats.map((chats) => (
          <div className="">
            <span className="badge badge-pill badge-warning py-3 px-3 mb-2">
              <p className="text-left">{chats.message}</p>
              <span className="username-bubble pull-left pr-3">{chats.username}</span>
              <span className="pull-right text-grey">{chats.date}</span>
            </span>   
          </div>
        ))}
        <p>Posting as(username): <span className="text-green">{username}</span></p>
        <input
          type="text"
          id="typeMsg"
          value={chat}
          onChange={this.handleChatAddition}
        />
        <button className="btn btn-light btn-round ml-2" onClick={this.updateChat}>
          Send
        </button>
      </div>
      </>
    )
  }
}
