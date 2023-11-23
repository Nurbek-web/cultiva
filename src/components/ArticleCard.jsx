import React from 'react'
import {useNavigate} from 'react-router-dom';

const ArticleCard = ({date, title, subtitle, description, subdescription, img, articleID, payload}) => {

    const navigate = useNavigate();

    const onClick = () => {
        navigate(`/articles/${articleID}`, {state: payload})
    }
    // console.log(img)
  return <a target="_blank" onClick={onClick}>
    <div className="card">
      <div className="header" style={{backgroundImage: `url(${img})`}}>
      </div>
      <span className="date news"><strong>{date[0]}<br/></strong>{date[1]}</span>
      <div className="content">
        <span className="category news"></span>
        <h1>{title}</h1>
        <p>{description}</p>
        <p>{subdescription}</p>
      </div>
    </div>
   </a>
}

export default ArticleCard