const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./street.db');

// The Complete 161 Item Menu
const allItems = [
        { c: "Combos & Offers 🎁", n: "Family Pizza Combo", p: 499, f: "special" }, { c: "Combos & Offers 🎁", n: "Breakfast Mega Saver", p: 149, f: "special" }, { c: "Combos & Offers 🎁", n: "Student Biryani Meal", p: 199, f: "special" },
            { c: "Breakfast", n: "Plain Dosa", p: 30, f: "normal" }, { c: "Breakfast", n: "Masala Dosa", p: 50, f: "normal" }, { c: "Breakfast", n: "Cheese Dosa", p: 70, f: "normal" }, { c: "Breakfast", n: "Onion Dosa", p: 40, f: "normal" }, { c: "Breakfast", n: "Rava Dosa", p: 50, f: "normal" }, { c: "Breakfast", n: "Mysore Dosa", p: 60, f: "normal" }, { c: "Breakfast", n: "Paper Dosa", p: 40, f: "normal" }, { c: "Breakfast", n: "Neer Dosa", p: 40, f: "normal" }, { c: "Breakfast", n: "Adai Dosa", p: 60, f: "normal" }, { c: "Breakfast", n: "Ghee Roast Dosa", p: 80, f: "normal" }, { c: "Breakfast", n: "Plain Idli", p: 10, f: "normal" }, { c: "Breakfast", n: "Rava Idli", p: 30, f: "normal" }, { c: "Breakfast", n: "Mini Idli", p: 15, f: "normal" }, { c: "Breakfast", n: "Stuffed Idli", p: 40, f: "normal" }, { c: "Breakfast", n: "Sambar Idli", p: 40, f: "normal" }, { c: "Breakfast", n: "Rice Idli", p: 10, f: "normal" }, { c: "Breakfast", n: "Millet Idli", p: 30, f: "normal" }, { c: "Breakfast", n: "Pongal", p: 40, f: "normal" }, { c: "Breakfast", n: "Plain Uttapam", p: 50, f: "normal" }, { c: "Breakfast", n: "Vegetable Uttapam", p: 60, f: "normal" },
                { c: "Upma Varieties", n: "Classic Upma", p: 30, f: "normal" }, { c: "Upma Varieties", n: "Rava Upma", p: 30, f: "normal" }, { c: "Upma Varieties", n: "Vegetable Upma", p: 40, f: "normal" }, { c: "Upma Varieties", n: "Oats Upma", p: 40, f: "normal" }, { c: "Upma Varieties", n: "Millet Upma", p: 40, f: "normal" }, { c: "Upma Varieties", n: "Quinoa Upma", p: 50, f: "normal" }, { c: "Upma Varieties", n: "Tomato Upma", p: 40, f: "normal" }, { c: "Upma Varieties", n: "Onion Upma", p: 40, f: "normal" }, { c: "Upma Varieties", n: "Spicy Upma", p: 40, f: "normal" }, { c: "Upma Varieties", n: "Upma with Nuts", p: 50, f: "normal" },
                    { c: "Lunch", n: "Veg Thali", p: 120, f: "normal" }, { c: "Lunch", n: "Special Veg Thali", p: 150, f: "normal" }, { c: "Lunch", n: "Dal Rice", p: 80, f: "normal" }, { c: "Lunch", n: "Rajma Rice", p: 100, f: "normal" }, { c: "Lunch", n: "Chole Rice", p: 100, f: "normal" }, { c: "Lunch", n: "Curd Rice", p: 70, f: "normal" }, { c: "Lunch", n: "Lemon Rice", p: 70, f: "normal" }, { c: "Lunch", n: "Veg Biryani", p: 120, f: "normal" }, { c: "Lunch", n: "Paneer Biryani", p: 160, f: "normal" }, { c: "Lunch", n: "Chicken Biryani", p: 180, f: "normal" }, { c: "Lunch", n: "Egg Biryani", p: 150, f: "normal" }, { c: "Lunch", n: "Hyderabadi Biryani", p: 200, f: "normal" }, { c: "Lunch", n: "Vegetable Pulao", p: 100, f: "normal" }, { c: "Lunch", n: "Jeera Rice", p: 90, f: "normal" }, { c: "Lunch", n: "Fried Rice", p: 100, f: "normal" },
                        { c: "Dinner", n: "Butter Chicken", p: 220, f: "normal" }, { c: "Dinner", n: "Chicken Curry", p: 200, f: "normal" }, { c: "Dinner", n: "Tandoori Chicken", p: 220, f: "normal" }, { c: "Dinner", n: "Fish Curry", p: 220, f: "normal" }, { c: "Dinner", n: "Mutton Curry", p: 260, f: "normal" }, { c: "Dinner", n: "Paneer Butter Masala", p: 180, f: "normal" }, { c: "Dinner", n: "Kadai Paneer", p: 170, f: "normal" }, { c: "Dinner", n: "Palak Paneer", p: 170, f: "normal" }, { c: "Dinner", n: "Mix Veg Curry", p: 140, f: "normal" }, { c: "Dinner", n: "Dal Makhani", p: 140, f: "normal" }, { c: "Dinner", n: "Butter Naan", p: 40, f: "normal" }, { c: "Dinner", n: "Garlic Naan", p: 50, f: "normal" }, { c: "Dinner", n: "Plain Naan", p: 35, f: "normal" }, { c: "Dinner", n: "Tandoori Roti", p: 20, f: "normal" }, { c: "Dinner", n: "Butter Roti", p: 25, f: "normal" },
                            { c: "Chinese", n: "Veg Fried Rice", p: 100, f: "normal" }, { c: "Chinese", n: "Chicken Fried Rice", p: 140, f: "normal" }, { c: "Chinese", n: "Schezwan Fried Rice", p: 120, f: "normal" }, { c: "Chinese", n: "Veg Noodles", p: 100, f: "normal" }, { c: "Chinese", n: "Chicken Noodles", p: 140, f: "normal" }, { c: "Chinese", n: "Schezwan Noodles", p: 120, f: "normal" }, { c: "Chinese", n: "Veg Manchurian", p: 120, f: "normal" }, { c: "Chinese", n: "Chicken Manchurian", p: 160, f: "normal" }, { c: "Chinese", n: "Chilli Paneer", p: 150, f: "normal" }, { c: "Chinese", n: "Chilli Chicken", p: 180, f: "normal" }, { c: "Chinese", n: "Veg Momos", p: 80, f: "normal" }, { c: "Chinese", n: "Chicken Momos", p: 120, f: "normal" }, { c: "Chinese", n: "Spring Rolls", p: 100, f: "normal" }, { c: "Chinese", n: "Hot & Sour Soup", p: 90, f: "normal" }, { c: "Chinese", n: "Sweet Corn Soup", p: 80, f: "normal" },
                                { c: "Italian", n: "Margherita Pizza", p: 120, f: "normal" }, { c: "Italian", n: "Farmhouse Pizza", p: 180, f: "normal" }, { c: "Italian", n: "Paneer Pizza", p: 170, f: "normal" }, { c: "Italian", n: "Veggie Pizza", p: 150, f: "normal" }, { c: "Italian", n: "Cheese Burst Pizza", p: 200, f: "normal" }, { c: "Italian", n: "White Sauce Pasta", p: 120, f: "normal" }, { c: "Italian", n: "Red Sauce Pasta", p: 120, f: "normal" }, { c: "Italian", n: "Pink Sauce Pasta", p: 140, f: "normal" }, { c: "Italian", n: "Garlic Bread", p: 80, f: "normal" }, { c: "Italian", n: "Cheese Garlic Bread", p: 100, f: "normal" }, { c: "Italian", n: "Lasagna", p: 180, f: "normal" }, { c: "Italian", n: "Spaghetti", p: 150, f: "normal" },
                                    { c: "Street Food", n: "Pani Puri", p: 30, f: "normal" }, { c: "Street Food", n: "Bhel Puri", p: 40, f: "normal" }, { c: "Street Food", n: "Sev Puri", p: 40, f: "normal" }, { c: "Street Food", n: "Vada Pav", p: 30, f: "normal" }, { c: "Street Food", n: "Samosa", p: 20, f: "normal" }, { c: "Street Food", n: "Aloo Tikki", p: 40, f: "normal" }, { c: "Street Food", n: "Pav Bhaji", p: 60, f: "normal" }, { c: "Street Food", n: "Misal Pav", p: 60, f: "normal" }, { c: "Street Food", n: "Egg Roll", p: 50, f: "normal" }, { c: "Street Food", n: "Kathi Roll", p: 60, f: "normal" }, { c: "Street Food", n: "Frankie Roll", p: 60, f: "normal" },
                                        { c: "Snacks", n: "French Fries", p: 80, f: "normal" }, { c: "Snacks", n: "Masala Fries", p: 100, f: "normal" }, { c: "Snacks", n: "Veg Sandwich", p: 60, f: "normal" }, { c: "Snacks", n: "Grilled Sandwich", p: 80, f: "normal" }, { c: "Snacks", n: "Paneer Sandwich", p: 100, f: "normal" }, { c: "Snacks", n: "Veg Cutlet", p: 40, f: "normal" }, { c: "Snacks", n: "Onion Pakoda", p: 40, f: "normal" }, { c: "Snacks", n: "Paneer Pakoda", p: 80, f: "normal" }, { c: "Snacks", n: "Onion Rings", p: 80, f: "normal" }, { c: "Snacks", n: "Popcorn", p: 60, f: "normal" },
                                            { c: "Juices", n: "Orange Juice", p: 50, f: "normal" }, { c: "Juices", n: "Watermelon Juice", p: 50, f: "normal" }, { c: "Juices", n: "Mango Juice", p: 60, f: "normal" }, { c: "Juices", n: "Pineapple Juice", p: 60, f: "normal" }, { c: "Juices", n: "Mosambi Juice", p: 50, f: "normal" }, { c: "Juices", n: "Pomegranate Juice", p: 70, f: "normal" }, { c: "Juices", n: "Sugarcane Juice", p: 40, f: "normal" },
                                                { c: "Smoothies", n: "Mango Smoothie", p: 80, f: "normal" }, { c: "Smoothies", n: "Banana Smoothie", p: 70, f: "normal" }, { c: "Smoothies", n: "Strawberry Smoothie", p: 90, f: "normal" }, { c: "Smoothies", n: "Chocolate Smoothie", p: 100, f: "normal" }, { c: "Smoothies", n: "Peanut Butter Smoothie", p: 110, f: "normal" }, { c: "Smoothies", n: "Mixed Berry Smoothie", p: 120, f: "normal" },
                                                    { c: "Mocktails", n: "Virgin Mojito", p: 120, f: "normal" }, { c: "Mocktails", n: "Blue Lagoon", p: 130, f: "normal" }, { c: "Mocktails", n: "Strawberry Mojito", p: 130, f: "normal" }, { c: "Mocktails", n: "Green Apple Mojito", p: 130, f: "normal" }, { c: "Mocktails", n: "Pineapple Mint Cooler", p: 120, f: "normal" }, { c: "Mocktails", n: "Watermelon Cooler", p: 110, f: "normal" }, { c: "Mocktails", n: "Cranberry Fizz", p: 140, f: "normal" }, { c: "Mocktails", n: "Mint Lemonade", p: 100, f: "normal" }, { c: "Mocktails", n: "Fruit Punch", p: 150, f: "normal" }, { c: "Mocktails", n: "Orange Sunset", p: 120, f: "normal" },
                                                        { c: "Soups", n: "Tomato Soup", p: 80, f: "normal" }, { c: "Soups", n: "Sweet Corn Soup", p: 80, f: "normal" }, { c: "Soups", n: "Hot & Sour Soup", p: 90, f: "normal" }, { c: "Soups", n: "Manchow Soup", p: 90, f: "normal" }, { c: "Soups", n: "Veg Clear Soup", p: 70, f: "normal" }, { c: "Soups", n: "Chicken Clear Soup", p: 100, f: "normal" }, { c: "Soups", n: "Chicken Manchow Soup", p: 110, f: "normal" }, { c: "Soups", n: "Mushroom Soup", p: 100, f: "normal" }, { c: "Soups", n: "Lemon Coriander Soup", p: 90, f: "normal" }, { c: "Soups", n: "Cream of Tomato Soup", p: 90, f: "normal" },
                                                            { c: "Ice Cream", n: "Vanilla Ice Cream", p: 50, f: "normal" }, { c: "Ice Cream", n: "Chocolate Ice Cream", p: 60, f: "normal" }, { c: "Ice Cream", n: "Strawberry Ice Cream", p: 60, f: "normal" }, { c: "Ice Cream", n: "Butterscotch Ice Cream", p: 70, f: "normal" }, { c: "Ice Cream", n: "Mango Ice Cream", p: 60, f: "normal" }, { c: "Ice Cream", n: "Black Currant Ice Cream", p: 70, f: "normal" }, { c: "Ice Cream", n: "Chocolate Chip Ice Cream", p: 80, f: "normal" }, { c: "Ice Cream", n: "Kulfi", p: 50, f: "normal" }, { c: "Ice Cream", n: "Matka Kulfi", p: 70, f: "normal" }, { c: "Ice Cream", n: "Ice Cream Sundae", p: 120, f: "normal" },
                                                                { c: "Desserts", n: "Gulab Jamun", p: 50, f: "normal" }, { c: "Desserts", n: "Rasgulla", p: 50, f: "normal" }, { c: "Desserts", n: "Rasmalai", p: 70, f: "normal" }, { c: "Desserts", n: "Kaju Katli", p: 90, f: "normal" }, { c: "Desserts", n: "Gajar Ka Halwa", p: 80, f: "normal" }, { c: "Desserts", n: "Moong Dal Halwa", p: 90, f: "normal" }, { c: "Desserts", n: "Chocolate Brownie", p: 120, f: "normal" }, { c: "Desserts", n: "Brownie with Ice Cream", p: 150, f: "normal" }, { c: "Desserts", n: "Cheesecake", p: 160, f: "normal" }, { c: "Desserts", n: "Tiramisu", p: 180, f: "normal" }
];

