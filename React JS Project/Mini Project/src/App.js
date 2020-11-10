import React from 'react'
import './App.css'
import Tweet from './Components/Tweet'

export default function App (props) {
    

        return (
            <>
           <Tweet tweet={testTweet}/>
            </>
        )
}


const testTweet = {
    message : 'Something About cats',
    gravatar : "xyz",
    author  : {
        handle : "catperson",
        name : "IAMA CAT PERSON"
    },
    likes :2 ,
    retweets : 1,
    timestamp : '2015-07-30 12:23:33'
}

