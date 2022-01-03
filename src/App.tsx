import React, { useState, useContext } from "react";
import Todos from "./components/Todos";
import DataContext from "./context/data-context";

function App() {
  const ctx = useContext(DataContext);
  const [card, setCard] = useState(ctx.data);
  // console.log(card);

  return (
    <div className="App">
      <DataContext.Provider value={{ data: card }}>
        <Todos />
      </DataContext.Provider>
    </div>
  );
}

export default App;
