import React from "react";
import styles from "../index.module.css";
const Task: React.FC<{
  items: {
    list: string;
    deadline: string;
    img: string[];
  };
  itemI: number;
  cardI: number;
}> = ({ items }) => {
  return (
    <div draggable className={styles.card}>
      <div className={styles.taskCard}>
        <p>{items.list}</p>
      </div>
      <span style={{ cursor: "pointer", fontSize: "1.5rem" }}>&times;</span>
    </div>
  );
};

export default Task;
