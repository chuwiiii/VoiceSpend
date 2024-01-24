const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());
app.listen(3001, () => {
    console.log('Server is running on port 3001');
  });

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Jkobdelapaz00',
    database: 'expense_tracker',
  });

  db.connect((err) => {
    if (err) {
      console.error('Error connecting to MySQL:', err);
    } else {
      console.log('Connected to MySQL database');
    }
  });

  app.post('/transactions', (req, res) => {
    const { amount, category, type, date } = req.body;
  
    db.query(
      'INSERT INTO transactions (amount, category, type, date) VALUES (?, ?, ?, ?)',
      [amount, category, type, date],
      (err, result) => {
        if (err) {
          res.status(500).json({ message: err.message });
        } else {
          res.status(201).json(result);
        }
      }
    );
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