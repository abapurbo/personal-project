import React, { useEffect, useRef, useState } from "react";
import "../../index.css";

const MagicCursor = () => {
  const cursorRef = useRef(null);
  const [trail, setTrail] = useState([]);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      setPos({ x: mouseX, y: mouseY });

      const newDot = {
        x: mouseX,
        y: mouseY,
        id: Date.now(),
      };

      setTrail((prev) => [...prev.slice(-10), newDot]);

      setTimeout(() => {
        setTrail((prev) => prev.filter((dot) => dot.id !== newDot.id));
      }, 1000);
    };

    document.addEventListener("mousemove", moveCursor);
    return () => document.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <>
      {/* Main Cursor */}
      <div
        ref={cursorRef}
        className="main-cursor"
        style={{
          left: `${pos.x}px`,
          top: `${pos.y}px`,
          transform: "translate(-50%, -50%)", 
        }}
      ></div>

      {/* Trail dots */}
      {trail.map((dot) => (
        <div
          key={dot.id}
          className="dot z-50"
          style={{
            left: `${dot.x}px`,
            top: `${dot.y}px`,
            transform: "translate(-50%, -50%)", 
          }}
        ></div>
      ))}
    </>
  );
};

export default MagicCursor;