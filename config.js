'use strict'

const version = require('./package.json').version
const axios = require('axios')

exports.Connection = class Connection {
  constructor (opt = {}) {
    this.baseURL = opt.url || 'http://localhost:3000/'
    this.token = opt.token || '2d268e626a31419849343d68138d403720'
    this.timeout = 1500
    this.headers = {
      Accept: 'application/json',
      Authorization: `Bearer ${this.token}`,
      'User-Agent': `Node.js/${process.versions.node} moltencraft/${version}`
    }

    return axios.create(this)
  }
}
