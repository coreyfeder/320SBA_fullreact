require("dotenv/configure");
var OAuth = require('oauth')
// `npm install oauth` to satisfy
// website: https://github.com/ciaranj/node-oauth

var KEY = "<INSERT KEY HERE>"
var SECRET = "<INSERT SECRET HERE>"

var oauth = new OAuth.OAuth(
        'https://api.thenounproject.com',
        'https://api.thenounproject.com',
        KEY,
        SECRET,
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
