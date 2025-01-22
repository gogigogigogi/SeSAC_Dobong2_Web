import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <main>
      <div>
        <h1>404 ERROR!! 😡</h1>
        <Link to='/'>홈으로 이동</Link>
      </div>
    </main>
  );
}
