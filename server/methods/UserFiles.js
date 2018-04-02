import {UserFiles} from '../../imports/api/model'

Meteor.methods({
    'UpdateStartStop': function(docid,isstart){

        var query = {
            _id : docid
        }
        var update = {
            $set: {
                "isstart": isstart,
                "_updatedAt" : new Date()
            }
        }
        UserFiles.update(query,update)         
    }   
});