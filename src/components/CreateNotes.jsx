import React from "react";

const CreateNotes = () => {
  return (
    <div style={{ margin: "auto", width: "50%" }}>
      <h2>Take your note</h2>
      <div class="form-floating">
        <textarea
          class="form-control"
          placeholder="Leave a comment here"
          id="floatingTextarea2"
          style={{ height: "100px" }}
        ></textarea>
        <label for="floatingTextarea2">notes</label>
      </div>
      <button type="submit" class="btn btn-primary" style={{marginTop: "10px"}}>Submit</button>
    </div>
  );
};

export default CreateNotes;
