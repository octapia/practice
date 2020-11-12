import React from 'react'
import './HackerNews.css'

export default function HackerNews({info}) {
    return (
        <table className="hackerNews">
          <thead><Navbar /></thead>
           <tbody><News information={info}/></tbody>
        </table>
    )
}


// Header -- logo and links

const Navbar = () => {
 return (<tr className="header">
        <td><a href="http:/www.facebook.com"><img src="https://news.ycombinator.com/y18.gif" alt=""/></a></td>
        <td className="company"><a href="http:/www.facebook.com">Hacker News </a></td>
        <td><a href="http:/www.facebook.com">new | </a></td>
        <td><a href="http:/www.facebook.com">past | </a></td>
        <td><a href="http:/www.facebook.com">comment | </a></td>
        <td><a href="http:/www.facebook.com">ask | </a></td>
        <td><a href="http:/www.facebook.com">show | </a></td>
        <td><a href="http:/www.facebook.com">jobs | </a></td>
        <td><a href="http:/www.facebook.com">submit</a></td>
        <td><a href="http:/www.facebook.com">login </a></td>
        </tr>
        
 )}

 const News = ({information}) => {
  return information.map((news,index) =>  {
     return <><tr className="news" key={news.person}>
              <td>{index+1} <i className="fas fa-caret-up"></i>
              </td>
              <td>{news.heading}
              </td>
              <td><a href="www.fb.com">({news.link})</a> 
              </td>
            </tr>
            <tr className="xtratr"><td >
                {news.status.point} by {news.person} 1 hour ago | hide | {news.status.comment} comments.
            </td>
            </tr></>
  })
 }
 

