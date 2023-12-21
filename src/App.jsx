import axios from "axios";
import React, { useState } from "react";
import Filelist from "./Components/FileList";
export default function App() {
  const [filesUploaded, setFilesUploaded] = useState([]);
 
  function selectFileHandler(e) {
    const files = e.target.files;
    setFilesUploaded(files);
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
        />
        <label htmlFor="selector" className="btn btn-primary">
          Select File(s)
        </label>
      </div>
      <div className="p-4 " id="result">
        <Filelist filesUploaded={filesUploaded} />
      </div>
    </div>
  );
}
