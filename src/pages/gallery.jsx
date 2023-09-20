import React, { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import ImageData from "../components/data";
import Card from "../components/card"
import SearchBar from "../components/searchBar"
import "../styles/pages/gallery.scss";
import { toast, ToastContainer } from "react-toastify";

function Gallery() {
  const [images, setImages] = useState(ImageData);
  const [loading, setLoading] = useState(true);
  const [searchByTag, setSearchByTag] = useState("");

  useEffect(() => {
    const delay = setTimeout(() => {
      setLoading(false);
      clearTimeout(delay);
    }, 3000);
  }, []);

  useEffect(() => {
    toast.success("Welcom to Gafar's Gallery 🔥🔥");
  }, [!loading]);

  const filterImages = (imagesData, term) => {
    return imagesData.filter((image) =>
      image.tags.some((tag) => tag.toLowerCase().includes(term.toLowerCase()))
    );
  };

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;

    const pics = Array.from(images);
    const [reorderedImage] = pics.splice(result.source.index, 1);
    pics.splice(result.destination.index, 0, reorderedImage);

    setImages(pics);
  };

  const filteredImages = filterImages(images, searchByTag);

  return (
    <>
      <div>
        {loading ? (
          <div className="spinner"></div>
        ) : (
          <>
            <h5 className="gafaru">Gafar's Gallery🔥</h5>
            <div className="navi">
              <h5 className="gafar">Gafar's Gallery🔥</h5>
              <SearchBar
                searchByTag={searchByTag}
                setSearchByTag={setSearchByTag}
              />
            </div>
            <h3 className="welcome">Welcome to my Gallery</h3>
            <DragDropContext onDragEnd={handleOnDragEnd}>
              <Droppable droppableId="gallery">
                {(provided) => (
                  <div
                    className="image-grid"
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                  >
                    {filteredImages.map((image, index) => (
                      <Draggable
                        key={image.id}
                        draggableId={image.id}
                        index={index}
                      >
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <Card url={image.url} data={image} />
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </DragDropContext>
            <ToastContainer />
          </>
        )}
      </div>
    </>
  );
}

export default Gallery;
