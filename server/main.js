import { Meteor } from 'meteor/meteor';
let Markers = new Mongo.Collection('markers');
Meteor.startup(() => {
  // code to run on server at startup
});

Meteor.methods({
   insertMarker: function(latlng) {
       Markers.insert({latlng: latlng});
       return 'done';
   },
   removeMarker: function(_user_id) {
      // TODO
   }
});





// Listen to incoming HTTP requests, can only be used on the server
WebApp.connectHandlers.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  return next();
});
