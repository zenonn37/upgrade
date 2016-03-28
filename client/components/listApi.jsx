import React from 'react';
import ReactDOM from 'react-dom';

export class ListApi extends React.Component{
  constructor(props){
    super(props);
  }

  render(){

    if (this.props.item) {
      console.log(this.props.item);

        let list = this.props.item;
        return(
          <div>
          <ul>
          <li><h3>{list.title}</h3></li>
            <li><p>{list.body}</p></li>
          </ul>
          </div>
        )
    }else{
      console.log("problem with data");

      return(
        <div>
        no data
        </div>
      )
    }


  }
}
