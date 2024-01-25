require('dotenv').config({
    path: `.env.${process.env.NODE_ENV || "development"}`
})

const fsSync = require('fs');
const file = fsSync.readFileSync('./holis.txt', { encoding: "utf8", flag: 'r' });

const dataMod = file.toString().replace(/\s+/g, '');

fsSync.writeFileSync('./holis.txt', dataMod);

const fs = require('fs/promises');
const readAsyncFile = async (path) => {
    const regex = /\.json/;

    try {
        const file = await fs.readFile(path, { encoding: 'utf8', flag: 'r' });

        if (regex.test(path)) {
            let jsonFile = JSON.parse(file);
            console.log(JSON.parse(file))
        }

        console.log(file)
        return file;
    } catch (error) {
        console.log(error)
    }
}

readAsyncFile('./holis.json')
readAsyncFile('.env.development');