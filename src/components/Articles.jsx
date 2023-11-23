import React from 'react';
import { Card } from 'antd';
import "./Articles.css"

const Articles = () => (
  <>
      <div className="main">
    <h1>Educational Articles</h1>
    <ul className="cards">
      <li className="cards_item">
        <div className="card">
          <div className="card_image"><img src="https://www.agritechtomorrow.com/images/upload/images/Aerospring.jpg" /></div>
          <div className="card_content">
            <h2 className="card_title">Singapore-based Hydroponics Company Launches Turnkey Commercial Farming Solution</h2>
            <button className="btn card_btn">Read More</button>
          </div>
        </div>
      </li>
      <li className="cards_item">
        <div className="card">
          <div className="card_image"><img src="https://www.agritechtomorrow.com/images/articles/th/14701.jpg" /></div>
          <div className="card_content">
            <h2 className="card_title">The Benefits of an Automated Greenhouse in Commercial Growing</h2>
            <button className="btn card_btn">Read More</button>
          </div>
        </div>
      </li>
      <li className="cards_item">
        <div className="card">
          <div className="card_image"><img src="https://www.agritechtomorrow.com/images/upload/images/image7(1).jpg" /></div>
          <div className="card_content">
            <h2 className="card_title">A Greenhouse Project in Almeria Reaches Unprecedented Dimensions</h2>
              <button className="btn card_btn">Read More</button>
          </div>
        </div>
      </li>
      <li className="cards_item">
        <div className="card">
          <div className="card_image"><img src="https://www.agritechtomorrow.com/images/articles/th/14503.jpg" /></div>
          <div className="card_content">
            <h2 className="card_title">6 Types of Greenhouse Poly Film Coverings</h2>
            <button className="btn card_btn">Read More</button>
          </div>
        </div>
      </li>
      <li className="cards_item">
        <div className="card">
          <div className="card_image"><img src="https://www.agritechtomorrow.com/images/articles/th/14462.jpg" /></div>
          <div className="card_content">
            <h2 className="card_title">The Greatest Greenhouse Built in Spain in One Unit</h2>
            <button className="btn card_btn">Read More</button>
          </div>
        </div>
      </li>
      <li className="cards_item">
        <div className="card">
          <div className="card_image"><img src="https://www.agritechtomorrow.com/images/articles/th/14271.jpg" /></div>
          <div className="card_content">
            <h2 className="card_title">Shedding Light on Diffused Glass Vs Clear Glass - Greenhouse</h2>
            <button className="btn card_btn">Read More</button>
          </div>
        </div>
      </li>
      <li className="cards_item">
        <div className="card">
          <div className="card_image"><img src="https://www.agritechtomorrow.com/images/upload/images/greenhouse-for-cold-climates_modular-ceres-greenhouse.jpg" /></div>
          <div className="card_content">
            <h2 className="card_title">Best Year-Round Greenhouses for Cold Climates</h2>
            <button className="btn card_btn">Read More</button>
          </div>
        </div>
      </li>
      <li className="cards_item">
        <div className="card">
          <div className="card_image"><img src="https://www.agritechtomorrow.com/images/articles/th/13589.jpg" /></div>
          <div className="card_content">
            <h2 className="card_title">2022 Top Article - A Guide To Planning A Commercial Aquaponics Greenhouse</h2>
            <button className="btn card_btn">Read More</button>
          </div>
        </div>
      </li>
      <li className="cards_item">
        <div className="card">
          <div className="card_image"><img src="https://www.agritechtomorrow.com/images/upload/images/UbiQD.jpg" /></div>
          <div className="card_content">
            <h2 className="card_title">NASA Funds Scale-Up of Fluorescent Greenhouse Roofing Technology</h2>
            <button className="btn card_btn">Read More</button>
          </div>
        </div>
      </li>
    </ul>
  </div>
  </>
  
);
export default Articles;