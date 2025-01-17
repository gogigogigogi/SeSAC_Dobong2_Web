import { Link } from 'react-router-dom';

export default function Header() {
  const style = {
    margin: '4px',
  };
  return (
    <header className='header-container'>
      <h2>ReactRouter 실습</h2>
      <nav>
        <ul>
          <Link to='/student/sean' style={style}>
            학생
          </Link>
          <Link to='/student/codingon' style={style}>
            코딩온
          </Link>
          <Link to='/student/new?name=jisu' style={style}>
            searchParams
          </Link>
        </ul>
      </nav>
    </header>
  );
}
