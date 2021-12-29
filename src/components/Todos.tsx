import React, { useState } from "react";
import styles from "../index.module.css";
const Todos: React.FC = () => {
  const [note, setNote] = useState<string>("");
  const [deadline, setDeadline] = useState<string>("");
  const [noteStatus, setNoteStatus] = useState<string>("");
  const [pic, setPic] = useState<any>([]);

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(note);
    console.log(deadline);
    console.log(noteStatus);
    // console.log(pic);
  };
  const picHandler = (e: any) => {
    // e.preventDefault();
    // console.log(URL.createObjectURL(e.target.files[0]));

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
        <form onSubmit={submitHandler} className={styles.form}>
          <label htmlFor="note">Note:</label>
          <textarea
            name="note"
            id="note"
            placeholder="Add noote..."
            value={note}
            onChange={(e) => setNote(e.target.value)}
          />
          <label htmlFor="date">Deadline</label>
          <input
            type="datetime-local"
            name="date"
            id="date"
            onChange={(e) => setDeadline(e.target.value)}
            value={deadline}
          />
          <select
            onChange={(e) => setNoteStatus(e.target.value)}
            className={styles.select}
          >
            <option value="">Please choose a status</option>
            <option value="Todo">Todo</option>
            <option value="Doing">Doing</option>
            <option value="Done">Done</option>
          </select>
          <label htmlFor="picture">Add image (optional)</label>
          <input
            type="file"
            name="picture"
            id="picture"
            accept="image/png, image/jpeg, image/jpg"
            onChange={(e) => picHandler(e)}
          />
          <img src={pic} alt="" className={styles.pic} />
          <button type="submit">Add</button>
        </form>
      </section>
    </div>
  );
};

export default Todos;
