import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';
import axios from "axios";

function CreateArea(props) {
  const [inputTitle, setInputTitle] = useState("");
  const [inputContent, setInputContent] = useState("");
  const [titlePlaceholder, setTiTlePlaceholder] = useState("Title");
  const [contentPlaceholder, setContentPlaceholder] = useState("Take a note...");
  const [isExpanded, setIsExpanded] = useState(false);
  const [titleInputStyle, setTitleInputStyle] = useState({})
  const [contentInputStyle, setContentInputStyle] = useState({})

  const handleTitleChange = (event) => {
    setInputTitle(event.target.value);
    setTitleInputStyle({});
    setContentInputStyle({});
    setTiTlePlaceholder("Title");
    setContentPlaceholder("Take a note...");
  };

  const handleContentChange = (event) => {
    setInputContent(event.target.value);
    setContentInputStyle({});
    setTitleInputStyle({});
    setTiTlePlaceholder("Title");
    setContentPlaceholder("Take a note...");
  };

  const expandInput = () => {
    setIsExpanded(true);
  }

  const handleEmptyInput = () => {
    setTiTlePlaceholder("Please enter title");
    setContentPlaceholder("Please enter content");
    setTitleInputStyle({
      borderTop: "1px solid red",
      borderLeft: "1px solid red",
      borderRight: "1px solid red",
    })
    setContentInputStyle({
      borderBottom: "1px solid red",
      borderLeft: "1px solid red",
      borderRight: "1px solid red",
    })
  }

  const generateDate = () => {
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
    const d = new Date();
    const month = months[d.getMonth()];
    const day = d.getDate();
    const year = d.getFullYear();

    return (`${day} ${month} ${year}`)
  }

  return (
    <div>
      <form className="create-note" onSubmit={(e) => {
                if (inputTitle == "" && inputContent == "") {
                  e.preventDefault();
                  handleEmptyInput();
                } else {
                  props.onAdd(inputTitle, inputContent, generateDate())
                  setInputContent("");
                  setInputTitle("");
                  setTiTlePlaceholder("Title");
                  setContentPlaceholder("Take a note...");
                  setTitleInputStyle({});
                  setContentInputStyle({});
                }
            }}>
        {isExpanded === true && 
            <input 
            name="title"
            placeholder={titlePlaceholder}
            onChange={handleTitleChange}
            style={titleInputStyle}
            value={inputTitle}
            />
        }
        <textarea
          name="content"
          placeholder={contentPlaceholder}
          rows={isExpanded === true ? 3 : 1}
          onChange={handleContentChange}
          onClick={expandInput}
          style={contentInputStyle}
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
