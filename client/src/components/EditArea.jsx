import React, { useState, useEffect } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import CheckIcon from '@mui/icons-material/Check';
import Zoom from '@mui/material/Zoom';
import Modal from '@mui/material/Modal';

import axios from "axios";
import { styled } from "@mui/material";


function EditArea (props) {
  const [noteTitle, setNoteTitle] = useState(props.title);
  const [noteContent, setNoteContent] = useState(props.content);

  useEffect(()=>{
    setNoteTitle(props.title);
    setNoteContent(props.content)
   },[props.title, props.content])

  const handleTitleChange = (event) => {
    setNoteTitle(event.target.value)
    console.log(noteTitle);
    
  }

  const handleClick = (event) => {
  }

  const handleContentChange = (event) => {
    setNoteContent(event.target.value)
    console.log(noteContent);
  }

  return (
    <div>
      <Modal
       open={props.modalState}
      >
        <form 
        className="edit-note"
        >
          <input 
            name="title"
            value={noteTitle}
            onChange={handleTitleChange}
          
          />
          <textarea
            name="content"
            value={noteContent}
            onChange={handleContentChange}
          />
              <Fab 
              type="submit"
              onClick={handleClick}
              >
              <CheckIcon />
              </Fab>
          
        </form>
      
      </Modal>
    </div>
  )



  
}

export default EditArea;
