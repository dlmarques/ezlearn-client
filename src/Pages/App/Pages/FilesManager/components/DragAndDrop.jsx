import React, { useState, useRef }  from "react";
import {ImFilesEmpty} from 'react-icons/im'
import './styles/dragandrop.scss'

const DragAndDrop = () => {
    const [dragActive, setDragActive] = useState(false)
    const inputRef = useRef(null)

    const handleDrag = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if(e.type === 'dragenter' || e.type === 'dragover'){
            setDragActive(true)
        }else if(e.type === 'dragleave'){
            setDragActive(false)
        }
    }

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false)
        if(e.dataTransfer.files && e.dataTransfer.files[0]){
            console.log('at least one file has been dropped so do something')
        }
    }

    const handleChange = (e) => {
        e.preventDefault();
        if(e.target.files && e.target.files[0]){
            console.log('at least one file has been selected so do something')
        }
    }

    const onButtonClick = () => {
        inputRef.current.click();
    }

  return (
    <form id="form-file-upload" onDragEnter={handleDrag} onSubmit={(e) => e.preventDefault()} >
      <input type="file" id="input-file-upload" ref={inputRef} multiple={true} onChange={handleChange} />
      <label htmlFor="input-file-upload"  id="label-file-upload" className={dragActive ? 'drag-active' : '' }>
        <div>
          <ImFilesEmpty id="icon-upload"/>
          <p>Drag and drop your files here or</p>
          <button className="upload-button" onClick={onButtonClick}>Upload a file</button>
        </div>
      </label>
      {dragActive && <div id="drag-file-element" onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop}></div>}
    </form>
  );
};

export default DragAndDrop;
