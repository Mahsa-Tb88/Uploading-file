import axios from "axios";
import React, { useRef } from "react";

export default function App() {
  const inputRef = useRef();
  function addProgressBar(file) {
    const html = `
<label>${file.name}</label>
<div className="progress">
  <div
    className="progress-bar progress-bar-striped bg-danger"
    role="progressbar"
  ></div>
</div>`;
    const container = document.createElement("div");
    container.className = "mb-3";
    container.innerHTML = html;
  }
  async function selectFileHandler(e) {
    const files = e.target.files;
    for (let file of files) {
      const form = new FormData();
      form.append("file", file);
      const { data } = await axios.post("/", form);
      addProgressBar(file);
    }

    console.log(e.target.files);
  }
  return (
    <div className="text-center p-4">
      <div>
        <input
          type="file"
          multiple
          id="selector"
          className="d-none"
          onChange={(e) => selectFileHandler(e)}
          ref={inputRef}
        />
        <label htmlFor="selector" className="btn btn-primary">
          Select File(s)
        </label>
      </div>
      <FileList />
     </div>
  );
}
