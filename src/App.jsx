import axios from "axios";
import React, { useState } from "react";
import Filelist from "./Components/FileList";
export default function App() {
  const [filesUploaded, setFilesUploaded] = useState([]);
 
  function selectFileHandler(e) {
    const files = e.target.files;
    // async function uploadedFile() {
    //   try {
    //     for (let file of files) {
    //       const form = new FormData();
    //       form.append("file", file);
    //       const config = {
    //         onUploadProgress: (progressEvent) => {
    //           const percent =
    //             parseInt(progressEvent.loaded / progressEvent.total) * 100;
    //         },
    //       };
    //       const { data } = await axios.post("/", form, config);
    //     }
    //   } catch (e) {
    //     console.log(e.message);
    //   }
    // }
    // uploadedFile();
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
