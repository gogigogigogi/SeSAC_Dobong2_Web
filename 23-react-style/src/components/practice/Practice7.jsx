import { useEffect, useState } from 'react';
import axios from 'axios';
import '../../style/Practice7.scss';

export const Practice7 = () => {
  const [postsState, setPostsState] = useState([]);

  useEffect(() => {
    async function getJson() {
      const result = await axios({
        url: 'https://jsonplaceholder.typicode.com/posts',
        method: 'get',
      });
      console.log(result.data.slice(0, 10));
      setPostsState((await result).data.slice(0, 10));
    }
    getJson();
  }, []);

  return (
    <div className='post-container'>
      <div className='header-title'>💼PostJson</div>
      <ul className='box'>
        {postsState.length === 0 && <div>Loading...</div>}
        {postsState.length > 0 &&
          postsState.map((post) => {
            return (
              <li key={post.id} className='container'>
                <div className='title-box'>
                  <span className='id'>No. {post.id}</span> -
                  <span className='title'>{post.title}</span>
                </div>
                <p className='body'>{post.body}</p>
              </li>
            );
          })}
      </ul>
    </div>
  );
};
