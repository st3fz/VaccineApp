import React, { Component } from "react";
import "./Chat.scss";
import axios from "axios";

export default class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chats: [],
      chat: "",
      username: "Steffi",
      date: "",
      isChatOpened: false,
    };
    this.handleChatAddition = this.handleChatAddition.bind(this);
    this.updateChat = this.updateChat.bind(this);
    this.toggleIsChatOpened = this.toggleIsChatOpened.bind(this);
  }

  componentDidMount() {
    this.pullChats();
  }

  handleChatAddition = e => {
    this.setState({ chat: e.target.value });
  };

  toggleIsChatOpened() {
    const { isChatOpened } = this.state;
    this.setState({
      isChatOpened: !isChatOpened,
    });
  }

  updateChat = e => {
    e.preventDefault();
    const { chat, username, chats, date } = this.state;

    chats.push(chat);

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
    var dateNow = `${hours}:${minutes} ${day}/${month}/${year}`;

    this.setState({ 
      chat: e.target.value.toString(),
      username: username.toString(),
      date: dateNow.toString() 
    });

    var body = {
      username: username.toString(),
      message: chat,
      dateNow: date
    };

    axios
      .post("http://localhost:8080/api/chats/add", body, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(function (response) {
        console.log("response: " + response);
      })
      .catch(function (error) {
        console.log("error: " + error);
      });
      
    this.pullChats();
  };

  pullChats() {
    console.log("console");
    axios
      .get("http://localhost:8080/api/chats")
      .then((res) => {
        this.setState({ chats: res.data });
        console.log(res.data);
      })
      .catch(function (error) {
        console.log("Error: " + error);
      });
  }

  render() {
    const { chats, chat, username, isChatOpened } = this.state;

    if (!isChatOpened) {
      return (
        <div className="">
          <div className="">
          <br/><br/><br/>
          </div>
          <div className="">
            <button className="btn" onClick={this.toggleIsChatOpened}>
              Open Live Chat
            </button>
          </div>
        </div>
      );
    } else if (isChatOpened) {
      return (
        <div className="">
          <div className="">
          <br/><br/><br/>
          </div>
          <div className="">
            <p>
            <button className="btn d-block" onClick={this.toggleIsChatOpened}>
              Close Live Chat
            </button></p>
          </div>
          <div className=" d-block mx-auto chat-box-bg p-3">
            <h2 className="text-center">Chat</h2>
            {chats.map((chats) => (
              <div className="">
                <span className="badge badge-pill badge-warning py-3 px-3 mb-2">
                  <p className="text-left">{chats.message}</p>
                  <span className="username-bubble pull-left pr-3">{chats.username}</span>
                  <span className="pull-right text-grey">{chats.dateNow}</span>
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
        </div>
      );
    }
  }
}