db.serialize(() => {
        console.log("🧹 Wiping old database to start fresh...");
            
                // 1. Drop ALL old tables to ensure a perfectly clean slate
                    db.run("DROP TABLE IF EXISTS Imaster", (err) => { if (err) console.error("Error dropping Imaster:", err); }); 
                        db.run("DROP TABLE IF EXISTS umaster", (err) => { if (err) console.error("Error dropping umaster:", err); }); 
                            db.run("DROP TABLE IF EXISTS ulog", (err) => { if (err) console.error("Error dropping ulog:", err); }); 
                                db.run("DROP TABLE IF EXISTS tlog", (err) => { if (err) console.error("Error dropping tlog:", err); }); 

                                    console.log("🏗️ Rebuilding Enterprise Tables...");
                                        
                                            // 2. Rebuild the Menu Table
                                                db.run(`CREATE TABLE Imaster (
                                                            icode INTEGER PRIMARY KEY AUTOINCREMENT,
                                                                    category TEXT NOT NULL,
                                                                            idesc TEXT NOT NULL,
                                                                                    flag TEXT DEFAULT 'normal',
                                                                                            price REAL NOT NULL,
                                                                                                    available BOOLEAN DEFAULT 1
                                                )`, (err) => { if (err) console.error("Error creating Imaster:", err); });

                                                    // 3. Rebuild the Customer Table
                                                        db.run(`CREATE TABLE umaster (
                                                                    uid INTEGER PRIMARY KEY AUTOINCREMENT,
                                                                            uname TEXT NOT NULL,
                                                                                    unumber TEXT NOT NULL UNIQUE,
                                                                                            uaddress TEXT
                                                        )`, (err) => { if (err) console.error("Error creating umaster:", err); });

                                                            // 4. Rebuild the Admin Login Log Table
                                                                db.run(`CREATE TABLE ulog (
                                                                            log_id INTEGER PRIMARY KEY AUTOINCREMENT,
                                                                                    admin_id TEXT,
                                                                                            login_time TEXT,
                                                                                                    logout_time TEXT
                                                                )`, (err) => { if (err) console.error("Error creating ulog:", err); });

                                                                    // 5. Rebuild the Transaction Log Table
                                                                        db.run(`CREATE TABLE tlog (
                                                                                    tlog_id INTEGER PRIMARY KEY AUTOINCREMENT,
                                                                                            uid INTEGER,
                                                                                                    date_time TEXT,
                                                                                                            amount REAL,
                                                                                                                    pay_method TEXT
                                                                        )`, (err) => { if (err) console.error("Error creating tlog:", err); });

                                                                            console.log("🍔 Injecting 161 Food Items...");
                                                                                
                                                                                    // 6. Inject the food items
                                                                                        const stmt = db.prepare("INSERT INTO Imaster (category, idesc, flag, price, available) VALUES (?, ?, ?, ?, 1)");
                                                                                            
                                                                                                allItems.forEach(item => {
                                                                                                            stmt.run(item.c, item.n, item.f, item.p);
                                                                                                });
                                                                                                    
                                                                                                        stmt.finalize();
                                                                                                            console.log("✅ SUCCESS! Your Full-Stack Database is completely reset and ready to go!");
                                                                                                                    db.close();
});

