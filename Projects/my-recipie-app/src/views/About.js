import React from "react";
import "./About.css";
import profilepic from "../shared/images/profile.jpg";
const About = () => {
  return (
    <div class="container">
      <div class="content-wrapper">
        <div class="two-column-wrapper">
          <div class="profile-image-wrapper">
            <img src={profilepic} alt="There should be the developers here" />
          </div>

          <div class="profile-content-wrapper">
            <h1 className="thanks">Hi, thanks for visiting!</h1>
            <p>
              If you wish to contact the deveolper of this site. Please send an
              e-mail to : andres.parrab@gmail.com
            </p>
            <p>
              “While one may encounter many defeats, one must not be defeated.”
              ― Maya Angelou
            </p>
            <p>
              “Defeat is for the valiant. Only they will know the honour of
              losing and the joy of winning." ― Paulo Coelho, Manuscript Found
              in Accra
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
