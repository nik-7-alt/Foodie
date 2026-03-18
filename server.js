const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

const db = new sqlite3.Database('./street.db', (err) => {
    if (err) console.error(err.message);
    console.log('✅ Connected to the Street Cafe Database!');
});

// 1. AUTOMATICALLY BUILD ALL 4 TABLES
db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS Imaster (icode INTEGER PRIMARY KEY AUTOINCREMENT, category TEXT NOT NULL, idesc TEXT NOT NULL, flag TEXT DEFAULT 'normal', price REAL NOT NULL, available BOOLEAN DEFAULT 1)`);
    db.run(`CREATE TABLE IF NOT EXISTS umaster (uid INTEGER PRIMARY KEY AUTOINCREMENT, uname TEXT NOT NULL, unumber TEXT NOT NULL UNIQUE, uaddress TEXT)`);
    db.run(`CREATE TABLE IF NOT EXISTS ulog (log_id INTEGER PRIMARY KEY AUTOINCREMENT, admin_id TEXT, login_time TEXT, logout_time TEXT)`);
    db.run(`CREATE TABLE IF NOT EXISTS tlog (tlog_id INTEGER PRIMARY KEY AUTOINCREMENT, uid INTEGER, date_time TEXT, amount REAL, pay_method TEXT)`);
});

// ==========================================
// API ENDPOINTS
// ==========================================

app.get('/api/menu', (req, res) => {
    db.all("SELECT * FROM Imaster", [], (err, rows) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(rows);
    });
});

app.put('/api/menu/update', (req, res) => {
    const { icode, newPrice, available } = req.body;
    db.run(`UPDATE Imaster SET price = ?, available = ? WHERE icode = ?`, [newPrice, available, icode], function(err) {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: "Updated successfully!" });
    });
});

// ⭐ NEW: ADD FOOD ITEM
app.post('/api/menu/add', (req, res) => {
    const { category, idesc, price } = req.body;
    db.run(`INSERT INTO Imaster (category, idesc, price, available, flag) VALUES (?, ?, ?, 1, 'normal')`, 
    [category, idesc, price], function(err) {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: "Item added successfully!" });
    });
});

// ⭐ NEW: DELETE FOOD ITEM
app.delete('/api/menu/delete/:name', (req, res) => {
    const itemName = req.params.name;
    db.run(`DELETE FROM Imaster WHERE idesc = ?`, itemName, function(err) {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: "Item deleted successfully!" });
    });
});

// Admin Login Log
app.post('/api/admin/login', (req, res) => {
    const { admin_id, time } = req.body;
    db.run(`INSERT INTO ulog (admin_id, login_time) VALUES (?, ?)`, [admin_id, time], function(err) {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ log_id: this.lastID }); 
    });
});

// Admin Logout Log
app.post('/api/admin/logout', (req, res) => {
    const { log_id, time } = req.body;
    db.run(`UPDATE ulog SET logout_time = ? WHERE log_id = ?`, [time, log_id], function(err) {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: "Logout recorded!" });
    });
});

// Save Customer AND Transaction Log
app.post('/api/order', (req, res) => {
    const { uname, unumber, uaddress, total, pay_mode } = req.body;
    const sqlUser = `INSERT INTO umaster (uname, unumber, uaddress) VALUES (?, ?, ?) ON CONFLICT(unumber) DO UPDATE SET uaddress = excluded.uaddress`;
    
    db.run(sqlUser, [uname, unumber, uaddress], function(err) {
        if (err) return res.status(500).json({ error: err.message });

        db.get(`SELECT uid FROM umaster WHERE unumber = ?`, [unumber], (err, row) => {
            if (err || !row) return res.status(500).json({ error: "Failed to fetch user ID" });

            const timeNow = new Date().toLocaleString();
            db.run(`INSERT INTO tlog (uid, date_time, amount, pay_method) VALUES (?, ?, ?, ?)`, [row.uid, timeNow, total, pay_mode], function(err2) {
                if (err2) return res.status(500).json({ error: err2.message });
                res.json({ message: "Order and Transaction Logged successfully!" });
            });
        });
    });
});

app.listen(3000, () => {
    console.log('🚀 Server is LIVE on port 3000');
});