import React from 'react';
import { Link } from 'react-router';

class Header extends React.Component {

  render() {
    let userId = this.props.userId;

    return (
      <header>
        <Link to={`/user/${userId}`}>{userId}</Link>
        <Link to="#">Log Out</Link>
      </header>
    );
  }
}

export default Header;
