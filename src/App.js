import React, { useState } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import "./App.css";
import DragItem from "./Components/DragItem";
import DropZone from "./Components/Dropzone";
import Header from "./Components/Header";
import AnimIcon from "../src/assets/images/anim.png";
import DeleteIcon from '../src/assets/images/trash.png'

function App() {
  const [droppedItems, setDroppedItems] = useState([]);
  const [animate, setAnimate] = useState(0);

  const handleDrop = (item) => {
    setDroppedItems((prevItems) => [...prevItems, item]);
  };

  const handleRemoveItem = (index) => {
    const updatedItems = [...droppedItems];
    updatedItems.splice(index, 1);
    setDroppedItems(updatedItems);
  };

  const animateImage = (item) => {
    console.log("Clicked", item);
    switch (item) {
      case "turn right 15":
        return setAnimate((prevCount) => prevCount + 15);
      case "turn left 15":
        return setAnimate((prevCount) => prevCount - 15);

      default:
        return setAnimate(0);
    }
  };
  return (
    <>
      <Header />
      <DndProvider backend={HTML5Backend}>
        <div className="pageContainer dFlex colOne">
          <div className="width70 leftSecCard">
            <div className="dFlex">
              <div className="width30 secHeight secSpace borderRight">
                <DragItem name="turn right 15" />
                <DragItem name="turn left 15" />
              </div>
              <div className="width70 secHeight secSpace">
                <DropZone onDrop={handleDrop} />
                <div className="draggedItemSec">
                  {droppedItems.map((item, index) => (
                    <div key={index} className="cardBg dflexCenter">
                      <span onClick={() => animateImage(item.name)}>
                        {item.name}
                      </span>
                      <button
                        className="removeBtn"
                        onClick={() => handleRemoveItem(index)}
                      >
                        <img src={DeleteIcon} alt="Delete" className="deleteIcon"/> 
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="rightColSec colTwo width30">
            <img
              src={AnimIcon}
              style={{ rotate: `${animate}deg` }}
              className="animIcon"
              alt="Animation"
            />
          </div>
        </div>
      </DndProvider>
    </>
  );
}

export default App;
