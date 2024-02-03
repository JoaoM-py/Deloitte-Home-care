import {getLastThirtyMinutes} from "../utils/thirtyMinutesAgo";
import DeviceData from "../utils/schemas"

export const getDevices = async () =>  await DeviceData.find();
export const getDeviceByImei = (async (imei:string)=> await DeviceData.findOne({imei}))
export const getByError = (async (errorCode:string)=> await DeviceData.findOne({errorCode})) 
export const createDevice = async (values: Record<string, any>) =>  await new DeviceData(values)
    .save().then((device) => device.toObject());
export const getBylastReport = async () => await DeviceData.find({timestamp:{$gte:getLastThirtyMinutes()}});
export const getFirstLastReport = async (imei:string) => await DeviceData
        .findOne({tag: 'poweron', imei: imei, timestamp:{$gte:getLastThirtyMinutes()}}).sort({ timestamp: -1 }).limit(1)
//export const getNotReporting = () =>  DeviceData.find();
export const getOffDevices = async () =>  await DeviceData.find({tag: "poweroff"})
export const getOnDevices = async () =>  await DeviceData.find({tag: "poweron"})

 