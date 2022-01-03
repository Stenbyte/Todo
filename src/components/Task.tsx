import React from "react";
import styles from "../index.module.css";
const Task = () => {
  return (
    <div draggable className={styles.card}>
      <div className={styles.taskCard}>
        <p>Task</p>
      </div>
      <span style={{ cursor: "pointer", fontSize: "1.5rem" }}>&times;</span>
    </div>
  );
};

export default Task;
