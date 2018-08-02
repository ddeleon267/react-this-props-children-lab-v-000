// Code ThemedDecoration Component Here
import React from 'react';
import ReactDOM from 'react-dom';

class ThemedDecoration extends React.Component {
  render() {
    return (
      <div className="themed-decorations">
       {this.props.children.map(child => <div className="heaven">{child}</div>)}
     </div>
    )
  }
}

ThemedDecoration.defaultProps = {

};

export default ThemedDecoration;
