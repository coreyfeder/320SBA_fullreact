// https://api.thenounproject.com/examples/nodejs_example.html

// require('dotenv').config();
import "dotenv/config";


// const inspect = require('util').inspect;  // static
import { inspect } from "node:util";  // module
// const { inspect } = await import("util");  // dynamic

import { OAuth } from 'oauth';
// const OAuth = require('oauth');
// website: https://github.com/ciaranj/node-oauth




// const inspect = require('util').inspect;  // static
import { inspect } from "util";  // module
// import { inspect } from "node:util";  // module...don't need "node:"?
// const { inspect } = await import("util");  // dynamic


// function show(name, o) {
    //     console.log("\ncallback function received object: ", name)
    //     console.log(`embedded: ${o}`)
    //     console.log("raw: ", o)
    //     console.log("alone:")
    //     console.log(o)
    //     console.log("\ninspected:")
    //     console.log(inspect(o, { showHidden: false }))
    //     console.log(inspect(o, { showHidden: true }))
    //     return o
    // }



//  OAUTH 1 seems to do its job.

// This presents the credentials and receives an access token.
//   (But...where does it go?)
// const oauth = new OAuth(
//     iconApiAuth,    // requestUrl
//     iconApiAuth,    // accessUrl
//     NOUN_KEY,       // consumerKey
//     NOUN_SECRET,    // consumerSecret
//     "1.0",          // version
//     null,           // authorize_callback  ...WAIT, WHAT? the callback can be null??
//     "HMAC-SHA1",    // signatureMethod
// /*  also available:
//     undefined,      // nonceSize?: number | undefined
//     undefined,      // customHeaders?: OutgoingHttpHeaders | undefined
//  */
// )

function iconApiCallback1(e, data, res) {
    if (e) console.error(e)
    // console.warn("[TODO: _DO_ something with the data]")
    // console.log("\nOAuth1 callback:")
    // console.log(" > data:")
    // console.log(inspect(data))
    // console.log(" > res:")
    // console.log(inspect(res))
    // return data
    responses.push({ data: data, res: res, e: e })
}

function iconApiCallback2(e, access_token, refresh_token, results){
    if (e) console.error(e)
    // console.log('bearer: ', access_token);
    // // done();
    // console.log("Access token is a Bearer token in this case(?)")
    // return access_token
    responses.push({ access_token: access_token, refresh_token: refresh_token, results: results, e: e })
}



// Now OAuth2 ... wait, this has more steps!
console.log("OAuth2 object 'oauth2'")
console.log(inspect(oauth, { showHidden: false }))
console.log(inspect(oauth, { showHidden: true }))
console.log(inspect(OAuth2, { showHidden: false }))
console.log(inspect(OAuth2, { showHidden: true }))
// console.log(inspect(oauth2,))

// OAuth2 object 'oauth2':
// oauth2Inspection = {
//     _clientId: `${NOUN_KEY}`,
//     _clientSecret: `${NOUN_SECRET}`,
//     _baseSite: 'https://api.thenounproject.com',
//     _authorizeUrl: '/oauth/authorize',
//     _accessTokenUrl: '/oauth/access_token',
//     _accessTokenName: 'access_token',
//     _authMethod: 'Bearer',
//     _customHeaders: {},
//     _useAuthorizationHeaderForGET: false,
//     _agent: undefined
// }

// Let's add showHidden onto that...
// oauth2InspectionHidden = {
//     _isEcho: false,
//     _requestUrl: 'https://api.thenounproject.com',
//     _accessUrl: 'https://api.thenounproject.com',
//     _consumerKey: `${NOUN_KEY}`,
//     _consumerSecret: `${NOUN_SECRET}`,
//     _version: '1.0',
//     _authorize_callback: null,
//     _signatureMethod: 'HMAC-SHA1',
//     _nonceSize: 32,
//     _headers: {
//         Accept: '*/*',
//         Connection: 'close',
//         'User-Agent': 'Node authentication'
//     },
//     _defaultClientOptions: {
//         requestTokenHttpMethod: 'POST',
//         accessTokenHttpMethod: 'POST',
//         followRedirects: true,
//     },
//     _clientOptions: {
//         requestTokenHttpMethod: 'POST',
//         accessTokenHttpMethod: 'POST',
//         followRedirects: true,
//     },
//     _oauthParameterSeperator: ',',
//     NONCE_CHARS: [
//         'a', 'b', 'c',          'd',
//         'e', 'f', 'g',          'h',
//         'i', 'j', 'k',          'l',
//         'm', 'n', 'o',          'p',
//         'q', 'r', 's',          't',
//         'u', 'v', 'w',          'x',
//         'y', 'z', 'A',          'B',
//         'C', 'D', 'E',          'F',
//         'G', 'H', 'I',          'J',
//         'K', 'L', 'M',          'N',
//         'O', 'P', 'Q',          'R',
//         'S', 'T', 'U',          'V',
//         'W', 'X', 'Y',          'Z',
//         '0', '1', '2',          '3',
//         '4', '5', '6',          '7',
//         '8', '9', [length]: 62
//     ]
// }


// oauth2.getOAuthAccessToken("code? what code?", callback)
// oauth2.get(
//     iconMetaUrl,        // url
//     null,               // access_token
//     iconApiCallback,    // callback: ClientRequest
// )





// ---
/*
// Okay, this boilerplate worked for OA1...
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
