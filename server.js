const express = require('express');
const fs = require('fs');
const path = require('path');
const cors = require('cors'); // Install dan gunakan CORS untuk mengizinkan akses dari frontend
const app = express();
const port = 5000;

app.use(cors()); // Mengizinkan akses dari port yang berbeda (misalnya React di port 3000)
app.use(express.json()); // Untuk parsing request body dalam format JSON

const dataPath = path.join(__dirname, 'public', 'orang.json');

// Mendapatkan data musisi
app.get('/musisi', (req, res) => {
    fs.readFile(dataPath, 'utf8', (err, data) => {
        if (err) {
            res.status(500).json({ message: 'Error membaca data.' });
        } else {
            res.json(JSON.parse(data));
        }
    });
});

// Menambahkan musisi baru
app.post('/musisi', (req, res) => {
    const newMusisi = req.body;
    fs.readFile(dataPath, 'utf8', (err, data) => {
        if (err) {
            res.status(500).json({ message: 'Error membaca data.' });
        } else {
            const musisiData = JSON.parse(data);
            newMusisi.id = musisiData.length ? musisiData[musisiData.length - 1].id + 1 : 1;
            musisiData.push(newMusisi);
            fs.writeFile(dataPath, JSON.stringify(musisiData, null, 2), 'utf8', (err) => {
                if (err) {
                    res.status(500).json({ message: 'Error menulis data.' });
                } else {
                    res.status(201).json(newMusisi);
                }
            });
        }
    });
});

// Mengupdate musisi
app.put('/musisi/:id', (req, res) => {
    const { id } = req.params;
    const updatedMusisi = req.body;
    fs.readFile(dataPath, 'utf8', (err, data) => {
        if (err) {
            res.status(500).json({ message: 'Error membaca data.' });
        } else {
            let musisiData = JSON.parse(data);
            musisiData = musisiData.map((musisi) =>
                musisi.id === parseInt(id) ? { ...musisi, ...updatedMusisi } : musisi
            );
            fs.writeFile(dataPath, JSON.stringify(musisiData, null, 2), 'utf8', (err) => {
                if (err) {
                    res.status(500).json({ message: 'Error menulis data.' });
                } else {
                    res.json(updatedMusisi);
                }
            });
        }
    });
});

// Menghapus musisi
app.delete('/musisi/:id', (req, res) => {
    const { id } = req.params;
    fs.readFile(dataPath, 'utf8', (err, data) => {
        if (err) {
            res.status(500).json({ message: 'Error membaca data.' });
        } else {
            let musisiData = JSON.parse(data);
            musisiData = musisiData.filter((musisi) => musisi.id !== parseInt(id));
            fs.writeFile(dataPath, JSON.stringify(musisiData, null, 2), 'utf8', (err) => {
                if (err) {
                    res.status(500).json({ message: 'Error menulis data.' });
                } else {
                    res.status(204).end(); // Mengirimkan status 204 untuk menunjukkan bahwa data sudah dihapus
                }
            });
        }
    });
});

app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});
