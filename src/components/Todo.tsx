import React, { useContext } from "react";
import styles from "../index.module.css";
import Task from "./Task";
import DataContext from "../context/data-context";

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
  const ctx = useContext(DataContext);
  // Preventig from returning to old place
  const dragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };
  return (
    <div
      className={styles.Box}
      onDragOver={(e) => dragOver(e)}
      onDragEnter={
        ctx.styling && !data.items.length
          ? (e) => ctx.dragEnter(e, { cardI, itemI: 0 })
          : undefined
      }
    >
      <h3>{data.title} Section</h3>
      {data.items?.map((items, itemI) => (
        <Task items={items} key={itemI} itemI={itemI} cardI={cardI} />
      ))}
    </div>
  );
};

export default Todo;
