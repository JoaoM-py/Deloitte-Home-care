import express from 'express'
import device from './device';

const router = express.Router();

export default (): express.Router => {
    device(router)
    return router;
} 