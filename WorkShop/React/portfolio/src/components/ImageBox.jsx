import React from "react";

function ImageBox({image}) {
  return (
    <>
      <div className="w3-col m6">
        <img src={image} alt="Me" style={{ width: "100%" }} />
      </div>
    </>
  );
}

export default ImageBox;
