import { useNavigate, useParams, useSearchParams } from 'react-router-dom';

export default function Student() {
  const { name } = useParams();
  const [searchQuery, setSearchQuery] = useSearchParams();
  const navigate = useNavigate();
  const realName = searchQuery.get('name');

  return (
    <main>
      <h3>
        학생의 이름은 <span style={{ color: 'green' }}>{name}</span>입니다.
      </h3>
      {realName && (
        <p>
          실제 이름은 <span style={{ color: 'red' }}>{realName}</span>
        </p>
      )}
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
