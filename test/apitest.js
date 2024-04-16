require("dotenv/configure");
var OAuth = require('oauth')
// `npm install oauth` to satisfy
// website: https://github.com/ciaranj/node-oauth

var NOUN_KEY = "process.env.NOUN_KEY"
var NOUN_SECRET = "process.env.NOUN_SECRET"

var oauth = new OAuth.OAuth(
        'https://api.thenounproject.com',
        'https://api.thenounproject.com',
        NOUN_KEY,
        NOUN_SECRET,
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
