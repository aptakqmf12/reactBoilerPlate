import React, { FC } from "react";
import Counter from "@component/Counter";
import Content from "@pages/Layout/content";
import Home from "@component/Home";

const CounterPage: FC = () => {
  return (
    <>
      <Content title='Home'>
        <Home />
      </Content>
    </>
  );
};

export default CounterPage;
