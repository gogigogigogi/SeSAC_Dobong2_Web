import { useNavigate, useParams, useSearchParams } from 'react-router-dom';

export default function ProductDetailPage({ products }) {
  // params 를 통해서 몇 번 id 정보를 찾고 있는지 확인
  // app에서는 몇번 id 경로로 접속하는지 알 수가 없기 때문
  const { id } = useParams();
  const navigate = useNavigate();
  const targetProduct = products.find((product) => {
    return product.id === Number(id);
  });

  if (!targetProduct) {
    return <main>없는 상품이에요</main>;
  }

  return (
    <main>
      <p>여기는 상품 디테일 페이지</p>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        뒤로가기
      </button>
      <button
        onClick={() => {
          navigate('/');
        }}
      >
        홈으로 이동
      </button>
      <ul>
        <li>판매번호: {targetProduct.id}</li>
        <li>상품명: {targetProduct.name}</li>
        <li>판매자: {targetProduct.email}</li>
        <li>상세설명: {targetProduct.body}</li>
      </ul>
    </main>
  );
}
