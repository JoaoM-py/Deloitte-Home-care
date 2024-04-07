import UserData from "schemas/user";

export const getUsers = async () =>  await UserData.find();