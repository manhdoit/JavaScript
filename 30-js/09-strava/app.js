


const auth_link = "https://www.strava.com/oauth/token"
function getActivites(res) {
    const activities_link = `https://www.strava.com/api/v3/athlete/activities?access_token=${res.access_token}`
    fetch(activities_link)
        .then((res) => console.log(res.json()));
}



function reAuthorize() {
    fetch(auth_link,{
        method: 'post',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            client_id: '124709',
            client_secret: 'f056492263c9d6b0a0969417ad81f418f1044dcc',
            refresh_token: '9b14081e92c3045965be25c76941f4ec061fd873',
            grant_type: 'refresh_token'
        })
    }).then(res => res.json())
        .then(res => getActivites(res))
}
reAuthorize()



var StravaApiV3 = require('strava_api_v3');
var defaultClient = StravaApiV3.ApiClient.instance;

// Configure OAuth2 access token for authorization: strava_oauth
var strava_oauth = defaultClient.authentications['strava_oauth'];
strava_oauth.accessToken = '7da66df88757805544762de3bda1d194c0683de3'

var api = new StravaApiV3.ClubsApi()

var id = 789; // {Long} The identifier of the club.

var opts = { 
  'page': 56, // {Integer} Page number. Defaults to 1.
  'perPage': 56 // {Integer} Number of items per page. Defaults to 30.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getClubActivitiesById(id, opts, callback);