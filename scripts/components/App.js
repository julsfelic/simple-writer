import React from 'react';

import Header from './Header';

class App extends React.Component {

  render() {
    return (
      <Header userId={this.props.params.userId}/>
    );
  }
}

export default App;
