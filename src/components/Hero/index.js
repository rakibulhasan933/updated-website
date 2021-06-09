import React from "react";
import me from "../../assets/images/me-right.png";
import Button from "../UI/Button";
import "./style.css";

/**
 * @author
 * @function Hero
 **/

const Hero = (props) => {
  return (
    <div className="container" style={{ marginTop: "70px" }}>
      <div className="flexRow flexCol justify-sb align-center">
        <div data-aos="fade-right">
          <p className="uppercase bold-500 textColor ls-1 mtb-10">
            <span className="primaryColor">Hello,</span> I am Rakibul Hasan
          </p>
          <h1 className="textColor ls-1 mtb-10">Software Developer</h1>
          <p className="font-12 grey mtb-10">FullStack Developer using JS.</p>
          <div className="flexRow" style={{ margin: "30px 0" }}>
            <div>
              <a href="https://www.linkedin.com/in/md-rakibul-hasan-44b7b0201/">
                <button style={{
                  boxSizing: "border-box",
                  padding: "10px 20px",
                  background: "green",
                  color: "blue",
                  display: "inline-block",
                  borderRadius: "20px",
                  boxShadow: "#6dba6d 0px 0px 10px 0px",
                  border: "1px solid",
                  borderColor: "transparent",
                  fontSize: 12,
                  letterSpacing: "1px",
                }}> Hire me</button>
              </a>
            </div>
            <div className="mlr-10">
              <Button label="Download CV" inverse={true} />
            </div>
          </div>
        </div>
        <div data-aos="fade-left">
          <div className="meRightImgContainer">
            <img src={me} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
