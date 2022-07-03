import React, { useState } from "react";
import {
  IoDocumentsOutline,
  IoDocumentOutline,
  IoPlayOutline,
} from "react-icons/io5";
import { BsImages } from "react-icons/bs";

import "./library.scss";
import { mockData } from "./components/mockData";
import File from "./components/File";
import FileMenu from "./components/FileMenu";
import Folder from "./components/Folder";
import UploadModal from "./components/UploadModal";

const Library = () => {
  const [isSelected, setIsSelected] = useState(false);

  const selectAll = () => {
    setIsSelected((prevSelected) => !prevSelected);
  };

  return (
    <div className="library-container">
      <div className="upper-row">
        <Folder icon={<BsImages />} name="Images" files="150" size="3.21" />
        <Folder icon={<IoPlayOutline />} name="Videos" files="11" size="2.54" />
        <Folder
          icon={<IoDocumentsOutline />}
          name="Files"
          files="705"
          size="15.2"
        />
        <Folder
          icon={<IoDocumentOutline />}
          name="Other Files"
          files="201"
          size="1.3"
        />
      </div>
      <div className="list-files">
        <FileMenu selectAll={selectAll} />
        <UploadModal />
        {mockData &&
          mockData.map((file, id) => (
            <File
              key={id}
              name={file.name}
              modified={file.modified}
              group={file.group}
              isSelected={isSelected}
            />
          ))}
      </div>
    </div>
  );
};

export default Library;
