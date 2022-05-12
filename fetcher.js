const request = require('request');
const fs = require('fs');



request('http://example.edu/', (error, response, body) => {
    if (error) console.log('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    //*    console.log('body:', body); // Print the HTML for the Google homepage.

    const content = body;

    try {
        fs.writeFileSync('./index.html', content);
        // file written successfully
    } catch (err) {
        console.error(err);
    }

});