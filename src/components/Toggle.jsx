import React from "react";

export const Toggle = () => {
  const [isOn, setIsOn] = React.useState(false);

  const handleClick = () => {
    setIsOn(!isOn);
  };

  return (
    <div>
      <button onClick={handleClick}>{isOn ? "Toggle off" : "Toggle on"}</button>
      {isOn && <p>The toggle is on!</p>}
    </div>
  );
};
