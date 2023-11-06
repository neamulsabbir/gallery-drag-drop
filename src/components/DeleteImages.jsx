const DeleteImages = ({
  customImages,
  setCustomImages,
  selectedItemCount,
  setSelectedItemCount,
}) => {
  // Functionality of removing selection at one
  const handleDeselectAll = () => {
    let temp = customImages;
    for (let i = 0; i < temp.length; i++) {
      if (temp[i].selected) {
        temp[i].selected = false;
      }
    }
    setCustomImages(temp);
    setSelectedItemCount(0);
  };

  // Functionality of Deleting image or images from grid
  const handleDeleteImages = () => {
    let temp = customImages;
    let i = 0;
    while (i < temp.length) {
      if (temp[i].selected) {
        temp.splice(i, 1);
      } else {
        i++;
      }
    }
    setCustomImages(temp);
    setSelectedItemCount(0);
  };
  return (
    <div className="flex justify-between border-b-2 mb-5">
      {selectedItemCount === 0 ? (
        <h3 className="p-2 text-xl font-bold">Gallery</h3>
      ) : (
        <div className="flex justify-between w-full">
          <div className="flex items-center">
            <input
              type="checkbox"
              className="cursor-pointer"
              onClick={handleDeselectAll}
            />
            <h3 className="font-bold text-2xl ml-1">File Selected</h3>
          </div>
          <div>
            <button
              className="p-5 font-bold text-red-400 text-xl"
              onClick={handleDeleteImages}
            >
              Delete File
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeleteImages;
