import React from "react";
import FileSaver from "file-saver";
import JSZip from "jszip";
import { Upload, Button } from "antd";

const DownloadImage = () => {
  const downloadImages = () => {
    const imgUrl =
      "https://itemimage.cjonstyle.net/goods_images/75/014/75466014L.jpg?timestamp=20210616214620";
    const zip = new JSZip();
    zip.file("Hello.txt", "Hello World\n");
    const imgForder = zip.folder("images");
    imgForder?.file("smile.gif", imgUrl, { base64: true });

    zip.generateAsync({ type: "blob" }).then(function (content) {
      FileSaver.saveAs(content, "example.zip");
    });

    console.log("zip", zip);
    console.log("imgForder", imgForder);
    // img.file("smile.gif", imgData, { base64: true });
    // zip.generateAsync({ type: "blob" }).then(function (content) {
    //   FileSaver.saveAs(content, "example.zip");
    // });
  };

  return (
    <>
      <div>
        <Button type='primary' onClick={() => downloadImages()}>
          upload
        </Button>
      </div>
    </>
  );
};

export default DownloadImage;
