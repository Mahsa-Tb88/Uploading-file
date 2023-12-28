import React from "react";

export default function FileSelect({selectFileHandler}) {
  return (
    <div>
      <input
        type="file"
        multiple
        id="selector"
        className="d-none"
        onChange={(e) => selectFileHandler(e)}
      />
      <label htmlFor="selector" className="btn btn-primary">
        Select File(s)
      </label>
    </div>
  );
}
