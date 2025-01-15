export default function BasicCss() {
  const childDiv = {
    backgroundColor: 'pink',
    width: '100px',
    height: '100px',
    textAlign: 'center',
    lineHeight: '100px',
  };
  return (
    <>
      <h3>스타일 적용 방법</h3>
      <h4 style={{ color: '#888' }}>인라인 스타일로 적용</h4>
      <div style={{ backgroundColor: '#ddd' }}>
        <div style={childDiv}>안녕하세요!</div>
      </div>
      <h4>css 파일로 적용</h4>
      <div className='box1'>
        <div>안녕하세요?</div>
      </div>
    </>
  );
}
