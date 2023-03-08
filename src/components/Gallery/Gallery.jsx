import React, { useState } from "react";
import Zoombox from "zoombox";
import { useRef } from "react";
import classes from "./Gallery.module.css";

import img1 from "./Image/Img 1.jpg";
import img2 from "./Image/Img 2.jpg";
import img3 from "./Image/Img 3.jpg";
import img4 from "./Image/Img 4.jpg";

const Gallery = () => {
  const [active, setActive] = useState(false);

  const image1 = [
    {
      src: img1,
      caption: "Nature Landscape 1",
    },
  ];

  const image2 = [
    {
      src: img2,
      caption: "Nature Landscape 2",
    },
  ];

  const image3 = [
    {
      src: img3,
      caption: "Nature Landscape 3",
    },
  ];

  const image4 = [
    {
      src: img4,
      caption: "Nature Landscape 4",
    },
  ];

  const containerRef = useRef(null);
  return (
    <div ref={containerRef}>
      <div>
        <div className={`container ${classes.containerImage}`}>
          <div className="row g-4 ">
            <div className="col-lg-3 col-md-6 col-12">
              <div className={`card ${classes.cardGallery}`}>
                {image1.map((image) => (
                  <img
                    data-zoombox
                    data-caption={image.caption}
                    key={image.src}
                    src={image.src}
                    alt={image.caption}
                    height={200}
                    width={305}
                    className={`${classes.cardGalleryImage}`}
                  />
                ))}
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <div className={`card ${classes.cardGallery}`}>
                {image2.map((image) => (
                  <img
                    data-zoombox
                    data-caption={image.caption}
                    key={image.src}
                    src={image.src}
                    alt={image.caption}
                    height={200}
                    width={305}
                    className={`${classes.cardGalleryImage}`}
                  />
                ))}
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <div className={`card ${classes.cardGallery}`}>
                {image3.map((image) => (
                  <img
                    data-zoombox
                    data-caption={image.caption}
                    key={image.src}
                    src={image.src}
                    alt={image.caption}
                    height={200}
                    width={305}
                    className={`${classes.cardGalleryImage}`}
                  />
                ))}
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <div className={`card ${classes.cardGallery}`}>
                {image4.map((image) => (
                  <img
                    data-zoombox
                    data-caption={image.caption}
                    key={image.src}
                    src={image.src}
                    alt={image.caption}
                    height={200}
                    width={305}
                    className={`${classes.cardGalleryImage}`}
                  />
                ))}
              </div>
            </div>
          </div>
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
    </div>
  );
};
export default Gallery;
