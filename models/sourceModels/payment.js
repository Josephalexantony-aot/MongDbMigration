const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const  {sourceConnection} = require('../../dbConnection');

const paymentSchema = Schema({
           
        "gatewayCharges": Number,
        "paymentFor": String,
        "yepdeskCharges": Number,
        "purchaseDate": String,
        "eventId": String,
        "eventName": String,
        "status": String,
        "bookingId": String,
        "totalPaymentAmountInPaise": Number,
        "dueAmount": Number,
        "currency": String,
        "customerDetails": {
            "firstName": String,
            "lastName": String,
            "email": String,
            "phoneNumber": String,
            "displayName": String
        },
        "paymentPackageId": String,
        "actualAmountExcludingGatewayFees": Number,
        "txRefNo":String,
        "_class": String,
        "purchasedTickets": [
            {
                "price": Number,
                "promoApplied": Boolean,
                "ticketIds": [
                    String
                ],
                "ticketId": String,
                "ticketName": String,
                "numberOfTickets": Number
            }
        ],
        "paymentMethod": String,
        "paymentTransactions": [
            {
                "date": Date,
                "paymentGatewayFees": [
                    {
                        "name": String,
                        "fixedCharge": Number,
                        "variableCharge": Number,
                        "chargeType": String
                    },
                    {
                        "name": String,
                        "variableCharge": Number,
                        "chargeType": String
                    },
                    {
                        "variableCharge": Number,
                        "chargeType": String,
                        "name": String,
                        "fixedCharge": Number
                    }
                ],
                "transactionFee": Number,
                "paymentMethod": String,
                "paymentStatus": String,
                "totalPaymentAmount": Number,
                "gatewayCharges": Number,
                "yepDeskCharges": Number,
                "_id": String,
                "txRefNo": String,
                "taxToGov": Number
            }
        ],
        "orderId": String,
        "totalPaymentAmount": Number,
        "transactionFee": Number,
        "totalUndeductedPrice": Number,
        "eventTaxes": Number,
        "payoutStatus": String,
        "govtTax": Number
    
},{collection : 'payment'})
 

// const Payment = sourceConnection.model('Payment', paymentSchema);
// module.exports = Payment;
//module.exports = mongoose.model('Payment', paymentSchema)
module.exports = paymentSchema