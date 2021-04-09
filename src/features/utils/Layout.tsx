import React from "react";

interface Props {
  children?: React.ReactNode;
  leftColor?: string;
  rightColor?: string;
  className?: string;
}

export default function Background({
  children,
  // leftColor = "#8e44ad",
  // rightColor = "#9b59b6",
  leftColor = "#273c75",
  rightColor = "#192a56",
  className = "",
}: Props) {
  return (
    <div
      className={className}
      style={{
        display: "flex",
        backgroundImage: `linear-gradient(to left, ${rightColor}, ${leftColor})`,
        width: "100%",
        minHeight: "100vh",
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
