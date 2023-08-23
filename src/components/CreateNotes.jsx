import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createNote } from "../features/userNoteSlice";

const CreateNotes = () => {
  const [notes, setNotes] = useState({});
  const dispatch = useDispatch();

  const getUserNote = (e) => {
    setNotes({ ...notes, [e.target.name]: e.target.value });
    console.log(notes);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("notes details", notes);
    dispatch(createNote(notes));
  };

  return (
    <div style={{ margin: "auto", width: "50%" }}>
      <h4>Take your's note</h4>
      <form onSubmit={handleSubmit}>
        <div className="form-floating">
          <textarea
            className="form-control"
            placeholder="Leave a comment here"
            id="floatingTextarea2"
            style={{ height: "100px" }}
            name="your note"
            onChange={getUserNote}
          ></textarea>
          <label for="floatingTextarea2">notes</label>
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          style={{ marginTop: "10px" }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateNotes;
