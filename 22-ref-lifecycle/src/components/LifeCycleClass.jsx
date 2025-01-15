import { Component } from 'react';

class MyComponent extends Component {
  // 마운트가 된 직후에 동작하는 메소드
  componentDidMount() {
    console.log('mount 되었어요!!');
  }
  // 업데이트가 된 직후에 동작하는 메소드
  componentDidUpdate() {
    console.log('update 되었어요!!');
  }
  // 언마운트 되기 직전에 동작하는 메소드
  componentWillUnmount() {
    console.log('unmount 될거에요!!');
  }
  render() {
    return <p>MyComponent {this.props.number}</p>;
  }
}
class LifeCycleClass extends Component {
  state = {
    number: 0,
    visible: true,
  };
  changeNumberState = () => {
    this.setState({ number: this.state.number + 1 });
  };
  changeVisibleState = () => {
    this.setState({ visible: !this.state.visible });
  };
  render() {
    return (
      <>
        <button onClick={this.changeNumberState}>PLUS</button>
        <button onClick={this.changeVisibleState}>On/Off</button>
        {/* 
        - visible state 값에 따라서 MyComponent 가 생성 및 제거됨
        - 생성(mount), 제거(unmount)
        */}
        {this.state.visible && <MyComponent number={this.state.number} />}
      </>
    );
  }
}

export default LifeCycleClass;
