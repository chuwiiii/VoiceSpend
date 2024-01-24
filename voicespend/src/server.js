const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.listen(3001, () => {
    console.log('Server is running on port 3001');
  });

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Jkobdelapaz00',
    database: 'expense_tracker',
  });

  connection.connect((err) => {
    if (err) {
      console.error('Error connecting to MySQL:', err);
    } else {
      console.log('Connected to MySQL database');
    }
  });

  app.post('/transactions', (req, res) => {
    const transaction = req.body;
    connection.query('INSERT INTO transactions SET ?', transaction, (err, results) => {
      if (err) {
        console.error('Error inserting transaction: ', err);
        res.status(500).json({ error: 'Error inserting transaction' });
      } else {
        res.status(201).json(results);
      }
    });
  });

  app.get('/transactions', (req, res) => {
    db.query('SELECT * FROM transactions', (err, results) => {
      if (err) {
        res.status(500).json({ message: err.message });
      } else {
        res.json(results);
      }
    });
  });