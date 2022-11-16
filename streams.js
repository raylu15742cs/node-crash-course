const fs = require('fs')

const readStreams = fs.createReadStream('./docs/blog3.txt', {encoding : 'utf8'});

readStreams.on('data' , (chunk) => {
    console.log("---- NEW CHUNK -----");
    console.log(chunk);
})