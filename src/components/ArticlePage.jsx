import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const ArticlePage = () => {

    const {state} = useLocation();
    const navigate = useNavigate();

    if(!state) navigate("/articles")
    
    return (
        <div>ArticlePage</div>
    )
}

export default ArticlePage