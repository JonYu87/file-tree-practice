import React, { useState } from "react";

function App() {
  return (
    <div>
      <Folder name="Desktop">
        <Folder name="Music">
          <File name="song.mp4" />
          <File name="song.mp4" />
        </Folder>
        <Folder name="Pictures">
          <File name="dogs.jpeg" />
          <File name="cats.png" />
        </Folder>
      </Folder>
      <Folder name="Applications">
        <File name="chrome.exe" />
        <File name="firefox.exe" />
      </Folder>
    </div>
  );
}

const Folder = (props) => {
  const { name, children } = props;
  const [isOpen, setIsOpen] = useState(false);

  // const handleClick = () => {
  //   setIsOpen(!isOpen);
  // }

  return (
    <div>
      <span onClick={() => setIsOpen(!isOpen)}>
        <i
          className={isOpen ? "blue folder open icon" : "blue folder icon"}
        ></i>
        <i className={isOpen ? "caret down icon" : "caret right icon"}></i>
      </span>
      {name}
      <div style={{ marginLeft: "17px" }}>{isOpen ? children : null}</div>
    </div>
  );
};

const File = (props) => {
  const { name } = props;
  const fileExtension = name.split(".")[1];
  const fileIcon = {
    mp4: "headphones",
    jpeg: "file image",
    png: "file image outline",
    exe: "rss square",
  };

  return (
    <div>
      <i className={`${fileIcon[fileExtension]} icon`}></i>
      {name}
    </div>
  );
};

export default App;
