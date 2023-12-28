import axios from "axios";
import React, { useState } from "react";
import Filelist from "./Components/FileList";
import FileSelect from "./Components/FileSelect";
export default function App() {
  const [filesUploaded, setFilesUploaded] = useState([]);

  function selectFileHandler(e) {
    const files = e.target.files;
    setFilesUploaded([...filesUploaded, ...files]);
  }
  return (
    <div className="text-center p-4">
      <FileSelect selectFileHandler={selectFileHandler} />
      <div className="p-4 " id="result">
        <Filelist filesUploaded={filesUploaded} />
      </div>
    </div>
  );
}
