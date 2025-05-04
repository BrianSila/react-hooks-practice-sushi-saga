import React from "react";

function MoreButton({ onClick, onShowClick }) {
  return (
    <div className="btn-group">
      <button onClick={onClick}>More sushi!</button>
      <button onClick={onShowClick}>Add New!</button>
    </div>
  );
}

export default MoreButton;
