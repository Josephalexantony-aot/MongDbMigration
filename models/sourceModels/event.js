const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const eventScheema = Schema({

   // "_id": String,
    "_class": String,
    "eventURI": String,
    "eventType": Number,
    "authorURI": String,
    "privateEvent": Boolean,
    "inviteOnlyEvent": Boolean,
    "showInviteResponse": Boolean,
    "autoApproveInvite": Boolean,
    "showRegisterForm": Boolean,
    "showRegisterFormToInvitee": Boolean,
    "active": Boolean,
    "allowItemRegistration": Boolean,
    "publishEvent": Boolean,
    "invitationCap": Boolean,
    "totalAllowedInvites": Number,
    "additionalAttendeesAllowed": Boolean,
    "additionalAttendeesCount": Number,
    "additionalAttendeeDetails": Boolean,
    "ticketSettings": {
        "tickets": [
            {
                "_id": String,
                "name": String,
                "description": String,
                "isFree": Boolean,
                "active": Boolean,
                "quantity": Number,
                "soldTickets": Number,
                "prices": [
                    {
                        "currency": String,
                        "price": Number
                    }
                ],
                "saleStartDate": Date,
                "saleEndDate": Date,
                "remainingCount": Number,
                "privateCategory": Boolean
            }
        ],
        "status": String,
        "currency": String,
        "ticketSellable": Boolean,
        "showRemainingCount": Boolean,
        "limit": Boolean,
        "splitTicketsByOrganizer": Boolean,
        "minimum": Number,
        "maximum": Number
    },
    "paymentSettings": {
        "collectTax": Boolean,
        "taxes": [],
        "acceptDonation": Boolean,
        "currency": String,
        "paymentMode": String
    },
    "regSettings": {
        "minQty": Number,
        "maxQty": Number,
        "editSelection": Boolean,
        "editRegForm": Boolean,
        "showRemainingCount": Boolean
    },
    "sponsorshipSettings": {
        "isActive": Boolean,
        "autoAccept": Boolean,
        "maxAttendeeCount": Number,
        "minAttendeeCount": Number
    },
    "checkInSettings": {
        "startTime": Date,
        "endTime": Date,
        "autoCheckinOut": Boolean,
        "allowCheckOut": Boolean
    },
    "ticketedEvent": Boolean,
    "promotionEnabled": Boolean,
    "onlineChargeIncluded": Boolean,
    "eventItems": {
        "Multimedia Conference Hall": {
            String: [
                {
                    "_id": String,
                    "showItemToPublic": Boolean,
                    "actualExpense": Number,
                    "estimatedExpense": Number,
                    "startTime": Date,
                    "endTime": Date,
                    "creationDate": Date,
                    "name": String,
                    "dateOfCreation": Date,
                    "_class": String
                },
                {
                    "_id": String,
                    "showItemToPublic": Boolean,
                    "actualExpense": Number,
                    "estimatedExpense": Number,
                    "startTime": Date,
                    "endTime": Date,
                    "creationDate": Date,
                    "name": String,
                    "dateOfCreation": Date,
                    "_class": String
                },
                {
                    "_id": String,
                    "showItemToPublic": Boolean,
                    "actualExpense": Number,
                    "estimatedExpense": Number,
                    "startTime": Date,
                    "endTime": Date,
                    "creationDate": Date,
                    "name": String,
                    "dateOfCreation": Date,
                    "_class": String
                },
                {
                    "_id": String,
                    "showItemToPublic": Boolean,
                    "actualExpense": Number,
                    "estimatedExpense": Number,
                    "startTime": Date,
                    "endTime": Date,
                    "creationDate": Date,
                    "name": String,
                    "dateOfCreation": Date,
                    "_class": String
                },
                {
                    "_id": String,
                    "showItemToPublic": Boolean,
                    "subEvents": [
                        {
                            "_id": String,
                            "showItemToPublic": Boolean,
                            "actualExpense": Number,
                            "estimatedExpense": Number,
                            "startTime": Date,
                            "endTime": Date,
                            "creationDate": Date,
                            "name": "Photo Session",
                            "dateOfCreation": Date
                        }
                    ],
                    "actualExpense": Number,
                    "estimatedExpense": Number,
                    "startTime": Date,
                    "endTime": Date,
                    "creationDate": Date,
                    "name": String,
                    "dateOfCreation": String,
                    "_class": String
                },
                {
                    "_id": String,
                    "showItemToPublic": Boolean,
                    "actualExpense": Number,
                    "estimatedExpense": Number,
                    "description": String,
                    "startTime": Date,
                    "endTime": Date,
                    "creationDate": Date,
                    "name": String,
                    "dateOfCreation":Date,
                    "_class": String
                },
                {
                    "_id": String,
                    "showItemToPublic": Boolean,
                    "actualExpense": Number,
                    "estimatedExpense": Number,
                    "description": String,
                    "startTime": String,
                    "endTime": String,
                    "creationDate": Date,
                    "name": String,
                    "dateOfCreation": Date,
                    "_class": String
                },
                {
                    "_id": String,
                    "showItemToPublic": Boolean,
                    "subEvents": [
                        {
                            "_id": String,
                            "showItemToPublic": Boolean,
                            "actualExpense": Number,
                            "estimatedExpense": Number,
                            "description": Date,
                            "startTime": Date,
                            "endTime": Date,
                            "creationDate": Date,
                            "name": String,
                            "dateOfCreation": Date
                        }
                    ],
                    "actualExpense": Number,
                    "estimatedExpense": Number,
                    "description": String,
                    "startTime": String,
                    "endTime": String,
                    "creationDate": String,
                    "name": String,
                    "dateOfCreation": Date,
                    "_class":String
                },
                {
                    "_id": String,
                    "showItemToPublic": Boolean,
                    "actualExpense": Number,
                    "estimatedExpense": Number,
                    "description": String,
                    "startTime": String,
                    "endTime": String,
                    "creationDate":String,
                    "name":String,
                    "dateOfCreation": String,
                    "_class": String
                },
                {
                    "_id": String,
                    "showItemToPublic": Boolean,
                    "actualExpense": Number,
                    "estimatedExpense": Number,
                    "startTime": String,
                    "endTime": String,
                    "creationDate": String,
                    "name": String,
                    "dateOfCreation": String,
                    "_class": String
                }
            ]
        }
    },
    "tasks": [],
    "resources": [],
    "forms": [
        {
            "_id": String,
            "name": String,
            "mandatoryFields": [
                {
                    "_id": String,
                    "name": String,
                    "type": String,
                    "placeholder": String,
                    "order": "1",
                    "validation": Boolean,
                    "required": Boolean,
                    "common": Boolean,
                    "showField": Boolean
                },
                {
                    "_id": String,
                    "name": String,
                    "type": String,
                    "placeholder": String,
                    "order": String,
                    "validation": Boolean,
                    "required": Boolean,
                    "common": Boolean,
                    "showField": Boolean
                },
                {
                    "_id": String,
                    "name": String,
                    "type": String,
                    "placeholder": String,
                    "order": String,
                    "validation": Boolean,
                    "required": Boolean,
                    "common": Boolean,
                    "showField": Boolean
                }
            ],
            "fields": [
                {
                    "_id": String,
                    "name": String,
                    "type": String,
                    "order": String,
                    "validation": Boolean,
                    "required": Boolean,
                    "common": Boolean,
                    "showField": Boolean,
                    "options": [
                        {
                            "_id": String,
                            "order": String,
                            "name": String,
                            "value": String
                        }
                    ]
                }
            ]
        }
    ],
    "organizer": {
        "reviewers": [
            {
                "email":String,
                "name": String,
                "notes": String
            }
        ],
        "organizers": []
    },
    "category": String,
    "timeZone": Number,
    "actualExpense": Number,
    "estimatedExpense": Number,
    "targetIncome": Number,
    "secureCode": String,
    "location": {
        "type": String,
        "city": String,
        "country": String,
        "coordinates": [
            Number,
            Number
        ],
        "placeId": String
    },
    "eventLogo": String,
    "allowEventComments": Boolean,
    "isPaidEvent": Boolean,
    "lastTouchedTime": Date,
    "eventCategory": [
        String,
    ],
    "listedEvent": Boolean,
    "timeZoneName": String,
    "featureVisibility": {
        "eventSchedule": Boolean,
        "tasks": Boolean,
        "resources": Boolean,
        "attachments": Boolean,
        "budget": Boolean,
        "comments": Boolean,
        "sponsorship": Boolean,
        "invitations": Boolean,
        "attendeeEngagement": Boolean,
        "announcements": Boolean,
        "agenda": Boolean,
        "speakers": Boolean,
        "exhibitors": Boolean,
        "sponsors": Boolean
    },
    "contactDetails": [
        {
            "_id": String,
            "name": String,
            "email": String
        },
        {
            "_id": String,
            "name": Date,
            "email": String
        }
    ],
    "hidePeople": Boolean,
    "hideAgenda": Boolean,
    "hideSpeakers": Boolean,
    "hideExhibitors": Boolean,
    "hideSponsorListing": Boolean,
    "firstTimeVisited": Boolean,
    "screened": Boolean,
    "ticketCategories": [
        {
            "_id": String,
            "name": String,
            "description": String,
            "tickets": [
               String
            ],
            "privateCategory": Boolean
        }
    ],
    "soldOutStatus": Boolean,
    "platform": String,
    "reportedEvent": Boolean,
    "orgApproved": Boolean,
    "claimed": Boolean,
    "earnedScore": Number,
    "yepdeskScore": Number,
    "eventScore": Number,
    "minPrice": Number,
    "maxPrice": Number,
    "recurringEvent": Boolean,
    "parent": Boolean,
    "coverImageId": String,
    "termsOfService": String,
    "description": String,
    "author": String,
    "createdOn":Date,
    "startTime":Date,
    "endTime": Date,
    "locationAddress": String,
    "instructions": String,
    "creationDate": String,
    "name": String,
    "dateOfCreation": Date,
    "createdBy":String,

    "isArchived": Boolean
       
            

}, { collection: 'testingEvents' }
)


module.exports = eventScheema;
