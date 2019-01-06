import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

//Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
//  this.counter = new ReactiveVar(0);
//});

//Template.hello.helpers({
//  counter() {
//     return Template.instance().counter.get();
//   },
// });

// Template.hello.events({
//   'click button'(event, instance) {
//     // increment the counter when button is clicked
//     instance.counter.set(instance.counter.get() + 1);
//   },
// });

// on startup run resizing event
Meteor.startup(function() {
  $(window).resize(function() {
    $('#map').css('height', window.innerHeight - 82 - 45);
  });
  $(window).resize(); // trigger resize event
});

Template.Map.onCreated(function() {
    var self = this;

    self.autorun(function() {

    });

    self.subscribe('markers');
});

Template.Map.rendered = function() {
  L.Icon.Default.imagePath = '/packages/bevanhunt_leaflet/images/';

  var map = L.map('map', {
    doubleClickZoom: false
  }).setView([0, 0], 2);

  //L.TileLayer('http://{s}.tile.thunderforest.com/landscape/{z}/{x}/{y}.png');
  L.tileLayer.provider('Esri.WorldStreetMap').addTo(map);

  map.on('dblclick', function(event) {
    Meteor.call('insertMarker', event.latlng, function(error) {
      console.log(error);
    });
  });

  // add clustermarkers
  var markers = L.markerClusterGroup();
  map.addLayer(markers);

  // var query = Markers.find();
  // query.observe({
  //   added: function (document) {
  //     var marker = L.marker(document.latlng)
  //       .on('click', function(event) {
  //         Markers.remove({_id: document._id});
  //       });
  //      markers.addLayer(marker);
  //   },
  //   removed: function (oldDocument) {
  //     layers = map._layers;
  //     var key, val;
  //     for (key in layers) {
  //       val = layers[key];
  //       if (val._latlng) {
  //         if (val._latlng.lat === oldDocument.latlng.lat && val._latlng.lng === oldDocument.latlng.lng) {
  //           markers.removeLayer(val);
  //         }
  //       }
  //     }
  //   }
  // });
};
