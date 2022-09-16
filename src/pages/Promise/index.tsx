import React, { FC } from "react";
import PromiseTest from "@component/Promise";
import Content from "@pages/Layout/content";

const PromisePage: FC = () => {
  return (
    <>
      <Content title='Promise테스트'>
        <PromiseTest />
      </Content>
    </>
  );
};

export default PromisePage;
