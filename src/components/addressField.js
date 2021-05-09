import React from "react";

export default ({ label, value, onChange }) => {
  return (
    <div>
      <label>{label}</label>
      <input
        className="input"
        value={value}
        placeholder="Search by Address"
        onChange={e => onChange(e.target.value)}
      />
    </div>
  );
};
