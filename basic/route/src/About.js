import React from "react";
import { useLocation } from "react-router-dom";
const About = () => {
  const location=useLocation(); 
  console.log(location);
  return (
    <div>
      <h1>설명 화면</h1>
    </div>
  );
};
export default About;
