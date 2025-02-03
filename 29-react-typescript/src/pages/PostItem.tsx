import { PostListInterface } from './PostList';

export const PostItem = ({ id, title, body }: PostListInterface) => {
  return (
    <div style={{ border: '2px solid blue' }}>
      <div>
        <span>No.s {id}</span>
        <span>{title}</span>
      </div>
      <p>{body}</p>
    </div>
  );
};
