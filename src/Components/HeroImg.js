import "./HeroImgStyles.css";

import React from "react";
import IntroImg from "../assets/intro-bg.jpg";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="introImg" src={IntroImg} alt="IntroImg" />
      </div>
      <div className="content">
        <p>Hi, I'm Eisa Khan, a 15-year-old full-stack dev.</p>
        <h1 className="text-xl font-semibold">
          <span>I work with </span>
          <span className="text-blue-500" style={{ fontWeight: "bold", color: "#3b82f6" }}>
            <Typewriter
              words={[
                "Full-Stack Development",
                "HTML",
                "XML",
                "CSS",
                "JavaScript",
                "Python",
                "Java",
                "C++",
                "React",
                "Android Studio",
                "React Native",
                "MongoDB",
                "MySQL",
                "Node.js",
                "Express.js",
                "Tailwind CSS",
                "Framer Motion",
                "Three.js",
                "Reanimated",
                "SCSS",
                "Git & GitHub",
                "REST APIs",
                "Next.js",
                "TypeScript",
                "Firebase",
                "Redux",
                "Electron",
                "Tauri",
                "VS Code",
                "Web Animation",
                "Responsive Design",
              ]}
              loop={true}
              cursor
              cursorStyle="⚡"
              typeSpeed={50}
              deleteSpeed={40}
              delaySpeed={1000}
            />
          </span>
        </h1>

        <div>
          <Link to="/projects" className="btn">Projects</Link>
          <Link to="/contact" className="btn btn-light">Contact US</Link>
        </div>

      </div>
    </div>
  );
};

export default HeroImg;
