import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "antd";

const PromiseTest = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [comments, setComments] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  //Promise 01
  const Promise01 = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
    setTimeout(() => {
      setPosts(res.data);
    }, 2000);
  };
  //Promise 01
  const Promise02 = async () => {
    const res = await axios.get(
      "https://jsonplaceholder.typicode.com/comments"
    );
    setTimeout(() => {
      setComments(res.data);
    }, 2000);
  };

  const handTask = (value: any) => {
    setTimeout(() => {
      console.log(`end!! ${value}`);
    }, 1000);
  };

  //Promise.all
  const getAllData = async () => {
    console.log("before");
    for (const task of [1, 2, 3, 4, 5]) {
      await handTask(task);
    }
    console.log("after");
  };

  return (
    <div>
      <Button type='primary' onClick={() => getAllData()} loading={loading}>
        데이터받기
      </Button>
      <div style={{ display: "flex" }}>
        {posts.map((post: any, index: number) => {
          return (
            <div key={index} style={{ width: "50%" }}>
              post : {post.title}
            </div>
          );
        })}
        {comments.map((comment: any, index: number) => {
          return (
            <div key={index} style={{ width: "50%" }}>
              comment : {comment.title}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PromiseTest;
