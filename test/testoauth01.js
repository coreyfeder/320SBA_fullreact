// https://api.thenounproject.com/examples/nodejs_example.html

import "dotenv/config";

// const inspect = require('util').inspect;  // static
import { inspect } from "node:util";  // module
// const { inspect } = await import("util");  // dynamic

import { OAuth } from 'oauth';
// const OAuth = require('oauth');
// website: https://github.com/ciaranj/node-oauth

const NOUN_KEY = process.env.NOUN_KEY;
const NOUN_SECRET = process.env.NOUN_SECRET;

function iconApiCallback(e, ...args) {
    if (e) console.error(e)
    // console.log(require('util').inspect(data))
    console.log(Object.keys(args))
    console.debug(inspect(args))
}


const oauth = new OAuth(
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
oauth.get(
    'https://api.thenounproject.com/v2/icon/6324',
    null,
    null,
    iconApiCallback,
)

// ---

// Wait, wasn't this the OAuth2 script? ...

const iconApiBase = "https://api.thenounproject.com/v2/"

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
