import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import axios from "axios";

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/').then((response) => {
      setNotes(response.data);
      
    });
  }, [notes])

  // setNotes((prevItems) => {
  //   return [...prevItems, { title: inputTitle, content: inputContent }];
  //   });
  // };

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
      <CreateArea />

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
