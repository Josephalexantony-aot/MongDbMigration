
const  {clientConnection,sourceConnection} = require('../dbConnection');
const AttendeeScheema = require('./sourceModels/attendee')
const emailScheema = require('./sourceModels/emails')
const invitationScheema = require('./sourceModels/invitation')
const paymentScheema = require('./sourceModels/payment')
const paymentAuditScheema = require('./sourceModels/paymentAudit')
const eventScheema = require('./sourceModels/event')
const eventActivityScheema = require('./sourceModels/eventActivities')
const eventMigrationScheema = require('./sourceModels/migrationMetaData')
const clientEventActivityScheema = require('./sourceModels/eventActivities')


const clientEventActivity = clientConnection.model('eventActivity', clientEventActivityScheema);
const sourceEvent = sourceConnection.model('event', eventScheema);
const clientAttendee = clientConnection.model('Attendee', AttendeeScheema);
const sourceAttendee = sourceConnection.model('Attendee', AttendeeScheema);
const clientEmail = clientConnection.model('Email', emailScheema);
const sourceEmail = sourceConnection.model('Email', emailScheema);
const clientInvitation = clientConnection.model('Invitation', invitationScheema);
const sourceInvitation = sourceConnection.model('Invitation', invitationScheema);
const clientPayment = clientConnection.model('Payment', paymentScheema);
const sourcePayment = sourceConnection.model('Payment', paymentScheema);
const clientPaymentAudit = clientConnection.model('PaymentAudit', paymentAuditScheema);
const sourcePaymentAudit = sourceConnection.model('PaymentAudit', paymentAuditScheema);
const sourceEventActivity = sourceConnection.model('eventActivity', eventActivityScheema);
const eventMigraion = clientConnection.model('eventMigration', eventMigrationScheema);


module.exports = {
        sourceEvent, eventMigraion,
        clientAttendee, clientEmail, clientInvitation,
        clientPayment, clientPaymentAudit, clientEventActivity,
        sourcePaymentAudit, sourceAttendee, sourceEventActivity,
        sourceEmail,sourcePayment,sourceEvent
};   