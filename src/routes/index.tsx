import { lazy, FC } from "react";
import { Routes, Route, Link } from "react-router-dom";

import Home from "@pages/Home";
import ChartPage from "@pages/Chart";
import CounterPage from "@pages/Counter";
import AddComponentPage from "@pages/AddComponent";
import DownloadImage from "@pages/DownloadImage";
import PromisePage from "@pages/Promise";

const RenderRouter = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='chart' element={<ChartPage />}></Route>
      <Route path='counter' element={<CounterPage />}></Route>
      <Route path='addComponent' element={<AddComponentPage />}></Route>
      <Route path='downloadImage' element={<DownloadImage />}></Route>
      <Route path='promise' element={<PromisePage />}></Route>
    </Routes>
  );
};

export default RenderRouter;
