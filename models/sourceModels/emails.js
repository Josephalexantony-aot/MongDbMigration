const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const  {sourceConnection} = require('../../dbConnection');
const emailSchema = Schema({
            "contact": {
            "groups": [String]
            },
            "attendeeGroups": [String],
            "htmlOrtext": String,
            "toEmail": String,
            "emailSent": Boolean,
            "markAsRead": String,
            "eventid": String,
            "createdOn": Date,
            "fromName": String,
            "priority": String,
            "sendOn": Date,
            "type": String,
            "emailTemplateObject": {
                "customerDetails": {
                    "displayName": String,
                    "firstName": String,
                    "lastName": String,
                    "email": String,
                    "phoneNumber": Number
                },
                "payment": {
                    "bookingId": String,
                    "actualAmountExcludingGatewayFees": Number,
                    "dueAmount": Number,
                    "currency": String,
                    "purchasedTickets": [
                        {
                            "ticketId": String,
                            "ticketName": String,
                            "numberOfTickets": Number,
                            "price": Number,
                            "inclusivePrice": Number,
                            "promoApplied": Boolean,
                            "ticketIds": [
                                String
                            ]
                        }
                    ],
                    "status": String,
                    "_id": String
                },
                "event": {
                    "_id":String,
                    "createdBy": String,
                    "author": String,
                    "timeZoneName": String,
                    "paymentSettings": {
                        "collectTax": Boolean,
                        "acceptDonation": Boolean,
                        "paymentMode": String
                    },
                    "startTime": Date,
                    "eventType": Number,
                    "eventCategory": [
                        String
                    ],
                    "timeZone": String,
                    "onlineChargeIncluded": Boolean,
                    "isPaidEvent": Boolean,
                    "name": String,
                    "locationAddress": String,
                    "authorURI": String,
                    "secureCode": String,
                    "location": {
                        "city": String,
                        "country": String,
                        "coordinates": [
                           Number
                        ]
                    },
                    "endTime": Date,
                    "eventURI": String,
                    "privateEvent": Boolean,
                    "description": String,
                    "lastTouchedTime": Date
                },
                "ticketsCalculation": {
                    "1556900878": String
                },
                "purchasedTickets": [
                    {
                        "inclusivePrice": Number,
                        "promoApplied": Boolean,
                        "ticketIds": [
                            String
                        ],
                        "ticketId": String,
                        "ticketName": String,
                        "numberOfTickets": Number,
                        "price": Number
                    }
                ]
            },
            "replyTo": String,
            "_class": String,
            "fromEmail": String,
            "toName": String,
            "sentStatusMsg": String,
            "contents": {
                "attendee": String,
                "attendeeId": String,
                "urlOfEvent": String,
                "totalPayment": String,
                "eventname": String,
                "paymentDate": Date,
                "eventId": String,
                "bodyContent": String,
                "appUrl": String,
                "createdBy": String,
                "organizerEmail": String,
                "attendeeKey": String,
                "eventDate": String,
                "eventEndDate": Date,
                "toEmail": String
            },
            "purchasedTickets": [],
            "statusUpdates": [],
            "emailUpdates": []
},{collection : 'testEmail'}
  )

//   const Emails = sourceConnection.model('Emails', emailSchema);
//   module.exports = Emails;
  module.exports = emailSchema;