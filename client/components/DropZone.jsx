import React from 'react';
import ReactDOM from 'react-dom';

export const DropZone = React.createClass({

  componentWillMount(){
    this.view = Blaze.render(Template.dropzone,
    ReactDOM.findDOMNode(this.refs.drop));
  },
  componentWillUnmount() {
  // Clean up Blaze view
  Blaze.remove(this.view);
  },

  render(){
    return(
      <span ref="drop"/>
    )
  }
})
