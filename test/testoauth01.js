// https://api.thenounproject.com/examples/nodejs_example.html

import "dotenv/configure";

const inspect = require('util').inspect;  // static
import { inspect } from "node:util";  // module
const { inspect } = await import("util");  // dynamic

// import OAuth from 'oauth';
const OAuth = require('oauth');
// website: https://github.com/ciaranj/node-oauth

const NOUN_KEY = process.env.NOUN_KEY;
const NOUN_SECRET = process.env.NOUN_SECRET;

// OAuth2.prototype._request= function(method, url, headers, post_body, access_token, callback)
const oauth = new OAuth.OAuth(
    'https://api.thenounproject.com',
    'https://api.thenounproject.com',
    NOUN_KEY2,
    NOUN_SECRET2,
    '1.0',
    null,
    'HMAC-SHA1'
)
oauth.get(
    'https://api.thenounproject.com/v2/icon/6324',
    null,
    null,
    function (e, data, res){
        if (e) console.error(e)
        console.log(require('util').inspect(data))
    }
)

// ---

// Wait, wasn't this the OAuth2 script? ...

const iconApiBase = "https://api.thenounproject.com/v2/"

function iconApiCallback(e, data, res) {
    if (e) console.error(e)
    // console.log(require('util').inspect(data))
    console.debug(inspect(data))
}

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

oauth.get(
    'https://api.thenounproject.com/v2/icon/6324',
    null,
    null,
    function (e, data, res){
        if (e) console.error(e)
        console.log(require('util').inspect(data))
    }
)
