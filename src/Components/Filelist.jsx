import React from "react";
import File from "./File";
function Filelist({ filesUploaded }) {
  return (
    <div className="p-4 " id="result">
      {filesUploaded.map((file) => (
        <File file={file} key={file.name} />
      ))}
    </div>
  );
}

export default Filelist;
