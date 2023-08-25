import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteNote, showNote } from "../features/userNoteSlice";

const AllNotes = () => {
  const dispatch = useDispatch();

  const { notes, loading } = useSelector((state) => state.app);

  useEffect(() => {
    dispatch(showNote());
  }, []);

  if (loading) {
    return <h3>please wait a moment</h3>;
  }

  return (
    <>
      <h4 style={{ textAlign: "center", padding: "10px" }}>All notes</h4>
      {notes &&
        notes.map((ele) => (
          <div
            key={ele.id}
            className="card text-bg-warning mb-3"
            style={{
              maxWidth: "18rem",
              margin: "10px",
              display: "inline-flex",
            }}
          >
            <div className="card-header">{ele.title}</div>
            <div className="card-body">
              <h5 className="card-title">{ele.title}</h5>
              <p className="card-text">{ele.yournote}</p>
              <Link classNameName="card-link" style={{margin: "4px",}}>View</Link>
              <Link classNameName="card-link" style={{margin: "4px"}}>Edit</Link>

              <Link
                classNameName="card-link"
                style={{margin: "4px"}}
                onClick={() => dispatch(deleteNote(ele.id))}
              >
                Delete
              </Link>
            </div>
          </div>
        ))}
    </>
  );
};

export default AllNotes;
