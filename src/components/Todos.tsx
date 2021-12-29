import React from "react";
import styles from "../index.module.css";
const Todos: React.FC = () => {
  return (
    <div>
      <header>
        <div className={styles.top}>
          <img src="/schedule.png" alt="logo" />
        </div>
        <h1>Todo App</h1>
      </header>
      <section>
        <form>
          <label htmlFor="note">Note:</label>
          <input type="text" name="note" id="note" placeholder="Add noote..." />
          <label htmlFor="date">Deadline</label>
          <input type="datetime-local" name="date" id="date" />
          <select>
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
          />
          <button type="submit">Add</button>
        </form>
      </section>
    </div>
  );
};

export default Todos;
