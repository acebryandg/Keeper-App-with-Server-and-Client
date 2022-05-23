import React, {useState} from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';


function Note(props) {

  const [buttonDisplay, setButtonDisplay] = useState("");
  const [saveButtonDisplay, setSaveButtonDisplayed] = useState("none");

  const handleClickUpdate = () => {
    setButtonDisplay("none");
    setSaveButtonDisplayed("");
  }

  const handleClickSave = () => {
    setButtonDisplay("");
    setSaveButtonDisplayed("none");
  }


  return (
    <div className="note">
      <h1 contentEditable="true">{props.noteTitle}</h1>
      <span className="date">{props.date}</span>
      <p>{props.noteContent}</p>
      <DeleteIcon className="deleteIcon" fontSize="small" style={{display: buttonDisplay}} onClick={() => {
         props.onDelete(props.id)
      }} />
      <EditIcon className="editIcon" fontSize="small" style={{display: buttonDisplay}} onClick={handleClickUpdate} />
      <CheckIcon className="checkIcon" fontSize="small" style={{display: saveButtonDisplay}} onClick={handleClickSave} />
      
  
    </div>
  );
}

export default Note;
