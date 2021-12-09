// const { Number } = require('bson');
const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const  {sourceConnection} = require('../../dbConnection');

const AttendeeScheema = Schema({
  //"_id": mongoose.Types.ObjectId,
 // "_id":{type: mongoose.Schema.Types.ObjectId},
//  "_id":{type: mongoose.Schema.Types.ObjectId,
//     index: true,
//     required: true,
//     auto: true},
  // "_id":{type: mongoose.Schema.Types.ObjectId,
  //   "index": true,
  //   "required": true,
  //   "auto": true}, 

  "dateOfCreation": Date,
  "purchasedTickets": [
      {
          "ticketName": String,
          "numberOfTickets": Number,
          "price": Number,
          "promoApplied": Boolean,
          "ticketIds": [
             String
              
          ],
          "ticketId": Number
              }
  ],
  "parentEvent": Boolean,
  "linkedUserTypeId": String,
  "totalPaymentAmount": Number,
  "paymentStatus": String,
  "hasFile": Boolean,
  "admitted": Boolean,
  "status": String,
  "groupId": String,
  "joinStatus": Boolean,
  "promoApplied": Boolean,
  "eventId": String,
  "attendeeId": String,
  "sentMail": Boolean,
  "reminded": Boolean,
  "attendeeGroups": [
    String
  ],
  "paymentId": String,
  "statusUpdates": [
      {
          "updateOn": String,
          "paymentStatus": String,
          "currentStatus": String,
          "notificationMessage": String
      }
  ],
  "_class": String,
  "currency": String,
  "emailUpdates": [
      {
          "sentMail": Boolean
      }
  ],
  "paymentMethod": String,
  "contact": {
      "_id": String,
      "groups": [ String],
      "phone": Number,
      "email": String,
      "firstName": String,
      "lastName": String,
      "displayName": String
  },
  "numberOfGuests": Number,
  "purchaseDate": Date,
  "qrCodeId": String,
  "groupPrimary": Boolean
},{collection : 'testAttendee'}
  )


//   const Attendee = sourceConnection.model('Attendee', AttendeeScheema);
//   module.exports = Attendee;

 module.exports =  AttendeeScheema;
