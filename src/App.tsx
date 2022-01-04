import React, { useState, useEffect, useContext, useRef } from "react";
import Todos from "./components/Todos";
import DataContext from "./context/data-context";
import styles from "./index.module.css";

function App() {
  const ctx = useContext(DataContext);
  const [card, setCard] = useState(ctx.data);
  // Params type
  type Group = {
    cardI: number;
    itemI: number;
  };
  const dragItem = useRef<any>();
  const dragNode = useRef<any>();

  // States for submithandler
  const [note, setNote] = useState<string>("");
  const [deadline, setDeadline] = useState<string>("");
  const [noteStatus, setNoteStatus] = useState<string>("");
  const [pic, setPic] = useState<any>(undefined);
  const [styling, setStyling] = useState(ctx.styling);
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
        setNoteStatus("");
    }
  }, [noteStatus]);
  // Getting data from storage
  useEffect(() => {
    const storage = sessionStorage.getItem("items");
    if (storage) {
      setCard(JSON.parse(storage));
    }
  }, []);

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
      // Setting dummy storage
      sessionStorage.setItem("items", JSON.stringify(newCard));
      return newCard;
    });
    // Reseting states
    setNote("");
    setDeadline("");
    setNoteStatus("");
    setPic(undefined);
  };
  // Styling function, on dragstart
  const Styling = (params: Group) => {
    const currentItem = dragItem.current;
    if (
      params.cardI === currentItem.cardI &&
      params.itemI === currentItem.itemI
    ) {
      return `${styles.cur} + ${styles.card}`;
    }
    return styles.card;
  };
  // Start dragging
  const dragStart = (e: any, params: Group) => {
    dragItem.current = params;
    dragNode.current = e.target;

    dragNode.current.addEventListener("dragend", dragEnd);
    // Displaying different background colors;
    setTimeout(() => {
      setStyling(true);
    }, 0);
  };
  // Dragend function
  const dragEnd = () => {
    setStyling(false);
    // resetind data
    dragItem.current = undefined;
    dragNode.current.removeEventListener("dragend", dragEnd);
    dragNode.current = null;
  };
  const dragEnter = (e: any, params: Group) => {
    const current = dragItem.current;
    if (e.target !== dragNode.current) {
      // Update state

      setCard((prev) => {
        const newCard = JSON.parse(JSON.stringify(prev));

        newCard[params.cardI].items.splice(
          params.itemI,
          0,
          newCard[current?.cardI].items.splice(current?.itemI, 1)[0]
        );
        sessionStorage.setItem("items", JSON.stringify(newCard));
        // Updating from current to target
        dragItem.current = params;
        return newCard;
      });
    }
  };
  const removeHandler = (e: any, params: Group) => {
    if (!e.target) return;

    setCard((prev) => {
      const newCard = JSON.parse(JSON.stringify(prev));
      newCard[params.cardI].items.splice(params.itemI, 1);
      // updating storage
      sessionStorage.setItem("items", JSON.stringify(newCard));
      return newCard;
    });
  };
  return (
    <div className="App">
      <DataContext.Provider
        value={{
          data: card,
          styling: styling,
          submitHandler: submitHandler,
          dragStart: dragStart,
          Styling: Styling,
          dragEnter: dragEnter,
          removeHandler: removeHandler,
        }}
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
