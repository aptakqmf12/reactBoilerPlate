import React, { useEffect, useState } from 'react';
import { fetchPosts } from '../../api/services';
import axios from 'axios';
type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const PostBoard = () => {
  const [post, setPost] = useState<Post>();

  useEffect(() => {
    const fetchPost = async (param: number) => {
      const res = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${param}`
      );
      setPost(res.data);
    };
    fetchPost(6);
  }, []);

  return (
    <>
      <div>post borad</div>
      <div>{post?.id}</div>
      <div>{post?.title}</div>
    </>
  );
};

export default PostBoard;
