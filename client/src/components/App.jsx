import React, {useState, useEffect, useRef} from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import CreateArea from './CreateArea';
import axios from 'axios';

function App() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/').then((response) => {
      setNotes(response.data);
    });
    //console.log('Rendered from useeffect')
  }, []);

  const handleSubmit = (noteTitle, noteContent, noteDate) => {
    const data = {
      title: noteTitle, 
      content: noteContent,
      date: noteDate
    }
    axios.post(`http://localhost:4000/`, data)
      .then(response => {
        console.log(response.data)
      })
  }

  const deleteItem = (id) => {
    axios
      .delete('http://localhost:4000/delete/' + id)
      .then((response) => {
        console.log(response.data)
        setNotes((prevValue) => {
          return prevValue.filter((item) => {
            return item._id !== id;
          })
        })
      });
  };

  return (
    <div>
      <Header />
      <CreateArea 
        onAdd={handleSubmit}
      />

      {notes.map((item, index) => (
        <Note
          key={item._id}
          id={item._id}
          noteTitle={item.title}
          noteContent={item.content}
          date={item.date}
          onDelete={deleteItem}
          
        />
      ))}

      <Footer />
    </div>
  );
}

export default App;