import express from 'express'

const bodyParser = require('body-parser')

export function registerModule(route: string, apiModule: any) {
    const retApi = express.Router()
    retApi.use(route, apiModule)
    retApi.use(bodyParser.json())
    retApi.use(bodyParser.urlencoded({ extended: false }))
    return retApi
}