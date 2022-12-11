"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const oauthHelper_1 = __importDefault(require("./oauthHelper"));
const axios_1 = __importDefault(require("axios"));
const request = {
    url: 'https://www.instapaper.com/api/1.1/bookmarks/1437653275/highlights',
    method: 'GET'
};
const authHeader = oauthHelper_1.default.getAuthHeaderForRequest(request);
async function getBookmarkList() {
    let getBookmarkLists = await axios_1.default.get(request.url, { headers: authHeader }).then(response => response.data);
    const bookmarksList = getBookmarkLists.map(x => x.text);
    bookmarksList.forEach(text => {
        console.log(text);
    });
}
getBookmarkList();
//console.log(value);
