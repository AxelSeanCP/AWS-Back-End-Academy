const fs = require("fs");
const path = require("path");

const readableStream = fs.createReadStream("./filesystem/article.txt", {
    highWaterMark: 10
});

readableStream.on("readable", () => {
    try {
        process.stdout.write(`[${readableStream.read()}]`);
    } catch (error) {
        console.log(error);
    }
});

readableStream.on("end", () => {
    console.log("done");
})