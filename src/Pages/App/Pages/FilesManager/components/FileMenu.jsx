import React from "react";
import {useDispatch} from 'react-redux'
import { Button, Checkbox } from "@nextui-org/react";
import { uploadUIActions } from "../../../../../store/UI/UploadModal/uploadfile";

const FileMenu = ({ selectAll }) => {
  const dispatch = useDispatch()

  const openUpload = () => {
    dispatch(uploadUIActions.open())
  }

  return (
    <>
      <div className="file bar">
        <Checkbox onChange={selectAll} />
        <p>Name</p>
        <p className="modified">Modified</p>
        <p id="group">Group</p>
        <Button auto css={{ backgroundColor: "#00adb5" }} onClick={openUpload}>
          Upload
        </Button>
      </div>
    </>
  );
};

export default FileMenu;
