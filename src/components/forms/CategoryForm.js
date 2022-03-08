import React from "react";

const CategoryForm = ({ handleSubmit, name, setName }) => (
  <form onSubmit={handleSubmit}>
    <div className="form-group">
      <label>Name</label>
      <input
        type="text"
        className="form-control"
        onChange={(e) => setName(e.target.value)}
        value={name}
        autoFocus
        placeholder="category name"
        required
      />
      <br />
      <button className="btn btn-primary">Save</button>
    </div>
  </form>
);

export default CategoryForm;
