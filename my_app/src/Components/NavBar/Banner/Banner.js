import React from 'react';
import './Banner.css';
function Banner() {
  return (
  <div className='banner'>
        <div className="content">
            <h1 className="title">Movie Name</h1>
            <div className="banner_buttons">
                <button className="button">Play</button>
                <button className="button">My List</button>
            </div>
            <h1 className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum minima quis hic, iusto atque consectetur eius fuga esse quibusdam labore laudantium cumque facere. Perspiciatis, quo corporis voluptas aspernatur quod nesciunt?
            </h1>
        </div>
        <div className="fade_bottom"></div>

  </div>);
}

export default Banner;
