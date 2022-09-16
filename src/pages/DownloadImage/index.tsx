import React, { FC } from "react";
import DownloadImage from "@component/DownloadImage";
import Content from "@pages/Layout/content";

const AddComponentPage: FC = () => {
  return (
    <>
      <Content title='컴포넌트 추가 테스트'>
        <DownloadImage />
      </Content>
    </>
  );
};

export default AddComponentPage;
