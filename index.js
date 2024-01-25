const bodyParser = require('body-parser');
const express = require('express');
const fs = require('fs');
const { valid } = require('./middlewares/valid');

const app = express();
const port = 4567;
const filePath = './info.json';

let info;

fs.access(filePath, fs.constants.F_OK, (err) => {
    if (!err) {
        console.log('el archivo existe, continuemos')
    } else {
        const data = JSON.stringify([], null, 2);
        fs.writeFile(filePath, data, (err) => {
            if (err) console.log('Errpr al crear el archivo: ' + err);
        });
    }
});

const writeFile = (path, data) => {
    fs.writeFileSync(path, data, 'utf8');
}

fs.readFile(filePath, 'utf8', function (err, fileData) {
    if (err) console.log('error read: ', err);
    try {
        info = JSON.parse(fileData);
    } catch (err) {
        console.log('Creando archivo ...');
        if (info === undefined) {
            const data = JSON.stringify([], null, 2);
            fs.writeFile(filePath, data, (err) => {
                if (err) console.log('Error al crear el archivo: ' + err);
            });
            fs.readFile(filePath, 'utf8', (err, fileData) => {
                info = JSON.parse(fileData);
            })
        }
        console.log('Archivo creado');
    }
});

app.use(bodyParser.json());
console.log('estatus del archivo info al inicio: ' + info)

// GET: mostrar all
app.get('/', (req, res) => {
    res.status(200).json(info);
});

// GET: mostrar por parametro 1
app.get('/:index', (req, res) => {
    res.status(200).json(info[req.params.index]);
});

// POST: nombre, apellido, telefono, email
app.post('/', valid, (req, res) => {
    info.push(req.body);

    console.log(req.body)
    const json_info = JSON.stringify(info);
    writeFile(filePath, json_info);

    res.status(200).json({ msg: 'ingresado correctamente' });
});

// PUT: actualizar solo 1 por parametro
app.put('/:index', valid, (req, res) => {
    const { index } = req.params;
    const { body } = req;

    for (let key in body) {
        info[index][key] = body[key];
    }

    const json_info = JSON.stringify(info);
    writeFile(filePath, json_info);

    res.status(200).json({ msg: 'se actualizo correctamente' });
});

// DELETE: eliminar por parametro
app.delete('/:number', (req, res) => {
    info.splice(req.params.number, 1);

    const json_info = JSON.stringify(info);
    writeFile(filePath, json_info);

    res.status(200).json({ msg: 'se elimino correctamente' });
});

app.listen(port, () => {
    console.log('its working');
});