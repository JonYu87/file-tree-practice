import React from 'react'
import {useState} from 'react'

function App() {
  return <div>
    <Folder name="Desktop">
      <Folder name="Music">
        <File name="song.mp3" />
      </Folder>
      <File name="dogs.jpeg"/>
      <File name="cats.png"/> 
    </Folder>
    <Folder name="Applications"/>
  </div>
}

const Folder = (props) => {
  const {name, children} = props;
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  }

  return <div onClick={handleClick}>
    {name}
    <div style={{ marginLeft: '17px'}}>
      { isOpen ? children : null }
    </div>
  </div>
}

const File = (props) => {
  return <div>{props.name}</div>
}



export default App;
