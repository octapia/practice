import React, { Component } from 'react';

import RoomList from './Components/RoomList';
import MessageList from './Components/MessageList';
import NewRoomForm from './Components/NewRoomForm';
import SendMessageForm from './Components/SendMessageForm';

import Talk from "talkjs/talk";



class App extends Component {
  constructor(props) {
    super(props)
    this.talkjsContainer = React.createRef();
  }

  componentDidMount() {    
    Talk.ready.then(() => {
      var me = new Talk.User({
        id: parseInt(Math.random()*500000).toString(),
        name: "Alice",
        email: "demo@talkjs.com",
        photoUrl: "https://demo.talkjs.com/img/alice.jpg",
        welcomeMessage: "Hey there! How are you? :-)",
        role: "booker"
      });
      
      window.talkSession = new Talk.Session({
        appId: "tzMh5IB8",
        me: me
      });
      
      var other = new Talk.User({
        id: parseInt(Math.random()*500000).toString(),
        name: "Sebastian",
        email: "demo@talkjs.com",
        photoUrl: "https://demo.talkjs.com/img/sebastian.jpg",
        welcomeMessage: "Hey, how can I help?",
        role: "booker"
      });

      var conversation = talkSession.getOrCreateConversation(Talk.oneOnOneId(me, other));
      conversation.setParticipant(me);
      conversation.setParticipant(other);
      
      var inbox = talkSession.createInbox({selected: conversation});
      inbox.mount(this.talkjsContainer.current);
    });
  }

  render() { 
    return ( 
           <div className="app">
             <div ref={this.talkjsContainer} className="chatbox-container"></div>
             <RoomList />
            <MessageList/>
            <NewRoomForm />
            <SendMessageForm /> 
            </div> 
           )
  }
}
 

export default App;