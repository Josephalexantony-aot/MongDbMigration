const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const eventActivityScheema = Schema({

   
    "actor": {
        "email": String,
        "displayName": String,
        "userId": String,
        "imageUrl": String
    },
    "object": {
        "objectType": String,
        "displayName": String,
        "previousValue": String,
        "newValue": String,
        "updatedField": String,
        "previousObj": {
            "saleEndDate": Date,
            "status": String,
            "currency": String,
            "ticketSellable": Boolean,
            "showRemainingCount": Boolean,
            "limit": Boolean,
            "_class": false,
            "saleStartDate": Date,
            "maximum": Number,
            "tickets": [
                {
                    "active": Boolean,
                    "quantity": Number,
                    "soldTickets": Number,
                    "inclusivePrice": Boolean,
                    "_id": String,
                    "name": String,
                    "description": String,
                    "price": Number,
                    "saleEndDate": Date,
                    "isFree": Boolean,
                    "prices": [
                        {
                            "currency": String,
                            "price": Number,
                            "inclusivePrice": Number
                        }
                    ],
                    "saleStartDate": Date,
                    "remainingCount": Number
                },
                {
                    "_id": String,
                    "isFree": Boolean,
                    "soldTickets": Number,
                    "saleStartDate": Date,
                    "name": String,
                    "description": String,
                    "active": Boolean,
                    "quantity": Number,
                    "prices": [
                        {
                            "price": Number,
                            "inclusivePrice": Number,
                            "currency": String
                        }
                    ],
                    "saleEndDate": Date,
                    "remainingCount": Number
                }
            ],
            "minimum": Number
        },
        "newObj": {
            "_class": String,
            "saleEndDate": Date,
            "tickets": [
                {
                    "prices": [
                        {
                            "price": Number,
                            "inclusivePrice": Number,
                            "currency": String
                        }
                    ],
                    "_id": String,
                    "name": String,
                    "price": Number,
                    "isFree": Boolean,
                    "active": Boolean,
                    "quantity": Number,
                    "inclusivePrice": Number,
                    "description": String,
                    "soldTickets": Number,
                    "saleStartDate": Date,
                    "saleEndDate": Date,
                    "remainingCount": Number
                },
                {
                    "isFree": Boolean,
                    "prices": [
                        {
                            "price": Number,
                            "inclusivePrice": Number,
                            "currency": String
                        }
                    ],
                    "remainingCount": Number,
                    "_id": String,
                    "description": String,
                    "quantity": Number,
                    "soldTickets": Number,
                    "saleStartDate": String,
                    "saleEndDate": String,
                    "name": String,
                    "active": Boolean
                },
                {
                    "soldTickets": Number,
                    "_id": String,
                    "name": String,
                    "isFree": Boolean,
                    "active": Boolean,
                    "quantity": Number,
                    "description": String,
                    "prices": [],
                    "saleStartDate": Date,
                    "saleEndDate": Date,
                    "remainingCount": Number
                }
            ],
            "status": String,
            "showRemainingCount": Boolean,
            "minimum": Number,
            "maximum": Number,
            "saleStartDate": Date,
            "currency": String,
            "ticketSellable": Boolean,
            "limit": Boolean
        }
    },
    "target": {
        "objectType": String,
        "displayName": String,
        "entityId": String
    },
    "_class": String,
    "eventId": String,
    "verb": String,
    "published": Date

}, { collection:'testEventActivity'})


module.exports = eventActivityScheema;
