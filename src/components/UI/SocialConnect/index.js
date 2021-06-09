import React from "react";
import socialIcons from "../../../assets/social-icons";
import "./style.css";

/**
 * @author
 * @function SocialConnect
 **/

const SocialConnect = (props) => {
  return (
    <div className="socialConnect" style={props.style}>
      <span className="textColor font-12">Follow me on: </span>
      <a className="socialLink" href="https://web.facebook.com/mdrakibulhassan.rakib6/">
        <img src={socialIcons.facebook} alt="" />
      </a>
      <a className="socialLink" href="https://www.instagram.com/mdrakibulhassan.rakib/">
        <img src={socialIcons.instagram} alt="" />
      </a>
      <a className="socialLink" href="https://github.com/rakibulhasan933">
        <img src={socialIcons.github} alt="" />
      </a>
      <a className="socialLink" href="https://www.linkedin.com/in/md-rakibul-hasan-44b7b0201/">
        <img src={socialIcons.linkedin} alt="" />
      </a>
    </div>
  );
};

export default SocialConnect;
