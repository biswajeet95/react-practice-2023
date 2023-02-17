import React,{useState} from "react";
import ImageList from "./ImageList";

import SearchBar from "./SearchBar";
import searchImages from "./api";

const ImageProject = () => {
  const [images,setImages] = useState([]);

  const handleSubmit = async (term) => {
    const result = await searchImages(term);
   setImages(result);
  };
  return (
    <div>
      {" "}
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images}/>
   
    </div>
  );
};

export default ImageProject;
