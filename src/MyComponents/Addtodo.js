import React, { useState } from 'react';

export const Addtodo = ({ addtodo }) => {

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert("Title or Description cannot be empty");
      return;
    }
else{
    addtodo(title, desc);
       setTitle("");
    setDesc("");
  };
}

  return (
    <div className="container my-3">
      <h3>What Shivi Can Do All Day </h3>

      <form onSubmit={submit}>

        {/* Todo Title */}
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Partner Routine
          </label>

          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
            id="title"
          />
        </div>

        {/* Todo Description */}
        <div className="mb-3">
          <label htmlFor="desc" className="form-label">
            Partner Hobbies
          </label>

          <input
            type="text"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            className="form-control"
            id="desc"
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-sm btn-success">
          Submit
        </button>

      </form>
    </div>
  );
};
