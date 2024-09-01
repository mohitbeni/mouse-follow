import { useRef } from "react";
import Circle from "./Circle";
import "./styles.css";

export default function App() {
  const documentRef = useRef();
  const circleRef = useRef();

  const handleMouseOver = (e) => {
    const circle = circleRef.current;
    setTimeout(() => {
      circle.style.left = `${e.clientX}px`;
      circle.style.top = `${e.clientY}px`;
    }, 300);

    console.log("circleRef", circleRef);
  };
  return (
    <div ref={documentRef} className="App" onMouseMove={handleMouseOver}>
      <div style={{ height: "100vh", position: "relative" }}>
        <Circle ref={circleRef} />
      </div>
    </div>
  );
}
