import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

function Card({ title, description, id, handleDelete }) {
  const [openNote, setOpenNote] = useState(null);

  function handleDeleteAndClose() {
    handleDelete(id);
    setOpenNote(null);
  }

  return (
    <>
      <motion.div
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        className="card"
        onClick={() => setOpenNote(id)}
        layoutId={id}
      >
        <div className="title">{title}</div>
        <div className="description-clipped">{description}</div>
      </motion.div>

      <AnimatePresence>
        {openNote && (
          <motion.div className="backdrop" onClick={() => setOpenNote(false)}>
            <motion.div
              className="card savednote-card"
              layoutId={id}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="title">{title}</div>
              <div className="description">{description}</div>
              <div
                className="close-btn grid-center"
                onClick={handleDeleteAndClose}
              >
                X
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Card;
