// const { Number } = require('bson');
const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const  {sourceConnection} = require('../../dbConnection');

const eventMigrationScheema = Schema({

            eventId: String,
            startTime: Date,  
            endTime: Date,
            isCompleted: Boolean, 
            isArchieved: Boolean,
            attendee: {
              count: Number,
              default : 0,
              isCompleted: Boolean,
              default : false  //true -> migration completed
            },
            emails: {
              count: Number,
              default : 0,
              isCompleted: Boolean,
              default : false 
            },
            payment: {
              count: Number,
              default : 0,
              isCompleted: Boolean,
              default : false 
            },
            paymentAudit: {
              count: Number,
              default : 0,
              isCompleted: Boolean,
              default : false 
            },
            invitation: {
              count: Number,
              default : 0,
              isCompleted: Boolean,
              default : false 
            },
            eventActivity: {
              count: Number,
              default : 0,
              isCompleted: Boolean,
              default : false 
            },
          

},{collection : 'eventMigration'}
)


//   const Attendee = sourceConnection.model('Attendee', AttendeeScheema);
//   module.exports = Attendee;

 module.exports =  eventMigrationScheema;
