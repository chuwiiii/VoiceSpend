const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const app = express();
app.use(cors());
app.use(bodyParser.json());

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
    connection.query('SELECT * FROM transactions', (err, results) => {
      if (err) {
        console.error('Error fetching transactions: ', err);
        res.status(500).json({ error: 'Error fetching transactions' });
      } else {
        res.status(200).json(results);
      }
    });
  });