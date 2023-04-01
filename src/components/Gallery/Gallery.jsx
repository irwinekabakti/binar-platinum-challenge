import React, { useState } from "react";
import Zoombox from "zoombox";
import { useRef } from "react";
import classes from "./Gallery.module.css";
import { dataImages } from "./data";

const Gallery = () => {
  const [active, setActive] = useState(false);
  const containerRef = useRef(null);

  return (
    <section className="galleryPhoto" id="gallery-photo" ref={containerRef}>
      <div className={`container ${classes.containerImage}`}>
        <div className="row g-4">
          {dataImages.map((data) => (
            <div className="col-lg-3 col-md-6 col-12" key={data.id}>
              <div className={`card ${classes.cardGallery}`}>
                <img
                  data-zoombox
                  data-caption={data.caption}
                  key={data.id}
                  src={data.src}
                  alt={data.caption}
                  height={200}
                  width={305}
                  className={`${classes.cardGalleryImage}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <Zoombox
        {...{
          containerRef,
          active,
          setActive,
          maskClosable: true,
        }}
      />
    </section>
  );
};
export default Gallery;
