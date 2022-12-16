/* eslint-disable @next/next/no-img-element */
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

function Basics() {
  gsap.registerPlugin(ScrollTrigger);

  const scrollRef = useRef(null);
  const triggerRef = useRef(null);

  useEffect(() => {
    const pin = gsap.fromTo(
      scrollRef.current,
      {
        translateX: 0,
      },
      {
        translateX: "-100vw",
        ease: "none",
        duration: 0.5,
        scrollTrigger: {
          trigger: triggerRef.current,
          start: "top top",
          end: "6000 top",
          scrub: 0.6,
          pin: true,
        },
      }
    );
    return () => {
      pin.kill();
    };
  }, []);
  return (
    <section>
      <div ref={triggerRef}>
        <div ref={scrollRef} className="works">
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
        </div>
      </div>
    </section>
  );
}

export default Basics;
