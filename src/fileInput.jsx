import React, { useRef, useState } from "react";

const FileInput = () => {
  const inputRef = useRef();

  const [selectedFile, setSelectedFile] = useState(null);

  const handleOnChange = (event) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
    }
  };

  const onChooseFile = () => {
    inputRef.current.click();
  };

  const removeFile = () => {
    setSelectedFile(null);
  };

  return (
    <div>
      <input
        type="file"
        ref={inputRef}
        onChange={handleOnChange}
        style={{ display: "none" }}
      />

      <button className="file-btn" onClick={onChooseFile}>
        <span class="material-symbols-rounded">upload</span> Wybierz plik w
        formacie GLB
      </button>

      {selectedFile && (
        <div className="selected-file">
          <p>{selectedFile.name}</p>

          <button onClick={removeFile}>
            <span class="material-symbols-rounded">Usuń</span>
          </button>
        </div>
      )}
    </div>
  );
};

export default FileInput;
