Markers = new Mongo.Collection('markers');

Markers.allow({
    insert: function(userId) {
        return true;
        return !!userId;//if userId exists
    },
    update: function(userId, doc) {
        //don't forget the update method in the end of this page
        return true;
        return !!userId;
    }
});

MarkersSchema = new SimpleSchema({
    latlng: {
        type: String,
        label: "User Id",
        optional: true
    },
    createdAt: {
        type: Date,
        label: "Created At",
        autoValue: function () {
            return new Date();
        }
    }
});

Markers.attachSchema(MarkersSchema);
