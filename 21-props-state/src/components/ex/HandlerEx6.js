import { useState } from 'react';

export const HandlerEx6 = () => {
  const [fruitInfo, setFruitInfo] = useState({
    fruit: 'peach',
    bgColor: 'black',
    fontColor: 'white',
    text: '',
  });
  const [content, setContent] = useState('');

  const handleChange = (e) => {
    const name = e.target.dataset.name;
    const value = e.target.value;

    setFruitInfo((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  return (
    <div>
      <label>
        과일 :
        <select data-name='fruit' onChange={(e) => handleChange(e)}>
          <option value='peach'>복숭아</option>
          <option value='apple'>사과</option>
          <option value='banana'>바나나</option>
          <option value='grape'>포도</option>
        </select>
      </label>
      <label>
        배경색 :
        <select data-name='bgColor' onChange={(e) => handleChange(e)}>
          <option value='black'>검정</option>
          <option value='red'>빨강</option>
          <option value='yellow'>노랑</option>
          <option value='blue'>파랑</option>
        </select>
      </label>
      <label>
        글자색 :
        <select data-name='fontColor' onChange={(e) => handleChange(e)}>
          <option value='white'>하양</option>
          <option value='red'>빨강</option>
          <option value='yellow'>노랑</option>
          <option value='black'>검정</option>
        </select>
      </label>
      <div>
        <label>
          <input
            type='text'
            placeholder='내용을 입력하세요.'
            data-name='text'
            onChange={(e) => {
              handleChange(e);
            }}
            value={fruitInfo.text}
          />
        </label>
      </div>
      <div>
        <img
          src={`/${fruitInfo.fruit}.jpg`}
          style={{ width: '100px', height: '100px' }}
          alt='fruit'
        />
      </div>
      <div
        style={{
          backgroundColor: fruitInfo.bgColor,
          color: fruitInfo.fontColor,
          width: '100px',
        }}
      >
        {fruitInfo.text ? fruitInfo.text : 'text'}
      </div>
    </div>
  );
};

// export const HandlerEx6 = () => {
//   const [fruitInfo, setFruitInfo] = useState({
//     fruit: 'peach',
//     bgColor: 'black',
//     fontColor: 'white',
//   });
//   const [content, setContent] = useState('');

//   const handleChange = (e) => {
//     const name = e.target.dataset.name;
//     const value = e.target.value;

//     setFruitInfo((preValue) => {
//       return {
//         ...preValue,
//         [name]: value,
//       };
//     });
//   };

//   return (
//     <div>
//       <label>
//         과일 :
//         <select data-name='fruit' onChange={(e) => handleChange(e)}>
//           <option value='peach'>복숭아</option>
//           <option value='apple'>사과</option>
//           <option value='banana'>바나나</option>
//           <option value='grape'>포도</option>
//         </select>
//       </label>
//       <label>
//         배경색 :
//         <select data-name='bgColor' onChange={(e) => handleChange(e)}>
//           <option value='black'>검정</option>
//           <option value='red'>빨강</option>
//           <option value='yellow'>노랑</option>
//           <option value='blue'>파랑</option>
//         </select>
//       </label>
//       <label>
//         글자색 :
//         <select data-name='fontColor' onChange={(e) => handleChange(e)}>
//           <option value='white'>하양</option>
//           <option value='red'>빨강</option>
//           <option value='yellow'>노랑</option>
//           <option value='black'>검정</option>
//         </select>
//       </label>
//       <div>
//         <label>
//           <input
//             type='text'
//             placeholder='내용을 입력하세요.'
//             onChange={(e) => {
//               setContent(e.target.value);
//             }}
//             value={content}
//           />
//         </label>
//       </div>
//       <div>
//         <img
//           src={`/${fruitInfo.fruit}.jpg`}
//           style={{ width: '100px', height: '100px' }}
//           alt='fruit'
//         />
//       </div>
//       <div
//         style={{
//           backgroundColor: fruitInfo.bgColor,
//           color: fruitInfo.fontColor,
//           width: '100px',
//         }}
//       >
//         {content ? content : 'text'}
//       </div>
//     </div>
//   );
// };
