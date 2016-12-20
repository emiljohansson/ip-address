#! /usr/bin/env node

const ifaces = require('os').networkInterfaces()
const copyToClipboard = require('../copy-to-clipboard')

Object.keys(ifaces).forEach(iterateIfName)

function iterateIfName (ifname) {
  ifaces[ifname].forEach(iterateIFace)
}

function iterateIFace (iface) {
  if (iface.family !== 'IPv4' || iface.internal !== false) {
    return
  }
  console.log(iface.address)
  copyToClipboard(iface.address)
}
