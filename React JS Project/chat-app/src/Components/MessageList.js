import React, { Component } from 'react';
import Message from './Message';

const dummy_data = [
    {
        senderId : 'daniel34',
        text     : 'Lorem ipsum dolor, sit amet consectetur adipisicing !'
    },
    {
        senderId : 'sams22',
        text     : ' elit. Optio ut amet aliquid praesentium minus, consequuntur nihil dolores !'
    },
    {
        senderId : 'richel4',
        text     : 'quo modi! Quas at unde, quibusdam reprehenderit consequuntur nihil !'
    }
]

class MessageList extends Component {
    state = {  }
    render() { 
        return (
            <div className="message-List">
                {
                    dummy_data.map((item,index)=>{
                        return (
                            <div className="message">
                                <div className="user">{item.senderId}</div>
                                <div className="text">{item.text}</div>
                            </div>
                        )
                    })
                }
            </div>
                );
    }
}
 
export default MessageList;