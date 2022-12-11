import crypto from 'crypto';
import oauth1a from 'oauth-1.0a';

const CONSUMERKEY = 'c9feefb712cb45efb50e04e1a73a80fa';
const CONSUMERSECRET = '491f011792464ab4b98fff7354334cb9';
const TOKENKEY = '55d664a803764e2592e725ccbac3ba05';
const TOKENSECRET = 'd0312c424c204fe192412dc6ffe04167';

class Oauth1Helper {
    static getAuthHeaderForRequest(request: any) {
        const oauth = new oauth1a({
            consumer: { key: CONSUMERKEY, secret: CONSUMERSECRET },
            signature_method: 'HMAC-SHA1',
            hash_function(base_string, key) {
                return crypto
                    .createHmac('sha1', key)
                    .update(base_string)
                    .digest('base64')
            },
        })

        const authorization = oauth.authorize(request, {
            key: TOKENKEY,
            secret: TOKENSECRET,
        });

        return oauth.toHeader(authorization);
    }
}

 export default Oauth1Helper;