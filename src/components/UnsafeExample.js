import { Component } from 'react';

class UnsafeExample extends Component {
  componentWillMount() {
    // unsafe lifecycle method
  }

  render() {
    return null;
  }
}

export default UnsafeExample;
