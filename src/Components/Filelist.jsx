import React from "react";
import File from "./File";
function Filelist({ filesUploaded }) {
  return (
    <div className="p-4 " id="result">
      {filesUploaded.map((file,index) => (
        <File file={file} key={index} />
      ))}
    </div>
  );
}

export default Filelist;
