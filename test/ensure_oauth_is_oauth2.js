// oauth
//   https://github.com/ciaranj/node-oauth
// https://api.thenounproject.com/examples/nodejs_example.html

// require('dotenv').config();
import "dotenv/config";

/*
const inspect = require('util').inspect;  // static
// import { inspect } from "node:util";  // module
// const { inspect } = await import("util");  // dynamic
 */


const NOUN_KEY = process.env.NOUN_KEY;
const NOUN_SECRET = process.env.NOUN_SECRET;
const iconApiAuth = "https://api.thenounproject.com"
const iconApiBase = "https://api.thenounproject.com/v2"

function iconApiCallback(e, data, res) {
    if (e) console.error(e)
    // console.log(require('util').inspect(data))
    // console.debug(inspect(data))
    console.log(data)
}

const iconApiEndpoints = {
    collection: {
        method: "GET",
        path: "/collection",
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
        path: (icon_id) => { return `/icon/${icon_id}` },  // "/icon/:icon_id"
        parameters: {
            icon_id: "int",
            thumbnail_size: "int: 42|84|200",
            blacklist: "int: boolean",
        },
    },
    download: {
        method: "GET",
        path: "/icon/:icon_id/download",
        parameters: {
            icon_id: "int",
            color: "string: hexadecimal color",
            filetype: "string: 'svg'|'png'",
            size: "int: 20-1200",
        },
    },
}


// ==================================== //
// WIP: Confirn this is using OAuth2.0

// const OAuth = require('oauth');
import { OAuth } from 'oauth';
// import { OAuth2 } from 'oauth';

debugger


// This presents the credentials and receives a bearer token.

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


// ---
/*
// Okay, this works...
oauth.get(
    'https://api.thenounproject.com/v2/icon/6324',
    null,
    null,
    function (e, data, res){
        if (e) console.error(e)
        console.log(data)
    }
)
 */
let icon_id_sample = "6324"
let iconMetaUrl = iconApiBase + iconApiEndpoints.icon.path(icon_id_sample);
console.log(iconMetaUrl)

oauth.get(
    iconMetaUrl,  // url
    null,  // oauth_token
    null,  // oauth_token_secret
    iconApiCallback,  // callback: ClientRequest
)
