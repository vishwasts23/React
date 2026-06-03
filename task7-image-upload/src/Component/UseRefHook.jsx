import React, { useRef, useState } from "react";

export default function UseRefHook() {
  const fileInputRef = useRef(null);

  const [imageURL, setImageURL] = useState("");

  const handleImageUpload = (e) => {
    const file = e.target.files[0];

    if (file) {
      const imagePreview = URL.createObjectURL(file);
      setImageURL(imagePreview);
    }
  };

  const removeImage = () => {
    setImageURL("");
    fileInputRef.current.value = "";
  };

  return (
    <div className="container">
      <div className="card">
        <h1>Image Upload</h1>

        <div
          className="image-container"
          onClick={() => fileInputRef.current.click()}
        >
          {imageURL ? (
            <img
              src={imageURL}
              alt="Preview"
              className="preview-image"
            />
          ) : (
            <p>Click Here To Upload Image</p>
          )}
        </div>

        <input
          type="file"
          accept="image/*"
          hidden
          ref={fileInputRef}
          onChange={handleImageUpload}
        />

        <div className="button-group">
          <button
            className="upload-btn"
            onClick={() => fileInputRef.current.click()}
          >
            Select Image
          </button>

          {imageURL && (
            <button
              className="remove-btn"
              onClick={removeImage}
            >
              Remove Image
            </button>
          )}
        </div>
      </div>
    </div>
  );
}