import axios from "axios";
import React, { useState } from "react";

const Upload = () => {

    const [img , setImg] = useState(undefined)
    const [video , setVideo] = useState(undefined)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // await axios.post('http://localhost:5000/api/videos',{...inputs})
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="video">video :</label>
          <input type="file" accept="video/*" id="video" />
        </div>
        <div>
          <label htmlFor="video">Image :</label>
          <input type="file" accept="image/*" id="img" />
        </div>
        <button type="submit">Upload</button>
      </form>
    </div>
  );
};

export default Upload;
