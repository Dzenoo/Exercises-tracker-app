import React, { useRef, useState, useEffect } from "react";
import WorkoutItem from "./WorkoutItem";
import "./Workout.css";

const Workout = () => {
  const [data, setData] = useState([]);

  // Connect inputs
  const enteredTitle = useRef();
  const enteredLoad = useRef();
  const enteredSet = useRef();

  // Adding function
  const addWorkout = () => {
    // Input values
    const titleValue = enteredTitle.current.value;
    const loadValue = enteredLoad.current.value;
    const setValue = enteredSet.current.value;

    if (titleValue === "" || loadValue === "") {
      alert("Please fill inputs");
    } else {
      setData((prevState) => {
        return [
          ...prevState,
          {
            id: Math.random().toString(),
            title: titleValue,
            load: loadValue,
            sets: setValue,
          },
        ];
      });

      localStorage.setItem("workouts", JSON.stringify(data));
    }
  };

  useEffect(() => {
    const existingWorkout = localStorage.getItem("workouts");
    setData(existingWorkout ? JSON.parse(existingWorkout) : []);
  }, []);

  const removeWorkout = (id) => {
    setData((prevState) => {
      return prevState.filter((item) => item.id !== id);
    });

    localStorage.removeItem("workouts");
  };

  return (
    <div className="main">
      <ul className="menu">
        {data.map((item) => (
          <WorkoutItem
            key={item.id}
            id={item.id}
            title={item.title}
            load={item.load}
            sets={item.sets}
            onRemoveWorkout={() => removeWorkout(item.id)}
          />
        ))}
      </ul>
      <div className="form">
        <h1>Add new workout</h1>
        <input type="text" placeholder="Exercise name" ref={enteredTitle} />
        <input type="number" placeholder="Load" ref={enteredLoad} />
        <input type="number" placeholder="Number of sets" ref={enteredSet} />
        <button onClick={addWorkout}>Add Workout</button>
      </div>
    </div>
  );
};

export default Workout;
