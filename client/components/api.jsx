import React from 'react';
import ReactDOM from 'react-dom';
import FlatButton from 'material-ui/lib/flat-button';
import {Session} from 'meteor/session';
import {ListApi} from './listApi.jsx';
import TrackerReact from 'meteor/ultimatejs:tracker-react';
import {Loader} from './loader.jsx';


  Session.set('api',null);
export class ApiTest extends TrackerReact(React.Component){
  constructor(props){
    super(props);
    this.state = {
      api:null
    }
  }






  handleApi(){
    let self = this;
    let data = {
      ip:"172.100.217.168"
    }
    Meteor.call("getIp", data, function(error, result){
      if(error){
        console.log("error", error);
      }
      if(result){
        Session.set('api',result);

         console.log(result.name);
          console.log(result.main.temp);
            console.log(result.main);
         //self.finalRender();

      }
    });
  }

  list(){
    if (Session.get('api') !== null) {
      let obj;
      let query;
      query = Session.get('api');
      obj = query.map((item)=>{
        return <ListApi key={item.id} item={item}/>
      });
      return obj;
    }

  }

  kelvin(temps){
    let f = Math.round((temps - 273.15) * 1.8 + 32);
    return f
  }

  show(){
    if (Session.get('api') !== null) {
      let weather = Session.get('api');
      let local = this.kelvin(weather.main.temp);
      let max = this.kelvin(weather.main.temp_max);
      let min = this.kelvin(weather.main.temp_min);
      let city = weather.name;
      return(
        <div>
        {"The Temp in "+city+" is "+local+" Max Temp today is "+max+" Low will be "+min}
        </div>
      )
    }
  }

  getData(){
    if (Session.get('api') === null) {
      console.log("no data");
      return(
        <div>
         <h4>No Data yet</h4>
        </div>
      )
    }else{
      let data = Session.get('api');
      let obj = data.map((item)=>{
        console.log(item.title);
          console.log(item.id);
            console.log(item.body);
              console.log(item);

        return item.title;
      })


      console.log(Session.get('api'));

      return(
        <div>
         <h4>good</h4>
        </div>
      )
    }
  }
  handleTemboo(){
    var data = {
      zip:"12020"
    }
   Meteor.call("checkTemboo", data, function(error, result){
     if(error){
       console.log("error", error);
     }
     if(result){
       Session.set('temboo',result);
       console.log(Session.get('temboo'));

        console.log(result);

     }
   });
  }

  renderApi(){

    return(
      <div>

      <FlatButton onClick={this.handleApi.bind(this)} label="Call Api"
      primary={true}/>

            <FlatButton onClick={this.handleTemboo.bind(this)} label="Call Temboo"
            primary={true}/>
      </div>

    )
  }

  finalRender(){
    if (Session.get('api') !== null) {
      return(
        <div>
          {this.show()}
          {this.renderApi()}
          </div>
      )
    }else{
      return(
        <div>
        API
         No data yet
         {this.renderApi()}
           <Loader />

        </div>
      )
    }

  }



  render(){
    return(
      <div>
      {this.finalRender()}
      </div>
    )

  }
}
