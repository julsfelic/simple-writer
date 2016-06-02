import React from 'react';

class App extends React.Component {

  render() {
    return <h1>{this.props.params.userId}</h1>
  }
}

export default App;
