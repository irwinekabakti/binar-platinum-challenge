// import React from "react";
// import LightGallery from 'lightgallery/react';
// import lgThumbnail from 'lightgallery/plugins/thumbnail';
// import lgZoom from 'lightgallery/plugins/zoom';


// import 'lightgallery/css/lightgallery.css';
// import 'lightgallery/css/lg-zoom.css';
// import 'lightgallery/css/lg-thumbnail.css';


// import img1 from "./Image/IMG-1.jpeg"
// import img2 from "./Image/IMG-2.jpg"
// import img3 from "./Image/IMG-3.jpg"

// const lg = document.getElementById('lg-method-demo');


// const Gallery = () => {
//   const onInit = () => {
//     console.log('lightGallery has been initialized');

//     const plugin = Gallery(lg);
    
// };


// return (
//     <div className="App">
//         <LightGallery
//             onInit={onInit}
//             speed={500}
//             plugins={[lgThumbnail, lgZoom]}
//         >
//           <div className="row" id="lg-methods-demo">
//             <div className="col-lg-4 col-sm-6">
              
//                   <img alt="img1" src={img1} width="630px"/>
              
//             </div>
//             <div className="col-lg-4 col-sm-6">
              
//                   <img alt="img2" src={img2} width="630px" />
              
//             </div>
//             <div className="col-lg-4 col-sm-6">
             
//                   <img alt="img3" src={img3} width="630px"  />
            
//             </div>
//           </div>
//         </LightGallery>
//     </div>
// );
// }

// export default Gallery;

import React, { useState } from "react";
import Zoombox from "zoombox";
import { useRef } from "react";
import classes from "./Gallery.module.css";

import img1 from "./Image/Img 1.jpg"
import img2 from "./Image/Img 2.jpg"
import img3 from "./Image/Img 3.jpg"
import img4 from "./Image/Img 4.jpg"


const Gallery = () => {
  const [active, setActive] = useState(false);

  const image1 = [
    {
      src: img1,
      caption: 'Nature Landscape 1'
    },
  ];

  const image2 = [
    {
      src: img2,
      caption: 'Nature Landscape 2'
    },
  ];

  const image3 = [
    {
      src: img3,
      caption: 'Nature Landscape 3'
    }
  ];
  
  const image4 = [
    {
      src: img4,
      caption: 'Nature Landscape 4'
    },  

  ];
  
  const containerRef = useRef(null);
  return (
    <div ref={containerRef}>
        <div> 
          <div className="row">
            <div className="col-lg-3">
              {image1.map((image) => (
                <img 
                data-zoombox 
                data-caption={image.caption} 
                key={image.src} 
                src={image.src} 
                alt={image.caption} 
                height={300}
                width={450} 
                style={{ margin:'10px'}} />
              ))}
            </div>
            <div className="col-lg-3">
              {image2.map((image) => (
                <img 
                data-zoombox 
                data-caption={image.caption} 
                key={image.src} 
                src={image.src} 
                alt={image.caption} 
                height={300} 
                width={450} 
                style={{ margin:'10px'}} />
              ))}
            </div>
            <div className="col-lg-3">
              {image3.map((image) => (
                <img 
                data-zoombox 
                data-caption={image.caption} 
                key={image.src} 
                src={image.src} 
                alt={image.caption} 
                height={300} 
                width={450} 
                style={{ margin:'10px'}} />
              ))}
            </div>
            <div className="col-lg-3">
              {image4.map((image) => (
                <img 
                data-zoombox 
                data-caption={image.caption} 
                key={image.src} 
                src={image.src} 
                alt={image.caption} 
                height={300} 
                width={450} 
                style={{ margin:'10px'}} />
              ))}
            </div>
      
          </div>
  
        </div>
     
      <Zoombox
        {...{
          containerRef,
          active,
          setActive,
          maskClosable: true
        }}
      />
    </div>
  );
};
export default Gallery;