import React from 'react';
import './Parameters.css';

const Parameters = () => {
  return (
    <div className="container3">
      <ul className="list">
        <div className="param">Remove text</div>
        <div className="param">Image Upscale</div>
        <div className="param">Remove background</div>
        <div className="param">De-noising/Remove splotches</div>
        <div className="param">Image Contrast</div>
        <div className="param">Black & White image</div>
      </ul>
      <button className="generate">Generate Image</button>
    </div>
  )
}

export default Parameters