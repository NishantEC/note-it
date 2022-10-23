import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

function NewNote({ addNewNote }) {
  const [openNewNotes, setopenNewNotes] = useState(false);
  const [NewNote, setNewNote] = useState({
    title: "",
    description: "",
  });

  useEffect(() => {
    setNewNote({
      title: "",
      description: "",
    });
  }, [openNewNotes]);

  function onChangeHandler(e) {
    let { name, value } = e.target;
    setNewNote({ ...NewNote, [name]: value });
  }

  function handleSave() {
    addNewNote(NewNote);
    setopenNewNotes(false);
  }

  return (
    <>
      <motion.div
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        className="card newnote-btn grid-center"
        layoutId="newNote"
        onClick={() => setopenNewNotes(true)}
      >
        +
      </motion.div>

      <AnimatePresence>
        {openNewNotes && (
          <motion.div
            className="backdrop"
            onClick={() => setopenNewNotes(false)}
          >
            <motion.div
              className="card newnote-card"
              layoutId="newNote"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="title">Note It Down</div>
              <input
                name="title"
                onChange={(e) => onChangeHandler(e)}
                value={NewNote.title}
                placeholder="title"
              />
              <textarea
                name="description"
                onChange={(e) => onChangeHandler(e)}
                value={NewNote.description}
                placeholder="Description"
              />
              <div className="btns">
                <div onClick={handleSave}>Save</div>
                <div onClick={() => setopenNewNotes(false)}> Cancel</div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default NewNote;
