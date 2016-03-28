import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  /*
   UploadServer.init({
     tmpDir: process.env.PWD + '/.uploads/tmp',
     uploadDir: process.env.PWD + '/.uploads',
     checkCreateDirectories: true,
     getDirectory:function(fileInfo, formFields) {
         return formData.contentType;
     }
   });
   */
var id ="484j4j4k4fdd";
  UploadServer.init({
  tmpDir:  process.env.PWD + '/.uploads/tmp',
  uploadDir:  process.env.PWD + '/.uploads/',
  checkCreateDirectories: true,
  uploadUrl: '/.uploads/',
  //checkCreateDirectories: true,
  // *** For renaming files on server
  getFileName: function(file, formData) {
  	return new Date().getTime() + '-' + Math.floor((Math.random() * 10000) + 1) + '-' + file.name;
  	// we get this value in the ajax response
  },
  finished: function(file, formData) {
      // perform a disk operation
      console.log("working " + file.name);
      let data ={
        id:id,
        photo:file.name
      }
      Gallery.insert(data,function(err) {
        if (err) {
          console.log("bad");

        }else{
          console.log("good");

        }
      });

    },
  });
});
