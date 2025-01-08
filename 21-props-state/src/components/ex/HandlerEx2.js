import { useState } from 'react';

export const HandlerEx2 = () => {
  const [colorInfo, setColorInfo] = useState({
    color: 'black',
    content: '검정색 글씨',
  });
  return (
    <div>
      <div style={{ color: colorInfo.color }}>{colorInfo.content}</div>
      <button
        onClick={() => {
          setColorInfo({
            color: 'red',
            content: '빨간색 글씨',
          });
        }}
      >
        빨간색
      </button>
      <button
        onClick={() => {
          setColorInfo({
            color: 'blue',
            content: '파란색 글씨',
          });
        }}
      >
        파란색
      </button>
    </div>
  );
};

// export const HandlerEx2 = () => {
//   const [color, setColor] = useState('black');
//   const [content, setContent] = useState('검정색 글씨');
//   console.log(color);
//   return (
//     <div>
//       <div style={{ color: color }}>{content}</div>
//       <button
//         onClick={() => {
//           setColor('red');
//           setContent('빨간색 글씨');
//         }}
//       >
//         빨간색
//       </button>
//       <button
//         onClick={() => {
//           setColor('blue');
//           setContent('파란색 글씨');
//         }}
//       >
//         파란색
//       </button>
//     </div>
//   );
// };
