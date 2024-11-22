import React from "react";
import aboutUsImage from "../../Assets/aboutUsImage.webp";

const About = () => {
  return (
    <div className="hero min-h-screen">
  <div className="hero-content flex-col lg:flex-row">
    <img
      src={aboutUsImage}
      className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Nerd Academy!</h1>
      <p className="py-6">
      The purpose of the Nerd Academy project is to develop an engaging and user-friendly EdTech platform that provides high-quality programming courses. It aims to bridge the gap between aspiring learners and expert instructors, offering a seamless experience for learning, teaching, and skill-building. The platform fosters a community where students can access affordable courses, take quizzes, and explore career paths, while instructors can share their expertise.
      </p>
    </div>
  </div>
</div>
  );
};

export default About;
