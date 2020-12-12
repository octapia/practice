import React from "react";
import './social.css'

function Social() {
  return (
    <div className="social">
      <a target="_blank" href="http://www.facebook.com/tahid.2" className="facebook">
      <i className="fab fa-facebook-square"></i> Facebook
      </a>
      <a target="_blank" href="http://www.github.com/Tahidur-Rahman" className="github">
      <i className="fab fa-github-square"></i> Github
      </a>
      <a target="_blank" href="http://www.linkedin.com/in/Tahidur-Rahman" className="linkedin">
      <i className="fab fa-linkedin"></i> Linkedin
      </a>
    </div>
  );
}

export default Social;
