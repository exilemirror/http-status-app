// http check module
const isOk = require('status-is-ok')
const checkLinks = require('check-links')
const linkCheck = require('link-check')

const httpstatus = async (jsonArray, callback) => {
    console.log('Starting httpstatus check!')
    let arr = []
    for (let index = 0; index < jsonArray.length; ++index) {
        
        const siteUrl = jsonArray[index].url;
        // const status = await isOk(siteUrl)
        const status = await checkLinks([siteUrl])
        arr.push(status)
    }
    console.log('httpstatus check completed!')
    callback(arr)
}

module.exports = httpstatus