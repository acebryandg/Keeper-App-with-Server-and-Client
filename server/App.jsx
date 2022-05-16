import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  const addNoteItem = (inputTitle, inputContent) => {
    setNotes((prevItems) => {
      return [...prevItems, { title: inputTitle, content: inputContent }];
    });
  };

  const deleteItem = (id) => {
    setNotes((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNoteItem} />

      {notes.map((item, index) => (
        <Note
          key={index}
          id={index}
          noteTitle={item.title}
          noteContent={item.content}
          onDelete={deleteItem}
        />
      ))}

      <Footer />
    </div>
  );
}

export default App;
