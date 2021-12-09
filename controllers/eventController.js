const {eventMigraion, sourceEvent, sourceAttendee,testEventId,sourceEmail } = require('../models/modelDbConnection')
const express = require('express')
const router = express.Router()
const initMigrationDetails = require("../services/migrationServices")



exports.init = async (req, res) => {

    try {
        var date = "2019-07-01T05:48:32.522Z"
        var eventIds = []
        const eventCount = await sourceEvent.count({ dateOfCreation: { $lte: date }})
        console.log(eventCount)
        data = await sourceEvent.find({ dateOfCreation: { $lte: date }, isArchived:{$ne: true}   }).limit(1)
        data.forEach(element => {
            eventIds.push(element._id)
               
        });
        eventIds.forEach(eventId =>{        
           console.log(eventId)
           initMigrationDetails(eventId)

        })
        res.json(data)
    } catch (error) {
        res.send('errorrr' + error)
    }
  

}





