import { Mongo } from 'meteor/mongo';
import {Meteor} from "meteor/meteor";

export const Markers = new Mongo.Collection('markers');

if(Meteor.isServer){
    Meteor.methods({
        insertMarker: function(latlng) {
            Markers.insert({latlng: latlng});
            return 'done';
        },
        removeMarker: function(_user_id) {
            // TODO
        },
        getAll:function(){
            return Markers.find({})
        }
    });
}