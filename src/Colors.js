import React, { useEffect, useRef } from "react";
import { useGlobalContext } from "./context";

const Colors = () => {
  const { location, setIsColorsOpen, tasks, setTasks } = useGlobalContext();
  const colorsRef = useRef(null);

  useEffect(() => {
    const { top, right } = location;
    colorsRef.current.style.left = `${right + 30}px`;
    colorsRef.current.style.top = `${top - 20}px`;
  }, [location]);

  const changeColor = (e) => {
    const color = e.target.style.backgroundColor;
    const { id } = location;
    setTasks(
      tasks.map((task) => {
        return task.id === id ? { ...task, color: color } : task;
      })
    );
    setIsColorsOpen(false);
  };

  return (
    <div ref={colorsRef} className='color-container'>
      <span style={{ backgroundColor: "#ffd6a5" }} onClick={changeColor}></span>
      <span style={{ backgroundColor: "#fdffb6" }} onClick={changeColor}></span>
      <span style={{ backgroundColor: "#caffbf" }} onClick={changeColor}></span>
      <span style={{ backgroundColor: "#9bf6ff" }} onClick={changeColor}></span>
      <span style={{ backgroundColor: "#a0c4ff" }} onClick={changeColor}></span>
      <span style={{ backgroundColor: "#bdb2ff" }} onClick={changeColor}></span>
      <span style={{ backgroundColor: "#ffc6ff" }} onClick={changeColor}></span>
      <span style={{ backgroundColor: "#ffe5d9" }} onClick={changeColor}></span>
      <span style={{ backgroundColor: "#d3f8e2" }} onClick={changeColor}></span>
    </div>
  );
};

export default Colors;
