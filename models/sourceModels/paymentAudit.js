const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const  {sourceConnection} = require('../../dbConnection');

const paymentAuditSchema = Schema({
               
                "customer": {
                "firstName": String,
                "lastName": String,
                "email": String,
                "phoneNumber": String,
                "displayName": String
            },
         //   "_id": "5cd510987de0a23a6554750c",
            "requestInitiatedTimeStamp": Date,
            "currency": String,
            "eventId": String,
            "paymentId": String,
            "_class": String,
            "pgResponse": {
                "currency": String,
                "method": String,
                "amount_refunded": Number,
                "description":String,
                "email": String,
                "amount": Number,
                "status": String,
                "contact":String,
                "created_at": Date,
                "_id": String,
                "captured": Boolean,
                "fee": Number,
                "entity": String,
                "tax": Number
            },
            "tickets": [],
            "paymentGateway": String,
            "manuallyUpdated": Boolean,
            "rechecked": Boolean,
            "transactionCompleteTimeStamp": Date,
            "paymentTransactionStatus": String,
            "auditMailSent": Boolean
    

},{collection : 'testPaymentAudit'})
  
// const paymentAudit = sourceConnection.model('paymentAudit', paymentAuditSchema);
// module.exports = paymentAudit;
//module.exports = mongoose.model(' paymentAudit', paymentAuditSchema)
module.exports = paymentAuditSchema;