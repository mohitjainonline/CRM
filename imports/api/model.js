import { Mongo } from 'meteor/mongo'; 
var maindb;
if (Meteor.isServer) {
    maindb = new MongoInternals.RemoteCollectionDriver("mongodb://mohitjain:abc123@ds153948.mlab.com:53948/dialercrm")
}

export const CRMUsers = new Mongo.Collection('CRMUsers',{_driver : maindb});
export const UserFiles = new Mongo.Collection('UserFiles',{_driver : maindb});
export const LeadData = new Mongo.Collection('LeadData',{_driver : maindb});