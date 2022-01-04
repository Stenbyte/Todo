import React from "react";

const DataContext: React.Context<{
  data: {
    title: string;
    items: {
      list: string;
      deadline: string;
      img: string[];
    }[];
  }[];
  styling: any;
  submitHandler: any;
  dragStart: any;
  Styling: any;
  dragEnter: any;
}> = React.createContext({
  data: [
    {
      title: "Todo",
      items: [
        { list: "hello there", deadline: "", img: [""] },
        { list: "general kenobi", deadline: "", img: [""] },
      ],
    },
    {
      title: "Doing",
      items: [
        { list: "hello there111", deadline: "", img: [""] },
        { list: "general kenobi111", deadline: "", img: [""] },
      ],
    },
    { title: "Done", items: [] },
  ],
  styling: false,
  submitHandler: () => {},
  dragStart: () => {},
  Styling: () => {},
  dragEnter: () => {},
});

export default DataContext;
