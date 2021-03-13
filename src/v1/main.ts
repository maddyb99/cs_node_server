import express from 'express'
import { userModule } from './user'
import { notificationModule } from './notification'
import * as utils from './utils'



const apiInternal = express.Router()
const version = '/api/v1'

const userApi = utils.registerModule('/user', userModule)
const notificationApi = utils.registerModule('/notification', notificationModule)

const apiKey = process.env.apiKey as string;
const authMiddleware = function (req: any, res: any, next: any) {
  if (req.headers.authorization !== apiKey) {
    return res.status(403).json({ error: 'Unauthorized request!$' });
  }
  next();
  return null;
}

apiInternal.use(authMiddleware)
apiInternal.use(version, userApi)
apiInternal.use(version, notificationApi)

export { apiInternal,apiKey }