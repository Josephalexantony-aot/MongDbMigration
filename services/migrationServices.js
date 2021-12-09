const { 
    
    eventMigraion, sourceEvent, sourcePaymentAudit,
    sourceAttendee, sourceEventActivity, sourceEmail, sourcePayment,
    clientAttendee, clientEmail, clientInvitation,
    clientPayment, clientPaymentAudit, clientEventActivity,
      
       } = require('../models/modelDbConnection')
/////////////////////////////////FETCH DETAILS USING EVENT ID/////////////////////////////////////
eventCount = 0;
initMigrationDetails = async (id) => {
    const eventId = id;
    starTime = new Date();
    try {
        const sourceAttendeeCount = await sourceAttendee.count({ eventId: { $eq: eventId } })
        const sourceEmailCount = await sourceEmail.count({ eventid: { $eq: eventId } })
        const sourcePaymentCount = await sourcePayment.count({ eventId: { $eq: eventId } })
        const sourcePaymentAuditCount = await sourcePaymentAudit.count({ eventId: { $eq: eventId } })
        const sourceEventActivityCount = await sourceEventActivity.count({ eventId: { $eq: eventId } })
        items = {
            eventId: eventId,
            startTime: starTime,
            endTime: null,
            isCompleted: false,
            attendee: {
                count: sourceAttendeeCount,
                isCompleted: false
            },
            emails: {
                count: sourceEmailCount,
                isCompleted: false
            },
            payment: {
                count: sourcePaymentCount,
                isCompleted: false
            },
            paymentAudit: {
                count: sourcePaymentAuditCount,
                isCompleted: false
            },
            eventActivity: {
                count: sourceEventActivityCount,
                isCompleted: false
            }
        }

        pushMigrationDetails(items);
        fetchAndPushAttendee(eventId);
      
    } catch (error) {
        console.log("error" + error)
    }
}
///////////////////////ATTENDEE////////////////////////////
fetchAndPushAttendee = async (eventId) => {
    do {

        data = await sourceAttendee.find({ eventId: { $eq: eventId } }).limit(100)
        insert = await pushArrayOfDataToDb(data, "ATTENDEE")
        attendeeIds = []
        data.forEach(attendee => {
            attendeeIds.push(attendee._id)
        })

        var deleted = await sourceAttendee.deleteMany({ _id: { $in: attendeeIds } })
        console.log(deleted)
        dCount = deleted.deletedCount;
        console.log(dCount)

    } while (dCount != 0)

        var updateIscompleatd = await eventMigraion.updateOne({
            eventId: eventId
        }, {
            $set: { "attendee.isCompleted": "true" }
        })

    if (updateIscompleatd.acknowledged == true) {
         fetchAndPushEmails(eventId)
    } else
        console.log("????????????FAILD ATTENDEE?????????????")
}
////////////////////////////////EMAILS///////////////////////////////////
fetchAndPushEmails = async (eventId) => {
    do {
        data = await sourceEmail.find({ eventid: { $eq: eventId } }).limit(1000)
        insert = await pushArrayOfDataToDb(data, "EMAIL")
        emailsIds = []
        data.forEach(email => {
            emailsIds.push(email._id)
        })
        var deleted = await sourceEmail.deleteMany({ _id: { $in: emailsIds } })
        if(deleted){
            dCount = deleted.deletedCount;
            console.log("DELETED")
            console.log(dCount)
        }
     
    } while (dCount != 0)
    var updateIscompleatd = await eventMigraion.updateOne({
        eventId: eventId
    }, {
        $set: { "emails.isCompleted": "true" }
    })
    if (updateIscompleatd.acknowledged == true) {
         fetchAndPushPayment(eventId)
    }
    else
         console.log("????????????FAILD EMAILS?????????????")
}
////////////////////////////////PAYMENTS///////////////////////////////////

fetchAndPushPayment = async (eventId) => {
    do {
        data = await sourcePayment.find({ eventId: { $eq: eventId } }).limit(100)
        insert = await pushArrayOfDataToDb(data, "PAYMENT")
        paymentIds = []
        data.forEach(payment => {
            paymentIds.push(payment._id)
        })
        var deleted = await sourcePayment.deleteMany({ _id: { $in: paymentIds } })
        dCount = deleted.deletedCount;
        console.log(dCount)
    } while (dCount != 0)
    var updateIscompleatd = await eventMigraion.updateOne({
        eventId: eventId
    }, {
        $set: { "payment.isCompleted": "true" }
    })
    console.log(updateIscompleatd)
    if (updateIscompleatd.acknowledged == true) {
        fetchAndPushPaymentAudit(eventId)
    }
    else
        console.log("????????????FAILD PAYMENT?????????????")
}
////////////////////////////////PAYMENT AUDIT///////////////////////////////////

