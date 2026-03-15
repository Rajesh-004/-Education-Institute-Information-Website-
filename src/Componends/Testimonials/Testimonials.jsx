import React, { useRef } from "react";
import "./Testimonials.css";
import next_icon from "../../assets/next-icon.png";
import back_icon from "../../assets/back-icon.png";
import user_1 from "../../assets/user-1.png";
import user_2 from "../../assets/user-2.png";
import user_3 from "../../assets/user-3.png";
import user_4 from "../../assets/user-4.png";

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;

  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };

  return (
    <div className="testimonials">
      <img src={next_icon} alt="" className="next-btn" onClick={slideForward} />
      <img
        src={back_icon}
        alt=""
        className="back-btn"
        onClick={slideBackward}
      />
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_1} alt="" />
                <div>
                  <h3>St.Mary</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                I am proud to have graduated from Educity Education Institute.
                The trainers were highly supportive, and the practical training
                helped me gain real industry knowledge and confidence.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_2} alt="" />
                <div>
                  <h3>Kunal K</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Graduating from Educity Education Institute was a great
                milestone in my career. The institute provided excellent
                coaching, placement support, and a motivating learning
                environment.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_3} alt="" />
                <div>
                  <h3>Basilica M</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                Educity Education Institute played a key role in shaping my
                future. The quality teaching, hands-on projects, and personal
                guidance made my learning journey highly successful and
                rewarding.
              </p>
            </div>
          </li>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user_4} alt="" />
                <div>
                  <h3>Magnus K</h3>
                  <span>Edusity, USA</span>
                </div>
              </div>
              <p>
                I sincerely thank Educity Education Institute for their
                outstanding training and mentorship. Their structured curriculum
                and career support helped me achieve my professional goals.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
