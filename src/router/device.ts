import express from 'express'

import { create, getAllDevices, getDevicesBylastReport, getDevicesOff, getDevicesOn } from '../controllers/device'

export default (router: express.Router) => {
    router.get('/devices', getAllDevices)
    router.get('/devices/off', getDevicesOff)
    router.get('/devices/on', getDevicesOn)
    router.get('/devices/30m', getDevicesBylastReport) 

    router.post('/deviceData', create)
}