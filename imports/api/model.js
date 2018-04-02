import { Mongo } from 'meteor/mongo'; 
export const CRMUsers = new Mongo.Collection('CRMUsers');
export const UserFiles = new Mongo.Collection('UserFiles');
export const LeadData = new Mongo.Collection('LeadData');
if (Meteor.isServer) {
}