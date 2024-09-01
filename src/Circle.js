import { forwardRef } from "react";

const Circle = forwardRef((props, ref) => {
  return (
    <div
      className="box"
      style={{
        width: "70px",
        height: "70px",
        backgroundColor: "red",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: "30px",
          height: "30px",
          backgroundColor: "skyblue",
          borderRadius: "50%",
          //   left: 0,
          //   top: 0,
        }}
        ref={ref}
      ></div>
    </div>
  );
});

export default Circle;
