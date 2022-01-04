import React from "react";
import styles from "../index.module.css";
import Task from "./Task";

const Todo: React.FC<{
  data: {
    title: string;
    items: {
      list: string;
      deadline: string;
      img: string[];
    }[];
  };
  cardI: number;
}> = ({ data, cardI }) => {
  // Preventig from returning to old place
  const dragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };
  return (
    <div className={styles.Box} onDragOver={(e) => dragOver(e)}>
      <h3>{data.title} Section</h3>
      {data.items?.map((items, itemI) => (
        <Task items={items} key={itemI} itemI={itemI} cardI={cardI} />
      ))}
    </div>
  );
};

export default Todo;
