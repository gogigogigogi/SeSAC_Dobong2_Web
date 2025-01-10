export default function PropsMap2({ arr }) {
  return (
    <div style={{ border: '1px solid red' }}>
      <ul>
        <li>
          props가 배열이고, 해당 배열로 map 연산을 실행시킬 때, props가 전달되지
          않는 순간을 대비해야 한다.
        </li>
        <li>
          ?를 이용해서 props가 전달되지 않았을 때 map연산을 하지 않을 수 있음
        </li>
      </ul>
      {/* 데이터 유뮤가 확실하지 않을때 물음표를 붙이면 데이터가 있을때만 연산 진행됨 */}
      {arr?.map((el, i) => {
        return <div key={i}>{el.name}</div>;
      })}
    </div>
  );
}
