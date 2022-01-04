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
  removeHandler: any;
}> = React.createContext({
  data: [
    {
      title: "Todo",
      items: [
        { list: "hello there", deadline: "", img: [""] },
        { list: "Add your task", deadline: "", img: [""] },
      ],
    },
    {
      title: "Doing",
      items: [
        {
          list: "Note and Status fields are mandatory to submit your note",
          deadline: "",
          img: [""],
        },
        { list: "You can upload image", deadline: "", img: [""] },
      ],
    },
    { title: "Done", items: [] },
  ],
  styling: false,
  submitHandler: () => {},
  dragStart: () => {},
  Styling: () => {},
  dragEnter: () => {},
  removeHandler: () => {},
});

export default DataContext;
