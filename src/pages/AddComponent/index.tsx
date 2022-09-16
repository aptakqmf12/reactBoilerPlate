import React, { FC } from "react";
import AddComponent from "@component/AddComponent";
import Content from "@pages/Layout/content";
import ScssTest from "@component/Scss";

const AddComponentPage: FC = () => {
  return (
    <>
      <Content title='컴포넌트 추가 테스트'>
        <AddComponent />
      </Content>
    </>
  );
};

export default AddComponentPage;
