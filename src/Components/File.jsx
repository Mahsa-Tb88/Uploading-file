import React, { useEffect, useState } from "react";
import uploadedFile from "../utils/uploadedFile";
import { convertSize } from "../utils/convertSize";
export default function File({ file }) {
  const [percent, setPercent] = useState(0);
  const classFile = [
    "progress-bar",
    percent < 100 ? "progress-bar-striped progress-bar-animated" : "bg-success",
  ].join(" ");
  useEffect(() => {
    async function upload() {
      await uploadedFile(file, setPercent);
    }
    const timeOut = setTimeout(upload, 20);
    return () => clearTimeout(timeOut);
  }, []);
  return (
    <div className="mb-3">
      <label className="m-1">{file.name}</label>
      <span>{convertSize(file.size)}</span>
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
