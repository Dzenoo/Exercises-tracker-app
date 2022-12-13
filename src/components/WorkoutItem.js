import React from "react";
import "./WorkoutItem.css";

const WorkoutItem = (props) => {
  return (
    <div id={props.id} className="wrapper_item">
      <div className="text">
        <h1>{props.title}</h1>
        <p>
          <b>Load</b>: {props.load}
        </p>
        <p>
          <b>Sets</b>: {props.sets}
        </p>
      </div>
      <div className="actions">
        <button onClick={props.onRemoveWorkout}>X</button>
      </div>
    </div>
  );
};

export default WorkoutItem;
