import React, { useEffect, useState } from "react";
import axios from "axios";
export default function File(file) {
  const [percent, setPercent] = useState(0);
  const classFile = [
    "progress-bar",
    percent < 100 ? "progress-bar-striped progress-bar-animated" : "bg-success",
  ].join(" ");
  useEffect(() => {
    async function uploadedFile() {
      try {
        const form = new FormData();
        form.append("file", file);
        const config = {
          onUploadProgress: (progressEvent) => {
            const percentage =
              parseInt(progressEvent.loaded / progressEvent.total) * 100;
            setPercent(percentage);
          },
        };
        const { data } = await axios.post("/", form, config);
      } catch (e) {
        console.log(e.message);
      }
    }
    uploadedFile();
  }, []);
  return (
    <div className="mb-3" key={file.name}>
      <label className="m-1">{file.name}</label>
      <div className="progress">
        <div
          className={classFile}
          role="progressbar"
          style={{ width: percent + "%" }}
        >
          {percent + "%"}
        </div>
      </div>
    </div>
  );
}
