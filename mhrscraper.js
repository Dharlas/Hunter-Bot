const rp = require('request-promise');
const url = 'https://monsterhunterrise.wiki.fextralife.com/Bishaten';

rp(url)
  .then(function(html){
    //success!
    console.log(html);
  })
  .catch(function(err){
    //handle error
  });