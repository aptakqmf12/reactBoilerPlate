import React, { useState, useRef, useEffect } from "react";
import { Button } from "antd";
import { Http2ServerRequest } from "http2";

type Data = {
  id: number;
  width: number;
  height: number;
};
const AddComponent = () => {
  const [render, setRender] = useState(false);
  const [width, setWidth] = useState([]);
  const liRef = useRef<HTMLLIElement>(null);
  const [data, setData] = useState<Data[]>([
    { id: 1, width: 100, height: 50 },
    { id: 2, width: 200, height: 70 },
    { id: 3, width: 500, height: 130 },
    { id: 4, width: 100, height: 80 },
  ]);

  useEffect(() => {
    if (render === false) {
      // 렌더링 하기전
    }
    setRender(true);
    // 렌더링 직후
  }, []);
  const onAddComp = (width: number, height: number) => {
    setData([
      ...data,
      {
        id: data.length + 1,
        width,
        height,
      },
    ]);
  };

  const onDeleteComp = (id: number) => {
    setData(data.filter((d) => d.id !== id));
  };

  return (
    <div className='myRef'>
      <Button onClick={() => onAddComp(10, 20)}>add Component</Button>

      <ul>
        {data.map((d, index) => {
          const { id, width, height } = d;
          return (
            <li
              key={id}
              ref={liRef}
              data-width={liRef.current?.clientWidth}
              style={{
                display: "inline-block",
                border: "1px black solid",
                width: width,
                height: height,
              }}
            >
              <span>{id}.</span>
              <span>Component {width} </span>
              <Button onClick={() => onDeleteComp(id)}>delete</Button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default AddComponent;
