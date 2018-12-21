import { Mongo } from 'meteor/mongo'; 
var maindb;
if (Meteor.isServer) {
    //maindb = new MongoInternals.RemoteCollectionDriver("mongodb://mohitjain:abc123@ds153948.mlab.com:53948/dialercrm")
    maindb = new MongoInternals.RemoteCollectionDriver("mongodb://heroku_j4cdmcp8:9sdbr4mh4guvgo5d03pm02fpvc@ds141294.mlab.com:41294/heroku_j4cdmcp8")
}

export const CRMUsers = new Mongo.Collection('CRMUsers',{_driver : maindb});
export const UserFiles = new Mongo.Collection('UserFiles',{_driver : maindb});
export const LeadData = new Mongo.Collection('LeadData',{_driver : maindb});