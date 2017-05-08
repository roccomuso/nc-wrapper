'use strict'
const path = require('path')
const execa = require('execa')
const OS = process.platform

const handler = err => {
  if (err.code === 'ENOENT') {
    throw new Error('Couldn\'t find the required nc binary.')
  }

  throw err
}

const fallbacks = {
  win32: path.join(__dirname, '../fallbacks/nc.exe'),
  linux: path.join(__dirname, '../fallbacks/nc.openbsd')
  // no fallback for Mac OS
}

const nc = OS === 'linux' ? fallbacks.linux : OS === 'win32' ? fallbacks.win32 : false

const funcs = {
  linux: (arrArgs, opts) => {
    return execa(nc, arrArgs, opts)
      .catch(() => execa('nc', arrArgs, opts))
      .catch(handler)
  },
  win32: (arrArgs, opts) => {
    return execa(nc, arrArgs, opts)
      .catch(() => execa('nc', arrArgs, opts))
      .catch(handler)
  },
  darwin: (arrArgs, opts) => {
    return execa('nc', arrArgs, opts)
      .catch(handler)
  }
}

module.exports = funcs[OS]
