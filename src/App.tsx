import React, { useState, useContext } from "react";
import Todos from "./components/Todos";
import DataContext from "./context/data-context";

function App() {
  const ctx = useContext(DataContext);
  const [card, setCard] = useState(ctx.data);
  const [note, setNote] = useState<string>("");
  const [deadline, setDeadline] = useState<string>("");
  const [noteStatus, setNoteStatus] = useState<string>("");
  const [pic, setPic] = useState<any>([]);

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!note && noteStatus) {
      return;
    }
    let newItem = {
      list: note,
      deadline: deadline,
      img: pic,
    };
    setCard((prev) => {
      let newCard = JSON.parse(JSON.stringify(prev));
      newCard[0].items.push(newItem);
      return newCard;
    });
  };
  return (
    <div className="App">
      <DataContext.Provider
        value={{ data: card, submitHandler: submitHandler }}
      >
        <Todos
          note={note}
          setNote={setNote}
          deadline={deadline}
          setDeadline={setDeadline}
          pic={pic}
          setPic={setPic}
          noteStatus={noteStatus}
          setNoteStatus={setNoteStatus}
        />
      </DataContext.Provider>
    </div>
  );
}

export default App;
