import React from "react";
import styles from "../index.module.css";
import Task from "./Task";

const Todo = () => {
  return (
    <div className={styles.Box}>
      <h3> Section</h3>
      {/* {data.items?.map((task, i) => (
    <Task task={task} key={i} i={i} grpI={grpI} />
  ))} */}
      <Task />
    </div>
  );
};

export default Todo;
