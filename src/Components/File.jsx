import React, { useEffect, useState } from "react";
import axios from "axios";
export default function File(file) {
  const [percentage, setPercentage] = useState(0);
  const [widthFile, setWidthFile] = useState(0);
  useEffect(() => {
    async function uploadedFile() {
      try {
        const form = new FormData();
        form.append("file", file);
        const config = {
          onUploadProgress: (progressEvent) => {
            const percent =
              parseInt(progressEvent.loaded / progressEvent.total) * 100;
            setPercentage(percent);
            setWidthFile(percent);
          },
        };
        const { data } = await axios.post("/", form, config);
      } catch (e) {
        console.log(e.message);
      }
    }
    uploadedFile();
  }, [percentage, widthFile]);
  console.log(widthFile);
  return (
    <div className="mb-3" key={file.name}>
      <label className="m-1">{file.name}</label>
      <div className="progress">
        <div
          className="progress-bar progress-bar-striped progress-bar-animated "
          role="progressbar"
          style={{ width: widthFile + "%" }}
        >
          {percentage}
        </div>
      </div>
    </div>
  );
}
