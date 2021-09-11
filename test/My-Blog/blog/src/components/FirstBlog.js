import React from 'react'
import './FirstBlog.css';
import MainImage from './programming.jpg'
export default function FirstBlog() {
    return (
        <>
        <div class="first-card">
       <img src={MainImage} alt="image of programming" class="main-image" />
       <div class="card-text">
       <h1 class="firstblog-main">My first project</h1>    
       <p class="text_">Where do I start. When I first code was like 10 years ago...</p> 
        </div>
        </div>
    </>
    )
}
