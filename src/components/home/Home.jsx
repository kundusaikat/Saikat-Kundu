import "./Home.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";
export const Home = () => {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: [
        " Full Stack Web Developer",
        " MERN Stack Developer",
        "n ECE Engineer",
        " Problem Solver",
      ],
    });
  }, []);
  return (
    <div className="home" id="home">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/profile_pic.png" alt="Profile pic" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Saikat Kundu</h1>
          <h3>
            A<span ref={textRef}></span>
          </h3>
        </div>
        <a href="#about">
          <img src="assets/arrow-down-icon-png.png" alt="arrow" />
        </a>
      </div>
    </div>
  );
};
