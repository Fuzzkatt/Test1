import React from 'react';
import './Image.css';
const Image = () => {
  return (
    <div className="container2">
     <img src="http://navparivartan.in/wp-content/uploads/2018/11/placeholder.png" alt="" className="photograph"/> 
     
      <input type="file" accept="image" className="chooseFile" id="file"/>
      <label for="file">Choose a file</label> 
     </div>
  )
}

export default Image
