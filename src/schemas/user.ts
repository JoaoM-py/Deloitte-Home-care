import mongoose from "mongoose";

const userDatSchema = new mongoose.Schema({
    user : {
        name: {type: String },
        email:{type: String, require: true},
        password:{type: String, require: true},
    },
});

const UserData = mongoose.model('DeviceData', userDatSchema);

export default UserData;