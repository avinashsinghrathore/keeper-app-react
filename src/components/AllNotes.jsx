import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { showNote } from "../features/userNoteSlice";

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
    <div style={{ margin: "auto", padding: "10px" }}>
      <h4 style={{ textAlign: "center" }}>All notes</h4>
      {notes &&
        notes.map((ele) => (
          <div className="card" style={{ width: "20rem" }}>
            <div className="card-body text-bg-warning">
              <h5 className="card-title">{ele.title}</h5>
              <h6 className="card-subtitle mb-2 text-body-secondary">
                Card subtitle
              </h6>
              <p className="card-text">
                {ele.yournote}
              </p>
              <Link className="card-link">Edit</Link>
              <Link className="card-link">Delete</Link>
            </div>
          </div>
        ))}
    </div>
  );
};

export default AllNotes;
