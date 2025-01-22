import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

export default function Box() {
  const themeContext = useContext(ThemeContext);
  console.log(themeContext);

  return (
    <div>
      <h2>ThemeContext 사용하기</h2>
      Theme : {themeContext}
    </div>
  );
}
