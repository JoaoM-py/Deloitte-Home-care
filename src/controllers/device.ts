import express from 'express'

import { createDevice, getBylastReport, getDeviceByImei, getDevices, getFirstLastReport, getNotReporting, getOffDevices, getOnDevices } from '../services/device'
import { LastThirtyMinutesInMinutes } from '../utils/timeFilters';

export const create = async (req: express.Request, res:express.Response) => {
    try {
        const {tag, imei, value, timestamp, errorCode} = req.body;

        if (!imei){
            return res.sendStatus(400);
        }

        if(errorCode === null || errorCode === '' || errorCode === undefined){
            const device = await createDevice({
                tag,
                imei,
                value,  
                timestamp,
            })
            return res.status(200).json(device).end();

        } else {
            const LastReportTime = await getFirstLastReport(imei)

            if (!LastReportTime) {
                const NewDeviceError = await createDevice({
                    tag: 'timebased',
                    imei,
                    value: `errorCode=${errorCode}, timeSinceLastPowerOnMinutes=${LastThirtyMinutesInMinutes(new Date)}`,
                    timestamp,
                })
                return res.status(200).json(NewDeviceError).end();
            }

            const LastReportTimeInMinutes = await LastThirtyMinutesInMinutes(LastReportTime.timestamp)
            const deviceError = await createDevice({
                tag: 'timebased',
                imei,
                value: `errorCode=${errorCode}, timeSinceLastPowerOnMinutes=${LastReportTimeInMinutes}`,
                timestamp,
            })
            return res.status(200).json(deviceError).end();
        }
    } catch (error) {
        console.error(error);
        return res.sendStatus(400);
        
    }
}

export const getAllDevices = async (req: express.Request, res:express.Response) => {
    try {
        const devices = await getDevices();

        return res.status(200).json(devices)
    } catch (error) {
        console.error(error);
        return res.sendStatus(400);
    }
}

export const getDevicesOff= async (req: express.Request, res:express.Response) => {
    try {
        const devices = await getOffDevices();

        return res.status(200).json(devices)
    } catch (error) {
        console.error(error);
        return res.sendStatus(400);
    }
}

export const getDevicesOn = async (req: express.Request, res:express.Response) => {
    try {
        const devices = await getOnDevices();

        return res.status(200).json(devices)
    } catch (error) {
        console.error(error);
        return res.sendStatus(400);
    }
}

export const getDevicesBylastReport = async (req: express.Request, res:express.Response) => {
    try {
        const devices = await getBylastReport();

        return res.status(200).json(devices)
    } catch (error) {
        console.error(error);
        return res.sendStatus(400);
    }
}

export const getDevicesNotReporting = async (req: express.Request, res:express.Response) => {
    try {
        const devices = await getNotReporting();

        return res.status(200).json(devices)
    } catch (error) {
        console.error(error);
        return res.sendStatus(400);
    }
}