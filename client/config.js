import Uploader from 'meteor/tomi:upload-server'

Meteor.startup(function() {
  Uploader.uploadUrl = Meteor.absoluteUrl("/.uploads"); // Cordova needs absolute URL
});
