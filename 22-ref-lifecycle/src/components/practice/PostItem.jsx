export const PostItem = ({ id, title, body }) => {
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
