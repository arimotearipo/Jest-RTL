import React from "react";

const DATA = Array.from({ length: 5 }, (_, i) => ({ id: `item-${i + 1}` }));

export const List = () => {
  const [selected, setSelected] = React.useState(DATA[0].id);

  const handleClick = (id) => {
    setSelected(id);
  };

  return (
    <ul>
      {DATA.map(({ id }) => (
        <li
          key={id}
          className={id === selected ? "selected" : "unselected"}
          onClick={() => handleClick(id)}
        >
          {id.slice(5)}
        </li>
      ))}
    </ul>
  );
};
