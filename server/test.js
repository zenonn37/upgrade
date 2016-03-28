/*

import https from 'https';
import Util from 'temboo/core/util';
import tsession from "temboo/core/temboosession";
import Google from 'temboo/Library/Google/Geocoding';
import { Meteor } from 'meteor/meteor';





function findData(results){
  let num1 =  5;
  let num2 = 2;


  return num1 + num2;

}
var getdata = findData();

console.log(getdata);

function findRes(res) {
    console.log(res + "hmm");
    return res;

}



  var session = new tsession.TembooSession("zenonn36", "myFirstApp", "ae9b87e900704912a177e041e1b69849");

  //var Google = require("temboo/Library/Google/Geocoding");

  var geocodeByAddressChoreo = new Google.GeocodeByAddress(session);

  // Instantiate and populate the input set for the choreo
  var geocodeByAddressInputs = geocodeByAddressChoreo.newInputSet();

  // Set inputs
  geocodeByAddressInputs.set_Address("12020");

  // add an output filter to extract the full address
geocodeByAddressInputs.addOutputFilter("address", "/GeocodeResponse/result/formatted_address", "Response")
// add an output filter to extract the collection of address long_name components
geocodeByAddressInputs.addOutputFilter("components", "/GeocodeResponse/result/address_component/long_name", "Response")


 geocodeByAddressChoreo.execute(
       geocodeByAddressInputs,
      function(results) {
          console.log("Status " +results.getCompletionStatus());
          console.log(results.get_Longitude());
          var response = results.get_Longitude();
             console.log("address", results.getResult('address'));

          for(var i = 0; i < results.getResultList("components").length; i++) {
             console.log("components:", results.getResultList("components")[i]);
  }

      },
      function(error) {
        console.log(error.type);
        console.log(error.message);

      }
);






  var successFunction = function(results) {
    console.log("Status " +results.getCompletionStatus());
    console.log("Choreo start time: " + results.getStartTime());
  	console.log("Choreo end time: " + results.getCompletionTime());
  	console.log("Choreo execution ID: " + results.getID());
    console.log(results.get_Longitude());
       var obj = results.get_Longitude();
       console.log(obj+ "in success");
       return obj;

  }
  var errorFunction = function(results) {
      console.log("Error");
  }
  geocodeByAddressChoreo.execute(geocodeByAddressInputs, successFunction , errorFunction);














function test(){
  console.log("go");

  return "go"
}







var Get =  null
Meteor.methods({

  getGoogle(doc){


      geocodeByAddressChoreo.execute(
            geocodeByAddressInputs,
           function(results) {
               console.log("Status " +results.getCompletionStatus());
               console.log(results.get_Longitude());
               var response = results.get_Longitude();
                  console.log("address", results.getResult('address'));
                  Get = "address", results.getResult('address');
                  console.log(Get);


               for(var i = 0; i < results.getResultList("components").length; i++) {
                  console.log("components:", results.getResultList("components")[i]);

       }

           },
           function(error) {
             console.log(error.type);
             console.log(error.message);

           }
     );





    return{
      res:Get
    }

},
checkStatus(res){
  console.log("called");

}





});
*/
