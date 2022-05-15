import Client from '../index';
import axios from 'axios';

export const fetchData = async (param: any) => {
  return await Client.credentialsInstance.get(`${Client.path.api}/주소`, param);
};

export const fetchPosts = async (param?: number) => {
  const res = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${param}`
  );
  return res.data;
};
