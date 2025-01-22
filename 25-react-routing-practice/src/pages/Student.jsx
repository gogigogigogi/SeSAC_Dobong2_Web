import { useNavigate, useParams, useSearchParams } from 'react-router-dom';

export default function Student() {
  const { name } = useParams();
  const [nameParams] = useSearchParams();
  const nameQuery = nameParams.get('name');
  const navigate = useNavigate();

  return (
    <main className='main-container'>
      <div>
        <p>
          학생의 이름은 <span>{name}</span>입니다.
        </p>
        {nameQuery && <p>실제 이름은 {nameQuery}</p>}
      </div>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        이전페이지로
      </button>
    </main>
  );
}
