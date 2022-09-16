import React, { useState, useCallback, useMemo } from "react";
import html2canvas from "html2canvas";

const Capture = () => {
  const [imgUrl, setImgUrl] = useState<string>("");

  const downloadURI = (uri: string, outputName: string) => {
    let link = document.createElement("a");
    link.download = outputName;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    link.remove(); // IE 미지원
  };

  const captureHtml = (className: string) => {
    const canvas = document.querySelector(className) as HTMLElement;
    html2canvas(canvas).then(function (img) {
      img.toBlob(function (blob) {
        let newImg = document.createElement("img"),
          url = blob && URL.createObjectURL(blob);
        console.log("블롭", blob); // Blob {size: 27434, type: 'image/png'}
        console.log("유알엘", url); // blob:http://localhost:3001/c623af83-dad1-4ed7-acb3-f3f06242f2d2
      });
      setImgUrl(img.toDataURL("image/png"));
      console.log(img.toDataURL("image/png"));
      // downloadURI(img.toDataURL("image/png"), "saved.png"); // 이미지 다운로드
    });
  };
  return (
    <>
      <button onClick={() => captureHtml(".barChart")}>
        {" "}
        capture barChart{" "}
      </button>
      <button onClick={() => captureHtml(".radarChart")}>
        {" "}
        capture radarChart{" "}
      </button>
      <div>추가된 이미지 url : {imgUrl}</div>
    </>
  );
};

export default Capture;
