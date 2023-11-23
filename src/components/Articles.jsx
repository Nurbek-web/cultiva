import React from 'react';
import { Card } from 'antd';
import "./Articles.css"
import ArticleCard from './ArticleCard';

const articles = [
  {date: ["31", "Dec"], title: "Singapore-based Hydroponics Company Launches Turnkey Commercial Farming Solution", subtitle: "Tennis legend", description: "Roger Federer is a Swiss professional tennis player. Many players and analysts have called him the greatest male tennis player of all time.", subdescription: "Federer has won 18 Grand Slam singles titles, the most in history for a male tennis player, and held the No. 1 spot in the ATP rankings for a record 237 consecutive weeks and a record total of 302 weeks.", img: "https://www.agritechtomorrow.com/images/upload/images/Aerospring.jpg", payload: {articleId: 1}, articleID: "1"},
  {date: ["31", "Dec"], title: "The Benefits of an Automated Greenhouse in Commercial Growing", subtitle: "Tennis legend", description: "Roger Federer is a Swiss professional tennis player. Many players and analysts have called him the greatest male tennis player of all time.", subdescription: "Federer has won 18 Grand Slam singles titles, the most in history for a male tennis player, and held the No. 1 spot in the ATP rankings for a record 237 consecutive weeks and a record total of 302 weeks.", img: "https://www.agritechtomorrow.com/images/articles/th/14701.jpg", payload: {articleId: 2}, articleID: "2"},
  {date: ["31", "Dec"], title: "A Greenhouse Project in Almeria Reaches Unprecedented Dimensions", subtitle: "Tennis legend", description: "Roger Federer is a Swiss professional tennis player. Many players and analysts have called him the greatest male tennis player of all time.", subdescription: "Federer has won 18 Grand Slam singles titles, the most in history for a male tennis player, and held the No. 1 spot in the ATP rankings for a record 237 consecutive weeks and a record total of 302 weeks.", img: "https://www.agritechtomorrow.com/images/upload/images/greenhouse-for-cold-climates_modular-ceres-greenhouse.jpg", payload: {articleId: 3}, articleID: "3"},
  {date: ["31", "Dec"], title: "6 Types of Greenhouse Poly Film Coverings", subtitle: "Tennis legend", description: "Roger Federer is a Swiss professional tennis player. Many players and analysts have called him the greatest male tennis player of all time.", subdescription: "Federer has won 18 Grand Slam singles titles, the most in history for a male tennis player, and held the No. 1 spot in the ATP rankings for a record 237 consecutive weeks and a record total of 302 weeks.", img: "https://www.agritechtomorrow.com/images/articles/th/14503.jpg", payload: {articleId: 4}, articleID: "4"},
  {date: ["31", "Dec"], title: "The Greatest Greenhouse Built in Spain in One Unit", subtitle: "Tennis legend", description: "Roger Federer is a Swiss professional tennis player. Many players and analysts have called him the greatest male tennis player of all time.", subdescription: "Federer has won 18 Grand Slam singles titles, the most in history for a male tennis player, and held the No. 1 spot in the ATP rankings for a record 237 consecutive weeks and a record total of 302 weeks.", img: "https://www.agritechtomorrow.com/images/articles/th/14462.jpg", payload: {articleId: 5}, articleID: "5"},
  
]

const Articles = () => {
  
  return <>
  <main className='main-articles'>
    {articles.map(element => {
      return <ArticleCard {...element} key={element.articleID}/>
    })}
  </main>
  </>
};
export default Articles;