'use strict'

const version = require('./package.json').version
const axios = require('axios')

exports.Connection = class Connection {
  constructor (opt = {}) {
    this.baseURL = opt.url || 'http://localhost:3001/api/'
    this.token = opt.token || '2f3f1316802e172c4546672f56065d9584'
    this.timeout = opt.timeout || 1500
    this.headers = {
      Accept: 'application/json',
      Authorization: `Bearer ${this.token}`,
      'User-Agent': `Node.js/${process.versions.node} moltencraft/${version}`
    }

    return axios.create(this)
  }
}
