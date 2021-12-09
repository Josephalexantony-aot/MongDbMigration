const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const  {sourceConnection} = require('../../dbConnection');
const invitationSchema = Schema({
           
    
       
        "attendees": [
            {
                "admitted": Boolean,
                "attendeeGroups": [
                    String
                ],
                "promoApplied": Boolean,
                "purchaseDate": Date,
                "paymentStatus": String,
                "hasFile": Boolean,
                "paymentId": String,
                "status": String,
                "groupPrimary": Boolean,
                "groupId": String,
                "totalPaymentAmount": Number,
                "purchasedTickets": [
                    {
                        "ticketId": String,
                        "ticketName": String,
                        "numberOfTickets": Number,
                        "price": Number,
                        "taxAmount": Number
                    }
                ],
                "contact": {
                    "groups": [],
                    "email": String,
                    "displayName": String,
                    "_id": String
                },
                "attendeeId": String,
                "sentMail": Boolean,
                "reminded": Boolean,
                "numberOfGuests": Number,
                "currency": String
            },
            {
                "reminded": Boolean,
                "groupId": String,
                "purchaseDate": Date,
                "currency":String,
                "status": String,
                "attendeeId":String,
                "contact": {
                    "_id": null,
                    "groups": [],
                    "email": String,
                    "displayName": String
                },
                "promoApplied": Boolean,
                "totalPaymentAmount": Number,
                "attendeeGroups": [
                    String
                ],
                "numberOfGuests": Number,
                "groupPrimary": Boolean,
                "paymentStatus": String,
                "paymentId": String,
                "purchasedTickets": [
                    {
                        "taxAmount": Number,
                        "ticketId": String,
                        "ticketName": String,
                        "numberOfTickets":Number,
                        "price": Number
                    }
                ],
                "hasFile": Boolean,
                "sentMail": Boolean,
                "admitted": Boolean
            },
            {
                "sentMail": Boolean,
                "admitted": Boolean,
                "paymentStatus": String,
                "paymentId": String,
                "currency": String,
                "attendeeGroups": [
                    String
                ],
                "groupId": String,
                "numberOfGuests": Number,
                "promoApplied": Boolean,
                "groupPrimary": Boolean,
                "purchaseDate": Date,
                "totalPaymentAmount": String,
                "hasFile": Boolean,
                "purchasedTickets": [
                    {
                        "ticketId": String,
                        "ticketName": String,
                        "numberOfTickets": Number,
                        "price": Number,
                        "taxAmount": Number
                    }
                ],
                "contact": {
                    "email": String,
                    "displayName": String,
                    "_id": null,
                    "groups": []
                },
                "status": String,
                "attendeeId": String,
                "reminded": Boolean
            },
            {
                "purchasedTickets": [
                    {
                        "ticketId": String,
                        "ticketName": String,
                        "numberOfTickets": Number,
                        "price": Number,
                        "taxAmount": Number
                    }
                ],
                "hasFile": Boolean,
                "attendeeId": String,
                "attendeeGroups": [
                    String
                ],
                "groupPrimary": Boolean,
                "groupId": String,
                "paymentStatus": String,
                "paymentId": String,
                "contact": {
                    "displayName": String,
                    "_id": null,
                    "groups": [],
                    "email": String
                },
                "status": String,
                "sentMail": Boolean,
                "admitted": Boolean,
                "promoApplied": Boolean,
                "reminded": Boolean,
                "numberOfGuests": 0,
                "purchaseDate": Date,
                "currency": String,
                "totalPaymentAmount": Number
            },
            {
                "status": String,
                "attendeeId": String,
                "sentMail": Boolean,
                "admitted": Boolean,
                "groupPrimary": Boolean,
                "numberOfGuests": Number,
                "promoApplied": Boolean,
                "totalPaymentAmount": Number,
                "hasFile": Boolean,
                "reminded": Boolean,
                "groupId": String,
                "paymentId": String,
                "purchaseDate": String,
                "currency": String,
                "contact": {
                    "email": String,
                    "displayName": String,
                    "_id": null,
                    "groups": []
                },
                "attendeeGroups": [
                    String
                ],
                "paymentStatus": String,
                "purchasedTickets": [
                    {
                        "ticketId": String,
                        "ticketName": String,
                        "numberOfTickets": Number,
                        "price": Number,
                        "taxAmount": Number
                    }
                ]
            },
            {
                "contact": {
                    "_id": null,
                    "groups": [],
                    "email": String,
                    "displayName": String
                },
                "attendeeId": String,
                "totalPaymentAmount": Number,
                "currency": String,
                "purchaseDate": Date,
                "purchasedTickets": [
                    {
                        "ticketId": String,
                        "ticketName": String,
                        "numberOfTickets": Number,
                        "price": Number,
                        "taxAmount": Number
                    }
                ],
                "hasFile": Boolean,
                "status": String,
                "reminded": Boolean,
                "attendeeGroups": [
                    String
                ],
                "groupId": String,
                "numberOfGuests": Number,
                "sentMail": Boolean,
                "groupPrimary": Boolean,
                "paymentId": String,
                "admitted": Boolean,
                "promoApplied": Boolean,
                "paymentStatus": String
            },
            {
                "promoApplied": Boolean,
                "purchaseDate": Date,
                "totalPaymentAmount": Number,
                "purchasedTickets": [
                    {
                        "price": Number,
                        "taxAmount": Number,
                        "ticketId": String,
                        "ticketName": String,
                        "numberOfTickets": Number
                    }
                ],
                "attendeeGroups": [
                    String
                ],
                "numberOfGuests": Number,
                "paymentId": String,
                "admitted": Boolean,
                "paymentStatus": String,
                "groupPrimary": Boolean,
                "groupId": String,
                "currency": String,
                "hasFile": Boolean,
                "contact": {
                    "_id": null,
                    "groups": [],
                    "email": String,
                    "displayName": String
                },
                "sentMail": Boolean,
                "reminded": Boolean,
                "status": String,
                "attendeeId": String
            },
            {
                "currency": String,
                "attendeeId": String,
                "attendeeGroups": [
                    String
                ],
                "paymentStatus": String,
                "totalPaymentAmount": Number,
                "contact": {
                    "_id": null,
                    "groups": [],
                    "email": String,
                    "displayName": String
                },
                "reminded": Boolean,
                "purchasedTickets": [
                    {
                        "ticketId": String,
                        "ticketName": String,
                        "numberOfTickets": Number,
                        "price": Number,
                        "taxAmount": Number
                    }
                ],
                "hasFile": Boolean,
                "purchaseDate": Date,
                "status": String,
                "admitted": Boolean,
                "numberOfGuests": Number,
                "promoApplied": Boolean,
                "sentMail": Boolean,
                "groupPrimary": Boolean,
                "groupId": String,
                "paymentId": String
            }
        ],
        "guestListCode": String,
        "invitationGroups": [
            {
                "_id": String,
                "name": String,
                "viewType": String
            }
            
        ],
        "fieldCheckBoxes": {
            "response": Boolean,
            "name": Boolean,
            "email": Boolean,
            "phone": Boolean,
            "status": Boolean,
            "deliveryStatus": Boolean
        },
        "_class": String
    
    
},{collection : 'testInvitation'})
 
// const Invitation = sourceConnection.model('Invitation', invitationSchema);
// module.exports = Invitation;
// module.exports = mongoose.model('Invitation', invitationSchema)
module.exports = invitationSchema;