// https://api.thenounproject.com/examples/nodejs_example.html

import "dotenv/config";
import { inspect } from "node:util";
import { OAuth } from 'oauth';  // https://github.com/ciaranj/node-oauth

const NOUN_KEY = process.env.NOUN_KEY;
const NOUN_SECRET = process.env.NOUN_SECRET;
const iconApiAuth = "https://api.thenounproject.com"
const iconApiBase = "https://api.thenounproject.com/v2"

const oauth = await new OAuth(
    iconApiAuth,    // requestUrl
    iconApiAuth,    // accessUrl
    NOUN_KEY,       // consumerKey
    NOUN_SECRET,    // consumerSecret
    "1.0",          // version
    null,           // authorize_callback  ...WAIT, WHAT? the callback can be null??
    "HMAC-SHA1",    // signatureMethod
    /*  also available:
    undefined,      // nonceSize?: number | undefined
    undefined,      // customHeaders?: OutgoingHttpHeaders | undefined
    */
)




// ------------
// Making the requests

// 1. do I need a callback function for the calls?
// 2. once auth'd, can I
function iconApiCallback(e, body, res) {
    if (e) console.error(e)
    // console.log(require('util').inspect(data))
    // console.log(Object.keys(args))
    let data = JSON.parse(body)
    if (data) console.debug("data parsed")
    return data
}

let assetRequest = await oauth.get(
    'https://api.thenounproject.com/v2/icon/6324',
    null,
    null,
    iconApiCallback,
)
console.log("assetRequest")
console.log(assetRequest)


const iconApiEndpoints = {
    collection: {
        method: "GET",
        path: "/v2/collection",
        parameters: {
            query: "string",
            blacklist: "int: boolean",
            limit: "int",
            prev_page: "string",
            next_page: "string",
        },
    },
    icon: {
        method: "GET",
        path: "/v2/icon/:icon_id",
        parameters: {
            icon_id: "int",
            thumbnail_size: "int: 42|84|200",
            blacklist: "int: boolean",
        },
    },
    download: {
        method: "GET",
        path: "/v2/icon/:icon_id/download",
        parameters: {
            icon_id: "int",
            color: "string: hexadecimal color",
            filetype: "string: 'svg'|'png'",
            size: "int: 20-1200",
        },
    },
}
