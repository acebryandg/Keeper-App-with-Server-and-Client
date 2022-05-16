import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';


function Note(props) {
  return (
    <div className="note">
      <h1>{props.noteTitle}</h1>
      <p>{props.noteContent}</p>
      <button
        onClick={() => {
          props.onDelete(props.id)
          }}
      >
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;
