import React, { Component } from 'react';

export class RefClass1 extends Component {
  handleFocus = () => {
    console.log(this.myInput);
    console.log(this.myInput.value);
    this.myInput.focus();
  };
  render() {
    return (
      <div>
        <p>클래스형 컴포넌트, 버튼클릭시 input에 focus 처리</p>
        <p>ref 속성에 콜백 전달</p>
        <input
          type='text'
          // this는 RefClass1을 의미
          ref={(ref) => {
            this.myInput = ref;
          }}
        />
        <button onClick={this.handleFocus}>focus</button>
      </div>
    );
  }
}

export class RefClass2 extends Component {
  // createRef()를 사용해서 ref 객체를 사용
  myInput = React.createRef();
  handleFocus = () => {
    console.log(this.myInput.current);
    console.log(this.myInput.current.value);
    this.myInput.current.focus();
  };
  render() {
    return (
      <div>
        <p>클래스형 컴포넌트, 버튼클릭시 input에 focus 처리</p>
        <p>createRef()를 통해서 ref 객체 생성</p>
        <input type='text' ref={this.myInput} />
        <button onClick={this.handleFocus}>focus</button>
      </div>
    );
  }
}