fetchAndPushPaymentAudit = async (eventId) => {
    do {
        data = await sourcePaymentAudit.find({ eventId: { $eq: eventId } }).limit(100)
        insert = await pushArrayOfDataToDb(data, "PAYMENT_AUDIT")
        paymentIds = []
        paymentAuditIds = []
        data.forEach(paymentAudit => {
            paymentAuditIds.push(paymentAudit._id)
        })
        var deleted = await sourcePaymentAudit.deleteMany({ _id: { $in: paymentAuditIds } })
        dCount = deleted.deletedCount;
        console.log(dCount)
    } while (dCount != 0)
    var updateIscompleatd = await eventMigraion.updateOne({
        eventId: eventId
    }, {
        $set: { "paymentAudit.isCompleted": "true" }
    })
    if (updateIscompleatd.acknowledged == true) {
        fetchAndPushEventActivity(eventId)
    }
    else
        console.log("????????????FAILD PAYMENT AUDIT?????????????")
}

////////////////////////////////EventActivity///////////////////////////////////

fetchAndPushEventActivity = async (eventId) => {
    do {
        data = await sourceEventActivity.find({ eventId: { $eq: eventId } }).limit(100)
        insert = await pushArrayOfDataToDb(data, "EVENT_ACTIVITY")
        eventActivityIds = []
        data.forEach(eventActivity => {
            eventActivityIds.push(eventActivity._id)
        })
        var deleted = await sourceEventActivity.deleteMany({ _id: { $in: eventActivityIds } })
        dCount = deleted.deletedCount;
        console.log(dCount)
    } while (dCount != 0)
    if(dCount == 0){
        var updateIscompleatd = await eventMigraion.updateOne({
            eventId: eventId
        }, {
            $set: { "eventActivity.isCompleted": "true" }
        })
    }
    console.log(updateIscompleatd)
    if (updateIscompleatd.acknowledged == true) {
          endTime = new Date();
          var updateCommonIscompleatd = await eventMigraion.updateOne({
            eventId: eventId
        }, {
            $set: { "isCompleted": "true", "endTime" : endTime, "isArchived": "true"  }
        })
    }
    else
        console.log("???????????? FAILD PAYMENT AUDIT ?????????????")

    var updateIsArchived = await sourceEvent.updateOne({_id: eventId}, {$set: {"isArchived": "true"}})
         console.log("MIGRATION COMPLETED FOR EVENT ID =-----------> : " + eventId)
        eventCount += 1;
        console.log("========================== Events Completed: "+ eventCount+" ================================")
    if (updateIsArchived.acknowledged == true) {
            console.log("updateCommonIscompleatd.acknowledged == true; MOVING TO NEXT")
            fetchEventData();
    }
}

////////////////////////////MIGRATION DETAILS/////////////////////////////

pushMigrationDetails = async (items) => {
    var details = new eventMigraion(items)
    console.log(details)
    const a1 = await details.save()
    console.log("migration details saved (-_-)")
}

//////////////////////PUSH DATA TO DESTINATION DB//////////////////////////

pushArrayOfDataToDb = async (Datas, modelName) => {

    if (modelName == 'PAYMENTAUDIT') {
        Datas.forEach(Data => {
            let item = Data.toJSON();
            
            let details = new clientPaymentAudit(item)
            const a1 = details.save()
            console.log("details saved:" + a1)
        })
    } else if (modelName == 'PAYMENT') {
        Datas.forEach(Data => {
            let item = Data.toJSON();
            
            let details = new clientPayment(item)
            const a1 = details.save()
            console.log("details saved:" + a1)
        })
    } else if (modelName == 'INVITATION') {
        Datas.forEach(Data => {
            let item = Data.toJSON();
            
            let details = new clientInvitation(item)
            const a1 = details.save()
            console.log("details saved:" + a1)
        })
    } else if (modelName == 'ATTENDEE') {
        Datas.forEach(attendeeData => {
            let item = attendeeData.toJSON();
            
            let details = new clientAttendee(item)
            const a1 = details.save()
            console.log("attendee details saved:" + a1)
        })
    } else if (modelName == 'EMAIL') {
        Datas.forEach(emailData => {
            let item = emailData.toJSON();
            let details = new clientEmail(item)
            const a1 = details.save()
            console.log("Email details saved::::" + a1)
        })
    } else if (modelName == 'EVENT_ACTIVITY') {

        Datas.forEach(eventData => {
            let item = eventData.toJSON();
            let details = new clientEventActivity(item)
            const a1 = details.save()
            console.log("Event details saved::::" + a1)
        })
    }
}

fetchEventData = async () => {
    try {
        var date = "2019-07-01T05:48:32.522Z"
        data = await sourceEvent.find({ dateOfCreation: { $lte: date }, isArchived:{$ne: true}}).limit(1)
        var eventIds = []
        if(data){
            data.forEach(id =>{
                eventIds.push(id._id)
            })
            eventIds.forEach(eventId =>{            
                console.log(eventId)
                let id = eventId
                console.log(id)
            initMigrationDetails(id)
                })
        }else{
            const eventCount = await sourceEvent.count({ dateOfCreation: { $lte: date }})
            console.log("Total Number of Events: "+eventCount)
            console.log("..MIGRATION COMPLETED..")
        }
    } catch (error) {
       console.log('errorrr' + error)
    }
}

module.exports = initMigrationDetails