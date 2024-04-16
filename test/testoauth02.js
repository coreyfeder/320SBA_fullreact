// require('dotenv').config();
import "dotenv/config";

// const axios = require("axios");
import axios from "axios";

// const oauth2 = require("oauth4webapi");
import * as oauth2 from 'oauth4webapi';

import { ClientCredentials, ResourceOwnerPassword, AuthorizationCode } from "simple-oauth2";


const testurl = "https://api.thenounproject.com/v2/icon/6324?thumbnail_size=42"


// simple-oauth2

const config = {
    client: {
        id: process.env.NOUN_KEY,
        secret: process.env.NOUN_SECRET,
    },
    auth: {
        tokenHost: "https://api.thenounproject.com"
        // tokenHost: "https://api.thenounproject.com/v2/icon/1"
        // tokenHost: 'https://api.oauth.com'
    }
};

// const { ClientCredentials, ResourceOwnerPassword, AuthorizationCode } = require("simple-oauth2");

console.log((ClientCredentials));
console.log(ResourceOwnerPassword);
console.log(AuthorizationCode);
// let creds = new ClientCredentials({
//     id: process.env.NOUN_KEY,
//     secret: process.env.NOUN_SECRET,
// })
// console.log(creds)



// axios

// async function getIcon() {
//     try {
//         const response = await axios.get(testurl);
//         console.log(response);
//     } catch (error) {
//         console.error(error);
//     }
// }

// axios.get(testurl);



//  oauth4webapi
