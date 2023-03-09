import React from "react";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import pdf from "./TOS.pdf";
// import '@react-pdf-viewer/core/lib/styles/index.css';
// import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const Pdfviewer = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.3.122/build/pdf.worker.js">
      <div style={{ height: "750px" }}>
        <Viewer fileUrl={pdf} plugins={[defaultLayoutPluginInstance]} />
      </div>
    </Worker>
  );
};

export default Pdfviewer;
