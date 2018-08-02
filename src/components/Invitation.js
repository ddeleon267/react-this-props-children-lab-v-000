// Code Invitation Component Here
import React from 'react';
import PropTypes from 'prop-types';

class Invitation extends React.Component {
  render() {
    return (
      <div className="invitation">
        <h1>You&#39;ve been invited!</h1>
        <div className="invitation-children">{this.props.children}</div>
      </div>
    )
  }
}

export default Invitation;
