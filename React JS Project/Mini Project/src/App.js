import React from 'react'
import HackerNews from './Components/HackerNews'

export default function App() {
    return (
        <>
           <HackerNews info={realInfo}/> 
        </>
    )
}

const realInfo = [
    {
        heading : 'Postgres Observability',
        person  : 'fforflo',
        link    : 'pgstats.dev',
        time    : '2020-11-11T14:29:40+00:00',
        status  : {
            upvote  : 3 ,
            comment : 22,
            point   : 11
        }
    },
    {
        heading : 'Apple\'s Shifting Differentiation',
        person  : 'osdfrflo',
        link    : 'tats.dev',
        time    : '2020-11-11T14:29:40+00:00',
        status  : {
            upvote  : 66 ,
            comment : 32,
            point   : 31
        }
    },
    {
        heading : 'es servability',
        person  : 'sorflo',
        link    : 'aastats.dev',
        time    : '2020-11-11T14:29:40+00:00',
        status  : {
            upvote  : 31 ,
            comment : 2,
            point   : 21
        }
    },
    {
        heading : 'Postgres Observability',
        person  : 'fforlo',
        link    : 'pgstats.dev',
        time    : '2020-11-11T14:29:40+00:00',
        status  : {
            upvote  : 3 ,
            comment : 22,
            point   : 11
        }
    },
    {
        heading : 'Apple\'s Shifting Differentiation',
        person  : 'osdrflo',
        link    : 'tats.dev',
        time    : '2020-11-11T14:29:40+00:00',
        status  : {
            upvote  : 66 ,
            comment : 32,
            point   : 31
        }
    },
    {
        heading : 'es servability',
        person  : 'sorfo',
        link    : 'aastats.dev',
        time    : '2020-11-11T14:29:40+00:00',
        status  : {
            upvote  : 31 ,
            comment : 2,
            point   : 21
        }
    }
]

