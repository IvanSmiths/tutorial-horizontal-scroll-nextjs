/* eslint-disable @next/next/no-img-element */
import React from "react";

function Works() {
  return (
    <section className="works">
      <div className="work">
        <div className="work__copy">
          <h2>Lorem ipsum dolor sit.</h2>
        </div>
        <div className="work__content">
          <img src="/work.jpg" alt="work" />
        </div>
      </div>
    </section>
  );
}

export default Works;
