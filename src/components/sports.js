import React from "react";
import tennis from "../assets/tennis.jpeg";
import swimming from "../assets/swimming.jpeg";
import fitness from "../assets/fitness.jpeg";
import football from "../assets/football.jpeg";
import badminton from "../assets/badminton.jpeg";

function Sports() {
  return (
    <div className="box md-width-full w-47-5 sports-box">
      <h3>Most Demanding Sports</h3>
      <div>
        <div className="flex mt-1-5 align-baseline">
          <div className="flex">
            <img src={swimming} alt="swimming"></img>
            <div>
              <span className="sports-title">Swimming</span>
              <div>
                <div className="scale-emp-hor">
                  <div className="scale-full-hor swim"></div>
                </div>
              </div>
            </div>
          </div>
          <span className="demand">112</span>
        </div>
        <div className="flex mt-1-5 align-baseline">
          <div className="flex">
            <img src={football} alt="football"></img>
            <div>
              <span className="sports-title">Football</span>
              <div>
                <div className="scale-emp-hor">
                  <div className="scale-full-hor football"></div>
                </div>
              </div>
            </div>
          </div>
          <span className="demand">42</span>
        </div>
        <div className="flex mt-1-5 align-baseline">
          <div className="flex">
            <img src={tennis} alt="tennis"></img>
            <div>
              <span className="sports-title">Tennis</span>
              <div>
                <div className="scale-emp-hor">
                  <div className="scale-full-hor tennis"></div>
                </div>
              </div>
            </div>
          </div>
          <span className="demand">38</span>
        </div>
        <div className="flex mt-1-5 align-baseline">
          <div className="flex">
            <img src={badminton} alt="badminton"></img>
            <div>
              <span className="sports-title">Badminton</span>
              <div>
                <div className="scale-emp-hor">
                  <div className="scale-full-hor badminton"></div>
                </div>
              </div>
            </div>
          </div>
          <span className="demand">31</span>
        </div>
        <div className="flex mt-1-5 align-baseline">
          <div className="flex">
            <img src={fitness} alt="fitness"></img>
            <div>
              <span className="sports-title">Fitness</span>
              <div>
                <div className="scale-emp-hor">
                  <div className="scale-full-hor fitness"></div>
                </div>
              </div>
            </div>
          </div>
          <span className="demand">23</span>
        </div>
      </div>
    </div>
  );
}

export default Sports;
