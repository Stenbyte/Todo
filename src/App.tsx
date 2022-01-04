import React, { useState, useEffect, useContext } from "react";
import Todos from "./components/Todos";
import DataContext from "./context/data-context";

function App() {
  const ctx = useContext(DataContext);
  const [card, setCard] = useState(ctx.data);

  // States for submithandler
  const [note, setNote] = useState<string>("");
  const [deadline, setDeadline] = useState<string>("");
  const [noteStatus, setNoteStatus] = useState<string>("");
  const [pic, setPic] = useState<any>(undefined);
  // state for switching Todo, doing, done sections
  const [status, setStatus] = useState<any>(0);

  useEffect(() => {
    switch (noteStatus) {
      case "Todo":
        setStatus(0);
        break;
      case "Doing":
        setStatus(1);
        break;
      case "Done":
        setStatus(2);
        break;
      default:
        console.log(noteStatus);
    }
  }, [noteStatus]);

  // submit Handler
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!note && noteStatus) {
      return;
    }
    // creating new object for items
    let newItem = {
      list: note,
      deadline: deadline,
      img: pic,
    };
    setCard((prev) => {
      // Deep coopy
      let newCard = JSON.parse(JSON.stringify(prev));
      // Pushing to particular section
      newCard[status].items.push(newItem);
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
