import React from 'react'
import {useNavigate} from 'react-router-dom';

const ArticleCard = ({date, title, subtitle, description, subdescription, img, articleID, payload}) => {

    const navigate = useNavigate();

    const onClick = () => {
        navigate(`/articles/${articleID}`, {state: payload})
    }
  return <a target="_blank" onClick={onClick}>
    <div class="card">
      <div class="header" style={{backgroundImage: img}}>
      </div>
      <span class="date news"><strong>{date[0]}<br/></strong>{date[1]}</span>
      <div class="content">
        <span class="category news"></span>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <p>{description}</p>
        <p>{subdescription}</p>
      </div>
    </div>
   </a>
}

export default ArticleCard