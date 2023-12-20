import axios from "axios";
import React, { useEffect, useState } from "react";
// import Filelist from "./Components/FileList";
export default function App() {
  const [filesUploaded, setFilesUploaded] = useState([]);
  let selectedFiles = [];
  function addProgressBar(file, percent) {
    selectedFiles.push(
      <div className="mb-3" key={file.name}>
        <label className="m-1">{file.name}</label>
        <div className="progress">
          <div
            className="progress-bar"
            role="progressbar"
            aria-valuenow="20"
            aria-valuemin="0"
            aria-valuemax="100"
            style="width: 0"
          >
            {percent}
          </div>
        </div>
      </div>
    );
  }
  function selectFileHandler(e) {
    const files = e.target.files;
    async function uploadedFile() {
      try {
        for (let file of files) {
          const form = new FormData();
          form.append("file", file);
          const config = {
            onUploadProgress: (progressEvent) => {
              const percent =
                parseInt(progressEvent.loaded / progressEvent.total) * 100;
              addProgressBar(file, percent);
            },
          };
          const { data } = await axios.post("/", form, config);
        }
      } catch (e) {
        console.log(e.message);
      }
    }
    uploadedFile();
    setFilesUploaded(selectedFiles);
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
        {filesUploaded}
      </div>
    </div>
  );
}
