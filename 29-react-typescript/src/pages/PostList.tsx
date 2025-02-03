import { useEffect, useState } from 'react';
import { PostItem } from './PostItem';
import axios from 'axios';

export interface PostListInterface {
  id: number;
  title: string;
  body: string;
}

export default function RealPost() {
  const [posts, setPosts] = useState<PostListInterface[]>([]);
  const getPosts = async () => {
    const response = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    );
    console.log(response.data);
    setPosts(response.data.slice(0, 10));
  };

  // useEffect 의 콜백에는 async 를 사용할 수 없음
  useEffect(() => {
    getPosts();
  }, []);
  return (
    <>
      <h6>여기는 RealPost</h6>
      {posts.length === 0 ? (
        <span>Loading...</span>
      ) : (
        posts.map((post) => {
          return (
            <PostItem
              key={post.id}
              id={post.id}
              title={post.title}
              body={post.body}
            />
          );
        })
      )}
    </>
  );
}
