"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const crypto_1 = __importDefault(require("crypto"));
const oauth_1_0a_1 = __importDefault(require("oauth-1.0a"));
const CONSUMERKEY = 'c9feefb712cb45efb50e04e1a73a80fa';
const CONSUMERSECRET = '491f011792464ab4b98fff7354334cb9';
const TOKENKEY = '55d664a803764e2592e725ccbac3ba05';
const TOKENSECRET = 'd0312c424c204fe192412dc6ffe04167';
class Oauth1Helper {
    static getAuthHeaderForRequest(request) {
        const oauth = new oauth_1_0a_1.default({
            consumer: { key: CONSUMERKEY, secret: CONSUMERSECRET },
            signature_method: 'HMAC-SHA1',
            hash_function(base_string, key) {
                return crypto_1.default
                    .createHmac('sha1', key)
                    .update(base_string)
                    .digest('base64');
            },
        });
        const authorization = oauth.authorize(request, {
            key: TOKENKEY,
            secret: TOKENSECRET,
        });
        return oauth.toHeader(authorization);
    }
}
exports.default = Oauth1Helper;
