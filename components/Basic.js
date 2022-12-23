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
          scrub: 1,
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
      <div className="works__outer" ref={triggerRef}>
        <div className="works" ref={scrollRef}>
          <div className="work">
            <div className="work__copy">
              <h2>Section 1</h2>
            </div>
            <div className="work__content-outer">
              <div className="work__content-inner"></div>
            </div>
          </div>
          <div className="work">
            <div className="work__copy">
              <h2>Section 2</h2>
            </div>
            <div className="work__content-outer">
              <div className="work__content-inner"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Basics;
