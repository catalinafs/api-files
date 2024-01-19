const fs = require('fs/promises');

require('dotenv').config({
    path: `.env.${process.env.NODE_ENV || "development"}`
})

// const fs = require('fs');
// const file = fs.readFileSync('./holis.txt', { encoding: "utf8", flag: 'r' });

// const dataMod = file.toString().replace(/\s+/g, '');

// fs.writeFileSync('./holis.txt', dataMod);

const readAsyncFile = async (path) => {
    const regex = /\.json/;

    try {
        const file = await fs.readFile(path, { encoding: 'utf8', flag: 'r' });

        if(regex.test(path)) {
            console.log(JSON.parse(file))
        }
        return file;
    } catch (error) {
        console.log(error)
    }
}

readAsyncFile('./holis.json')
readAsyncFile('.env.development');