// TODO: tampilkan teks pada notes.txt pada console.
const fs = require('fs');
const path = require('path');

const readCallback = (error, data) => {
    if (error){
        console.log("Gagal membaca data");
        return;
    }
    console.log(data);
}

const linkFile = path.resolve(__dirname, 'notes.txt');

fs.readFile(linkFile, 'utf-8', readCallback);