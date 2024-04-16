// oauth
//   https://github.com/ciaranj/node-oauth
// https://api.thenounproject.com/examples/nodejs_example.html

import "dotenv/config";
import { inspect } from "util";
import { OAuth, OAuth2 } from 'oauth';

const NOUN_KEY = process.env.NOUN_KEY;
const NOUN_SECRET = process.env.NOUN_SECRET;
// these aren't usually the same site.
const iconApiAuth = "https://api.thenounproject.com"
const iconApiBase = "https://api.thenounproject.com/v2"

// TODO: make these more useful.
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

var responses = []

// let icon_id_sample = "6324"
// let iconMetaUrl= iconApiBase + iconApiEndpoints.icon.path(1);
// console.log(iconMetaUrl)

console.log("---OAUTH 1---")
console.log("1: Get credentialed")

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

console.log("1: Get icon 1")

function iconApiCallback(e, ...args) {
    if (e) console.error(e)
    console.debug(inspect(args))
}

let response1 = await oauth.get(
    iconApiBase + iconApiEndpoints.icon.path(1),  // url
    null,  // oauth_token
    null,  // oauth_token_secret
    iconApiCallback,  // callback
)
console.log(`\n(outside) response1: ${response1}`)
console.log(inspect(response1))

console.log("---OAuth 1 is done.")


// ==================================== //
// TODO: WIP: But it _should_ be using OAuth2
console.log("---OAUTH 2---")

console.log("2: Get credentialed")
const oauth2 = new OAuth2(
    NOUN_KEY,           // clientId: string,
    NOUN_SECRET,        // clientSecret: string,
    iconApiAuth,        // baseSite: string,
                        // authorizePath ?: string | undefined,
    'oauth2/token',     // accessTokenPath ?: string | undefined,
                        // customHeaders ?: OutgoingHttpHeaders | undefined
)

console.log("2: Get MORE credentialed")
let response2 = await oauth2.getOAuthAccessToken(
    '',
    {'grant_type':'client_credentials'},
    iconApiCallback,
)
console.log(`response2: ${response2}`)
console.log(inspect(response2))

console.log("\n\nInspect the response array:")
console.log(inspect(responses, { showHidden: false }))
console.log(inspect(responses, { showHidden: true }))


console.log("  Get icon 2")

// iconMetaUrl = iconApiBase + iconApiEndpoints.icon.path(2);
