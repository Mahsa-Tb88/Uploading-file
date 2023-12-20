import React from "react";

function Filelist({ filesUploaded }) {
  const myFiles = [];

  for (const file of filesUploaded) {
    myFiles.push(
      <div className="mb-3" key={file.name}>
        <label className="m-1">{file.name}</label>
        <div className="progress">
          <div
            className="progress-bar"
            role="progressbar"
            aria-valuenow="0"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
    );
  }
  return (
    <div className="p-4 " id="result">
      {myFiles}
    </div>
  );
}

export default Filelist;
