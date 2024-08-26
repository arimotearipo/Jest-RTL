import React from "react";

export const TextInput = ({ onSubmit }) => {
  const [value, setValue] = React.useState("");

  const handleSubmit = () => {
    onSubmit(value);
    setValue("");
  };

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Enter text"
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};
