import React from 'react'
import { Button, Checkbox } from "@nextui-org/react";

const FileMenu = ({selectAll}) => {

  return (
    <>
        <div className="file bar">
            <Checkbox  onChange={selectAll} />
          <p>Name</p>
          <p>Modified</p>
          <p>Group</p>
          <Button
          auto
          css={{backgroundColor: '#00adb5'}}
          >
            Upload</Button>
        </div>
    </>
  )
}

export default FileMenu