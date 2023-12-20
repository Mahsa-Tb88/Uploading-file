import React from "react";
import File from "./File";
function Filelist({ filesUploaded }) {
  const myFiles = [];
  for (const file of filesUploaded) {
    myFiles.push(file);
  }

  return (
    <div className="p-4 " id="result">
      {myFiles.map((file) => (
        <File file={file} key={file.name} />
      ))}
    </div>
  );
}

export default Filelist;
