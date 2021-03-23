import React from "react";

interface Props {
  children?: React.ReactNode;
  leftColor?: string;
  rightColor?: string;
}

export default function Background({
  children,
  leftColor = "#273c75",
  rightColor = "#192a56",
}: Props) {
  return (
    <div
      style={{
        display: "flex",
        backgroundImage: `linear-gradient(to left, ${rightColor}, ${leftColor})`,
        width: "100%",
        height: "100vh",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        marginTop: 0,
        position: "relative",
      }}
    >
      <div style={{ width: "6rem" }} />
      {children}
    </div>
  );
}
