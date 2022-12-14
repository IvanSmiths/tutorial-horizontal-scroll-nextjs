/* eslint-disable @next/next/no-img-element */
import React from "react";

function Works() {
  return (
    <section className="works">
      <div className="work">
        <div className="work__copy">
          <h2>Lorem ipsum dolor sit.</h2>
        </div>
        <div className="work__content-outer">
          <div className="work__content-inner">
            <img src="/work.jpg" alt="work" />
            <span className="work__line"></span>
            <div className="work__details">
              <h3>Next.js</h3>
              <h3>2022</h3>
              <h3>Employee</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Works;
