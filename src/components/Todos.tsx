import React, { useState, useContext } from "react";
import styles from "../index.module.css";
import Todo from "./Todo";
import DataContext from "../context/data-context";
const Todos: React.FC<{
  note: string;
  setNote: Function;
  deadline: string;
  setDeadline: Function;
  pic: string;
  setPic: Function;
  noteStatus: string;
  setNoteStatus: Function;
}> = ({
  note,
  deadline,
  pic,
  setPic,
  setNote,
  setDeadline,
  noteStatus,
  setNoteStatus,
}) => {
  const ctx = useContext(DataContext);
  const picHandler = (e: any) => {
    let array = [];
    const data = URL.createObjectURL(e.target.files[0]);
    array.push(data);
    setPic(array);
  };

  return (
    <div>
      <header>
        <div className={styles.top}>
          <img src="/schedule.png" alt="logo" />
        </div>
        <h1>Todo App</h1>
      </header>
      <section className={styles.section}>
        <form onSubmit={ctx.submitHandler} className={styles.form}>
          <div className={styles.form1}>
            <div className={styles.note}>
              <label htmlFor="note">Add note:</label>
              <textarea
                name="note"
                id="note"
                placeholder="Add noote..."
                value={note}
                required
                onChange={(e) => setNote(e.target.value)}
              />
            </div>
            <div className={styles.deadline}>
              <label htmlFor="date">Deadline</label>
              <input
                type="datetime-local"
                name="date"
                id="date"
                onChange={(e) => setDeadline(e.target.value)}
                value={deadline}
              />
            </div>
          </div>
          <div className={styles.form2}>
            <div className={styles.status}>
              <label htmlFor="status">Status</label>
              <select
                onChange={(e) => setNoteStatus(e.target.value)}
                className={styles.select}
                required
              >
                <option value="">Please choose a status</option>
                <option value="Todo">Todo</option>
                <option value="Doing">Doing</option>
                <option value="Done">Done</option>
              </select>
            </div>
            <div className={styles.Image}>
              <label htmlFor="picture">Add image (optional)</label>
              <input
                type="file"
                name="picture"
                id="picture"
                accept="image/png, image/jpeg, image/jpg"
                onChange={(e) => picHandler(e)}
                className={styles.file}
              />
            </div>

            <img src={pic} alt="" className={styles.pic} />

            <button type="submit">Add</button>
          </div>
        </form>
      </section>
      <section className={styles.sec}>
        {ctx.data.map((card, cardI) => (
          <Todo key={cardI} data={card} cardI={cardI} />
        ))}
      </section>
    </div>
  );
};

export default Todos;
