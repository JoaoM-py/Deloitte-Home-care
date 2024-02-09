import express from "express";

import {
  create,
  getAllDevices,
  getDevicesBylastReport,
  getWarningDevice,
  getCriticalDevice,
  getDevicesOff,
  getDevicesOn,
  getBadConfigDevice,
} from "../controllers/device";

export default (router: express.Router) => {
  router.get("/devices", getAllDevices);
  router.get("/devices/off", getDevicesOff);
  router.get("/devices/on", getDevicesOn);
  router.get("/devices/last_report", getDevicesBylastReport);
  router.get("/devices/warning", getWarningDevice);
  router.get("/devices/critical", getCriticalDevice);
  router.get("/devices/bad_config", getBadConfigDevice);

  router.post("/deviceData", create);
};
