const fs = require('fs')

const readStreams = fs.createReadStream('./docs/blog3.txt', {encoding : 'utf8'});
const writeStream = fs.createWriteStream('./docs/blog4.txt');

readStreams.on('data' , (chunk) => {
    console.log("---- NEW CHUNK -----");
    console.log(chunk);
    writeStream.write('\n NEW CHUNK \n')
    writeStream.write(chunk)
})