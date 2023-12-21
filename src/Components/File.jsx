import React, { useEffect, useState } from "react";
import axios from "axios";
export default function File(file) {
  // const [percentage, setPercentage] = useState(0);
  const [widthFile, setWidthFile] = useState(0);
  console.log(Object.values(file)[0].name);
  useEffect(() => {
    async function uploadedFile() {
      try {
        const form = new FormData();
        form.append("file", Object.values(file)[0]);
        const config = {
          onUploadProgress: (progressEvent) => {
            const percent =
              parseInt(progressEvent.loaded / progressEvent.total) * 100;
            console.log(progressEvent.loaded / progressEvent.total) * 100;
            setWidthFile(percent);
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
    <div className="mb-3" key={Object.values(file)[0].name}>
      <label className="m-1">{Object.values(file)[0].name}</label>
      <div className="progress">
        <div
          className="progress-bar progress-bar-striped progress-bar-animated "
          role="progressbar"
          style={{ width: widthFile + "%" }}
        >
          {widthFile + "%"}
        </div>
      </div>
    </div>
  );
}
