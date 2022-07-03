import React from 'react'
import { Checkbox, Avatar } from "@nextui-org/react";
import { HiDotsHorizontal } from "react-icons/hi";

const File = ({name, modified, group, isSelected}) => {
    const dummyUsers = [
        "https://i.pravatar.cc/150?u=a042581f4e29026024d",
        "https://i.pravatar.cc/150?u=a042581f4e29026704d",
        "https://i.pravatar.cc/150?u=a04258114e29026702d",
        "https://i.pravatar.cc/150?u=a048581f4e29026701d",
        "https://i.pravatar.cc/150?u=a092581d4ef9026700d",
      ];
    
  return (
    <>
            <div className="file">
          <Checkbox isSelected={isSelected} />
          <p>{name}</p>
          <p className='modified'>{modified}</p>
          <Avatar.Group id='avatar-group' count={group}>
            {dummyUsers.map((url, index) => (
              <Avatar
                key={index}
                size="md"
                pointer
                src={url}
                bordered
                color="gradient"
                stacked
              />
            ))}
          </Avatar.Group>
          <HiDotsHorizontal />
        </div>
    </>
  )
}

export default File