import React from 'react'
import { useParams, useNavigate, useLocation } from 'react-router-dom';

const ArticlePage = ({ match }) => {

    const {state} = useLocation();
    const navigate = useNavigate();
    const { productId } = useParams();

    if(!state) navigate("/articles")
    console.log(state);

    return (
        <div>ArticlePage</div>
    )
}

export default ArticlePage