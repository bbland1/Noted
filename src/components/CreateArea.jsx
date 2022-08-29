import React, { useState } from "react";
import Zoom from '@mui/material/Zoom';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';

function CreateArea(props) {
  const [openNote, setOpenNote] = useState(false);

  const [newNote, setNewNote] = useState({
    title: "",
    content: ""
  });

  function takeNote() {
    setOpenNote(true);
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setNewNote((prevNewNote) => {
      return {
        ...prevNewNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(newNote)

    event.preventDefault();
    setNewNote({
      title: "",
      content: ""
    })
  }

  return (
    <div>
      <form className="create-note" onSubmit={submitNote}>
        {openNote && <input
          autoFocus
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={newNote.title}
        />}
        <textarea
          onClick={takeNote}
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          value={newNote.content}
          rows={openNote ? 3 : 1}
        />
        <Zoom in={openNote}>
          <Fab type="submit">
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  )
}

export default CreateArea;