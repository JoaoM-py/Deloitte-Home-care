import express from 'express'

import { create, getAllDevices, getDevicesBylastReport, getDevicesNotReporting, getDevicesOff, getDevicesOn } from '../controllers/device'

export default (router: express.Router) => {
    router.get('/devices', getAllDevices)
    router.get('/devices/off', getDevicesOff)
    router.get('/devices/on', getDevicesOn)
    router.get('/devices/last_report', getDevicesBylastReport)
    router.get('/devices/not_reporting', getDevicesNotReporting) 


    router.post('/deviceData', create)
}