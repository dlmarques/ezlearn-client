import React from 'react'

const Folder = ({icon, name, files, size}) => {
  return (

     <div className="folder">
          {icon}
          <div className="text">
            <h2>{name}</h2>
            <div className="row">
              <h3>{files} files</h3>
              <p>{size}GB</p>
            </div>
          </div>
    </div>
  )
}

export default Folder