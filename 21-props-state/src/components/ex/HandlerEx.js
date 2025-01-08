import { Component } from 'react';

export default class HandlerEx extends Component {
  state = {
    str: 'Hello world',
  };
  render() {
    const { str } = this.state;

    return (
      <div>
        <div>{str}</div>
        <button
          onClick={() => {
            this.setState({ str: 'Goodby World!' });
          }}
        >
          클릭
        </button>
      </div>
    );
  }
}
