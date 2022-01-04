import React, { useContext } from "react";
import styles from "../index.module.css";
import DataContext from "../context/data-context";
const Task: React.FC<{
  items: {
    list: string;
    deadline: string;
    img: string[];
  };
  itemI: number;
  cardI: number;
}> = ({ items, cardI, itemI }) => {
  const ctx = useContext(DataContext);
  return (
    <div
      draggable
      onDragStart={(e) => ctx.dragStart(e, { cardI, itemI })}
      onDragEnter={
        ctx.styling
          ? (e) => {
              ctx.dragEnter(e, { cardI, itemI });
            }
          : undefined
      }
      className={ctx.styling ? ctx.Styling({ cardI, itemI }) : styles.card}
    >
      <div className={styles.taskCard}>
        <p>{items.list}</p>
        {items.img && <img src={items.img[0]} alt="" />}
        {items.deadline && (
          <span>
            Deadline:{" "}
            {new Date(items.deadline).toLocaleDateString(undefined, {
              hour12: false,
              hour: "2-digit",
              minute: "2-digit",
            })}{" "}
          </span>
        )}
      </div>
      <span style={{ cursor: "pointer", fontSize: "1.5rem" }}>&times;</span>
    </div>
  );
};

export default Task;
