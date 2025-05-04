import React from "react";

function SushiForm({ FormData, onChange, onSubmit }) {
  return (
    <form className="sushi-form" onSubmit={onSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={FormData.name}
          onChange={onChange}
          required
        />
      </label>
      <label>
        Image:
        <input
          type="url"
          name="img-url"
          value={FormData["img-url"]}
          onChange={onChange}
          required
        />
      </label>
      <label>
        Price:
        <input
          type="number"
          name="price"
          value={FormData.price}
          onChange={onChange}
          min={0}
          required
        />
      </label>
      <button type="submit">Submit!</button>
    </form>
  );
}

export default SushiForm;
