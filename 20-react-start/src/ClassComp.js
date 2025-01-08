import { Component } from 'react';

class ClassComp extends Component {
  render() {
    const name = 'allie';
    return (
      <h2
        style={{ color: 'blue' }}
        onClick={() => {
          alert('클릭');
        }}
      >
        {name}클래스형 컴포넌트 사용은 이렇게 합니다.
      </h2>
    );
  }
}

export default ClassComp;
