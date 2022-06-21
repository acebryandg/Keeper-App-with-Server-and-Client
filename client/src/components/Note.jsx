import React, {useState} from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';


function Note(props) {


  const handleClickUpdate = () => {
    console.log('hi');
  }


  return (
    <div className="note">
      <h1>{props.noteTitle}</h1>
      <span className="date">{props.date}</span>
      <p>{props.noteContent}</p>
      <DeleteIcon className="deleteIcon" fontSize="small" onClick={() => {
         props.onDelete(props.id)
      }} />
      <EditIcon className="editIcon" fontSize="small" onClick={props.onEdit} />
      
      
  
    </div>
  );
}

export default Note;
