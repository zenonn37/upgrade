import React from 'react';
import ReactDOM from 'react-dom';
import CircularProgress from 'material-ui/lib/circular-progress';

export class Loader extends React.Component{
  render(){
    return(
      <div>
       <CircularProgress/>
      </div>
    )
  }
}
