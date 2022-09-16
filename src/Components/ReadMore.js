import React, { useState } from "react";
import './page2.css';
  
const ReadMore = ({ children }) => {
  const text = children.split('\n').map(str => <p>{str}</p>);
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
    console.log(text);
  };
  return (
    <p className="text">
      {isReadMore ? text.slice(0, 6) : text}
      <span onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ? "...Show more" : " Show less"}
      </span>
    </p>
  );
};
  
const Content = (script) => {
  return (
    <div className="container">
      <p>
        <ReadMore>
           
         {script.script}
         
        
        </ReadMore>
      </p>
    </div>
  );
};
  
export default Content;