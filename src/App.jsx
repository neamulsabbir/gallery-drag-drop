import { useRef, useState } from "react";

import "./App.css";
import images from "./images";
import Card from "./components/Card";
import DeleteImages from "./components/DeleteImages";

function App() {
  const [customImages, setCustomImages] = useState(images);
  const [selectedItemCount, setSelectedItemCount] = useState(0);

  // Functionality of reordering
  const dragItem = useRef(null);
  const dragOverItem = useRef(null);

  const handleCustomSorting = () => {
    if (dragItem.current == null || dragOverItem.current == null) {
      return;
    }
    let images = [...customImages];

    let tempImage = images[dragItem.current];

    images.splice(dragItem.current, 1);
    images.splice(dragOverItem.current, 0, tempImage);

    dragItem.current = dragOverItem.current;

    dragOverItem.current = null;

    setCustomImages(images);
  };

  // Functionality of selecting image
  const handleImageSelection = (key) => {
    let temp = customImages;
    for (let i = 0; i < temp.length; i++) {
      if (temp[i].key == key) {
        temp[i].selected = !temp[i].selected;
        if (temp[i].selected) {
          setSelectedItemCount(selectedItemCount + 1);
        } else {
          setSelectedItemCount(selectedItemCount - 1);
        }
        setCustomImages(temp);
        break;
      }
    }
  };

  return (
    <>
      <div className="lg:px-48 md:px-20 px-3 my-20">
        <DeleteImages
          customImages={customImages}
          setCustomImages={setCustomImages}
          selectedItemCount={selectedItemCount}
          setSelectedItemCount={setSelectedItemCount}
        />
        <div className="grid md:grid-cols-4 lg:grid-cols-5 gap-4">
          {customImages.map((image, index) => (
            <Card
              key={image.key}
              image={image}
              index={index}
              handleChange={handleImageSelection}
              handleSorting={handleCustomSorting}
              dragItem={dragItem}
              dragOverItem={dragOverItem}
            />
          ))}

          <label
            htmlFor="getImage"
            className="border-2 rounded-md cursor-pointer flex flex-col items-center justify-center gap-2 min-h-[100px] min-w-[100px]"
          >
            <p>Add Images</p>
          </label>
          <input type="file" id="getImage" className="hidden" />
        </div>
      </div>
    </>
  );
}

export default App;
