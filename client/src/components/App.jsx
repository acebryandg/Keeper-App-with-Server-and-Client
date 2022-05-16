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
  }, []);


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
      <CreateArea />

      {notes.map((item, index) => (
        <Note
          key={item._id}
          id={item._id}
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