import Oauth1Helper from './oauthHelper'
import axios from 'axios'

const request = {
    url: 'https://www.instapaper.com/api/1.1/bookmarks/1437653275/highlights',
    method: 'GET'
};

const authHeader = Oauth1Helper.getAuthHeaderForRequest(request);

async function getBookmarkList() {
   let getBookmarkLists = await axios.get(
        request.url,
        { headers: authHeader }).then(response => response.data);
  
        const bookmarksList = getBookmarkLists.map(x => x.text)

        bookmarksList.forEach(text => {
            console.log(text);
    });    
}

getBookmarkList()
//console.log(value);