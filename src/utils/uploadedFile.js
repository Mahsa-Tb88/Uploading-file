import axios from "axios";
async function uploadedFile(file, setPercent) {
  try {
    const form = new FormData();
    form.append("file", file);
    const config = {
      onUploadProgress: (progressEvent) => {
        const percentage = parseInt(
          (progressEvent.loaded / progressEvent.total) * 100
        );
        setPercent(percentage);
      },
    };
    const { data } =await axios.post("/", form, config);
    return data;
  } catch (e) {
    console.log(e.message);
  }
}
export default uploadedFile;
