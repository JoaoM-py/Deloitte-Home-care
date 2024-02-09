import mongoose from "mongoose";

const deviceDataSchema = new mongoose.Schema({
    tag: { type: String, required: true },
    imei: { type: String, required: true },
    value: { type: String },
    timestamp:{ type: Date, default: () => new Date(new Date().getTime() - new Date().getTimezoneOffset() * 60000).toISOString() },
    errorCode: { type: String },
});

const DeviceData = mongoose.model('DeviceData', deviceDataSchema);

export default DeviceData;