import React from 'react';
import { Card } from 'antd';
import "./Articles.css"
import ArticleCard from './ArticleCard';

const articles = [
  {date: ["31", "Dec"], title: "Roger Federer", subtitle: "Tennis legend", description: "Roger Federer is a Swiss professional tennis player. Many players and analysts have called him the greatest male tennis player of all time.", subdescription: "Federer has won 18 Grand Slam singles titles, the most in history for a male tennis player, and held the No. 1 spot in the ATP rankings for a record 237 consecutive weeks and a record total of 302 weeks.", img: "https://68.media.tumblr.com/040d77e95e37f05fbc14b0b8ae3d3177/tumblr_opsismTLqh1vghf22o1_400.gif", payload: {}, articleID: "1"},
  {date: ["31", "Dec"], title: "Roger Federer", subtitle: "Tennis legend", description: "Roger Federer is a Swiss professional tennis player. Many players and analysts have called him the greatest male tennis player of all time.", subdescription: "Federer has won 18 Grand Slam singles titles, the most in history for a male tennis player, and held the No. 1 spot in the ATP rankings for a record 237 consecutive weeks and a record total of 302 weeks.", img: "https://68.media.tumblr.com/040d77e95e37f05fbc14b0b8ae3d3177/tumblr_opsismTLqh1vghf22o1_400.gif", payload: {}, articleID: "1"},
  {date: ["31", "Dec"], title: "Roger Federer", subtitle: "Tennis legend", description: "Roger Federer is a Swiss professional tennis player. Many players and analysts have called him the greatest male tennis player of all time.", subdescription: "Federer has won 18 Grand Slam singles titles, the most in history for a male tennis player, and held the No. 1 spot in the ATP rankings for a record 237 consecutive weeks and a record total of 302 weeks.", img: "https://68.media.tumblr.com/040d77e95e37f05fbc14b0b8ae3d3177/tumblr_opsismTLqh1vghf22o1_400.gif", payload: {}, articleID: "1"},
  {date: ["31", "Dec"], title: "Roger Federer", subtitle: "Tennis legend", description: "Roger Federer is a Swiss professional tennis player. Many players and analysts have called him the greatest male tennis player of all time.", subdescription: "Federer has won 18 Grand Slam singles titles, the most in history for a male tennis player, and held the No. 1 spot in the ATP rankings for a record 237 consecutive weeks and a record total of 302 weeks.", img: "https://68.media.tumblr.com/040d77e95e37f05fbc14b0b8ae3d3177/tumblr_opsismTLqh1vghf22o1_400.gif", payload: {}, articleID: "1"},
  {date: ["31", "Dec"], title: "Roger Federer", subtitle: "Tennis legend", description: "Roger Federer is a Swiss professional tennis player. Many players and analysts have called him the greatest male tennis player of all time.", subdescription: "Federer has won 18 Grand Slam singles titles, the most in history for a male tennis player, and held the No. 1 spot in the ATP rankings for a record 237 consecutive weeks and a record total of 302 weeks.", img: "https://68.media.tumblr.com/040d77e95e37f05fbc14b0b8ae3d3177/tumblr_opsismTLqh1vghf22o1_400.gif", payload: {}, articleID: "1"},
  
]

const Articles = () => {
  
  return <>
  <main className='main-articles'>
    {articles.map(element => {
      return <ArticleCard {...element} />
    })}
  </main>
  </>
};
export default Articles;