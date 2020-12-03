const request = require('request')
const fs = require(('fs'));

let url = process.argv[2];
let fileUrl = process.argv[3];
// console.log(process.argv);

request(`${url}`, (error, response, body) => {
  // console.log('error:', error); // Print the error if one occurred
  // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the Google homepage.

  // returns size of file
  const stats = fs.statSync(fileUrl); 
  const fileSizeInBytes = stats["size"];

  // writes html request body into specificied file 
  fs.writeFile(fileUrl, body, function(err) {
    if(err) {
        return console.log(err);
    }
    console.log(`Downloaded and saved ${fileSizeInBytes} bytes to ${fileUrl}.`);
  }); 
});

