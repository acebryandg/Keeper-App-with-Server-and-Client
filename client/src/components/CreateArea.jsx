import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';
import axios from "axios";

function CreateArea(props) {
  const [inputTitle, setInputTitle] = useState("");
  const [inputContent, setInputContent] = useState("");
  const [isExpanded, setIsExpanded] = useState(false);
  

  const handleTitleChange = (event) => {
    setInputTitle(event.target.value);
  };

  const handleContentChange = (event) => {
    setInputContent(event.target.value);
  };

  const expandInput = () => {
    setIsExpanded(true);
  }



  const handleSubmit = (noteTitle, noteContent) => {
    const data = {
      title: noteTitle, 
      content: noteContent
    }
    axios.post(`http://localhost:4000/`, data)
      .then(res => {
        console.log(res);
        console.log(res.data);
        console.log("dsljds");   
      })
  }
  

  return (
    <div>
      <form className="create-note" onSubmit={(e) => {

                e.preventDefault();
                handleSubmit(inputTitle, inputContent);
                setInputContent("");
                setInputTitle("");
                
            }}>
        {isExpanded === true && 
            <input 
            name="title"
            placeholder="Title"
            onChange={handleTitleChange}
            
            value={inputTitle}
            
            />
        }
        
        <textarea
          name="content"
          placeholder="Take a note..."
          rows={isExpanded === true ? 3 : 1}
          onChange={handleContentChange}
          onClick={expandInput}
          value={inputContent}
          
        />
        <Zoom in={isExpanded === true ?? true}>
            <Fab type="submit">
            <AddIcon />
            </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
