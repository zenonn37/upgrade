import React from 'react';
import ReactDOM from 'react-dom';
import Paper from 'material-ui/lib/paper';
import DropzoneComponent from 'react-dropzone-component/lib/react-dropzone.js';
import Uploader from 'meteor/tomi:upload-server'


const styles={
  paper:{
    padding:"20px"
  }
}
var djsConfig = {
    addRemoveLinks: true,
    acceptedFiles: "image/jpeg,image/png"
};
const configComponent = {
  iconFiletypes: ['.jpg', '.png'],
  showFiletypeIcon: true,
  postUrl: '/.uploads/'
}










export class Home extends React.Component{
  constructor(){
    super();
      this.state = {
        new:false
      }

  }



   getApi() {
     let data ={
       zip:'12020'
     }

   }

  render(){

    var callbackArray = [
        function() {
            console.log('Look Ma, I\'m a callback in an array!');
        },
        function() {
            console.log('Wooooow!');
        }
    ];

    var simpleCallBack = function(dropzone) {
        console.log('I\'m a simple callback ' + dropzone.name);


    };


    var eventHandlers = {
        // All of these receive the event as first parameter:
        drop: callbackArray,
        dragstart: null,
        dragend: null,
        dragenter: null,
        dragover: null,
        dragleave: null,
        // All of these receive the file as first parameter:
        addedfile: simpleCallBack,
        removedfile: null,
        thumbnail: null,
        error: null,
        processing: null,
        uploadprogress: null,
        sending: null,
        success: null,
        complete: null,
        canceled: null,
        maxfilesreached: null,
        maxfilesexceeded: null,
        // All of these receive a list of files as first parameter
        // and are only called if the uploadMultiple option
        // in djsConfig is true:
        processingmultiple: null,
        sendingmultiple: null,
        successmultiple: null,
        completemultiple: null,
        canceledmultiple: null,
        // Special Events
        totaluploadprogress: null,
        reset: null,
        queuecompleted: null
    }







    return(
      <div>
      <Paper style={styles.paper} zDepth={1}>
         <DropzoneComponent
          djsConfig={djsConfig}
          config={configComponent}
          eventHandlers={eventHandlers} />
      </Paper>

      </div>
    )
  }
}
