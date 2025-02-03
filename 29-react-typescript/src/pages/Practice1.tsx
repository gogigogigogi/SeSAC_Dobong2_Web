import { Link } from 'react-router-dom';
import HeaderMenu from '../components/HeaderMenu';

export default function Practice1() {
  return (
    <>
      <HeaderMenu />
      <div>
        <Link to='codingon' style={{ marginRight: '10px' }}>
          코딩온 실습문제
        </Link>
      </div>
    </>
  );
}
