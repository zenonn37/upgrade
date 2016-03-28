import Util from 'temboo/core/util';
import tsession from "temboo/core/temboosession";
import Google from 'temboo/Library/Google/Geocoding';
import Fitbit from 'temboo/Library/Fitbit/OAuth';
import FitbitProfile from 'temboo/Library/Fitbit/Profile';

var session = new tsession.TembooSession("zenonn36", "myFirstApp", "ae9b87e900704912a177e041e1b69849");
var geocodeByAddressChoreo = new Google.GeocodeByAddress(session);
var geocodeByAddressInputs = geocodeByAddressChoreo.newInputSet();
//set inputs

// add an output filter to extract the full address
geocodeByAddressInputs.addOutputFilter("address", "/GeocodeResponse/result/formatted_address", "Response");
// add an output filter to extract the collection of address long_name components
geocodeByAddressInputs.addOutputFilter("components", "/GeocodeResponse/result/address_component/long_name", "Response");
/*
//init Fitbit
var initializeOAuthChoreo = new Fitbit.InitializeOAuth(session);
// Instantiate and populate the input set for the choreo
var initializeOAuthInputs = initializeOAuthChoreo.newInputSet();
// Set inputs
initializeOAuthInputs.set_Scope("activity profile weight social nutrition heartrate");
initializeOAuthInputs.set_ClientID("227NZF");
initializeOAuthChoreo.execute(
initializeOAuthInputs,
function(results){
console.log(results.get_AuthorizationURL());
},
function(error){console.log(error.type); console.log(error.message);}
);

*/
/*
var finalizeOAuthChoreo = new Fitbit.FinalizeOAuth(session);

// Instantiate and populate the input set for the choreo
var finalizeOAuthInputs = finalizeOAuthChoreo.newInputSet();

// Set inputs
finalizeOAuthInputs.set_ClientSecret("ad5189627baca77f44c09351cf6291bb");
finalizeOAuthInputs.set_CallbackID("zenonn36/339d4021-6f7d-4de8-bb53-dc9acb3b0206");
finalizeOAuthInputs.set_ClientID("227NZF");

// Run the choreo, specifying success and error callback handlers
finalizeOAuthChoreo.execute(
    finalizeOAuthInputs,
    function(results){console.log(results.get_AccessToken());},
    function(error){console.log(error.type); console.log(error.message);}
);
*/
var getUserInfoChoreo = new FitbitProfile.GetUserInfo(session);

// Instantiate and populate the input set for the choreo
var getUserInfoInputs = getUserInfoChoreo.newInputSet();

// Set inputs
getUserInfoInputs.set_AccessToken("eyJhbGciOiJIUzI1NiJ9.eyJleHAiOjE0NTkwOTk0OTksInNjb3BlcyI6InJ3ZWkgcnBybyByaHIgcm51dCByc29jIHJhY3QiLCJzdWIiOiIyRFRCWFYiLCJhdWQiOiIyMjdOWkYiLCJpc3MiOiJGaXRiaXQiLCJ0eXAiOiJhY2Nlc3NfdG9rZW4iLCJpYXQiOjE0NTkwOTU4OTl9.K5lH9iH9KPSPjVDvEbDE8UC3xyvOcOG-7CvLf9ERou8");

// Run the choreo, specifying success and error callback handlers
getUserInfoChoreo.execute(
    getUserInfoInputs,
    function(results){console.log(results.get_Response());},
    function(error){console.log(error.type); console.log(error.message);}
);


/*
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
*/

//geocodeByAddressInputs.addOutputFilter("address", "/GeocodeResponse/result/formatted_address", "Response")
var apiTemboo = function(data,callback) {
  console.log("called");
  geocodeByAddressInputs.set_Address(data);

   try{
     var successFunction = function(results) {
       console.log(results.getOutputs());

       console.log("Status " +results.getCompletionStatus());
       console.log("Choreo start time: " + results.getStartTime());
       console.log("Choreo end time: " + results.getCompletionTime());
       console.log("Choreo execution ID: " + results.getID());
       console.log(results.get_Longitude());
          var obj = results.getOutputs();
          console.log(obj+ "in success");
          callback(null, obj);
          return obj;

     }
     var errorFunction = function(results) {
         console.log("Error");
       }
    geocodeByAddressChoreo.execute(geocodeByAddressInputs, successFunction , errorFunction);

   }catch (error){
     if (error) {
       console.log("problem");

     }
   }
}

var apiCall = function(apiUrl, callback) {
  try{
    var response = HTTP.get(apiUrl).data;
    console.log(response);
    callback(null, response);
  }catch (error){
    if (error.response) {
      var errorCode = error.response.data.code;
      var errorMessage = error.reponse.data.message;
    }else {
      var errorCode = 500;
      var errorMessage = 'Cannot access the API';
    }
    var myError = new Meteor.Error(errorCode, errorMessage);
    callback(myError, null);
  }
}



Meteor.methods({
  getIp:function(doc){
    console.log(doc.ip);

    //let ip = doc.ip;
     this.unblock();
       var key = "880583bb1936e6bb615f07fbfd66e6c6";
     //var apiUrl = 'http://www.telize.com/geoip/' + ip;
     var apiUrl = 'http://api.openweathermap.org/data/2.5/weather?zip=12020,us&APPID=880583bb1936e6bb615f07fbfd66e6c6';
     var response = Meteor.wrapAsync(apiCall)(apiUrl);
      console.log(response);
     return response;
  },
  checkTemboo:function(doc) {
    this.unblock();
    var data = doc.zip;
    var response = Meteor.wrapAsync(apiTemboo)(data);
    console.log(response);
    return response;


  }
});
