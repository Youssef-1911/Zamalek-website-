const sqlite = require('sqlite3');
const db = new sqlite.Database('zamalek.db');


const createUserTable = `
    CREATE TABLE IF NOT EXISTS USER (
        ID INTEGER PRIMARY KEY AUTOINCREMENT,
        NAME TEXT NOT NULL,
        EMAIL TEXT UNIQUE NOT NULL,
        PASSWORD TEXT NOT NULL,
        ISADMIN INT NOT NULL
    )`;

const createProductTable = `
    CREATE TABLE IF NOT EXISTS PRODUCT (
        ID INTEGER PRIMARY KEY AUTOINCREMENT,
        NAME TEXT NOT NULL,
        DESCRIPTION TEXT,
        PRICE REAL NOT NULL,
        QUANTITY INT NOT NULL,
        PHOTO TEXT NOT NULL
    )`;

    const createCartTable = `
    CREATE TABLE IF NOT EXISTS CART (
        ID INTEGER PRIMARY KEY AUTOINCREMENT,
        USER_ID INTEGER,
        PRODUCT_ID INTEGER,
        QUANTITY INTEGER,
        FOREIGN KEY(USER_ID) REFERENCES USER(ID),
        FOREIGN KEY(PRODUCT_ID) REFERENCES PRODUCT(ID)
    )`;

    const createOrdersTable = `
    CREATE TABLE IF NOT EXISTS ORDERS (
        ID INTEGER PRIMARY KEY AUTOINCREMENT,
        USER_ID INTEGER NOT NULL,
        PRODUCT_ID INTEGER NOT NULL,
        QUANTITY INTEGER NOT NULL,
        TOTAL_PRICE REAL NOT NULL,
        NAME TEXT NOT NULL, 
        ADDRESS TEXT NOT NULL,
        PAYMENT_METHOD TEXT NOT NULL,
        STATUS TEXT DEFAULT 'Pending', 
        FOREIGN KEY(USER_ID) REFERENCES USER(ID) ON DELETE CASCADE,
        FOREIGN KEY(PRODUCT_ID) REFERENCES PRODUCT(ID) ON DELETE CASCADE
    )`;
    
    const createWishlistTable = `
    CREATE TABLE IF NOT EXISTS WISHLIST (
        ID INTEGER PRIMARY KEY AUTOINCREMENT,
        USER_ID INTEGER,
        PRODUCT_ID INTEGER,
        FOREIGN KEY(USER_ID) REFERENCES USER(ID),
        FOREIGN KEY(PRODUCT_ID) REFERENCES PRODUCT(ID)
    )`;
    
    const createPlayersTable =`
    CREATE TABLE Players (
        ID INTEGER PRIMARY KEY AUTOINCREMENT,
        Name TEXT NOT NULL,
        Position TEXT,
        Nationality TEXT,
        Bio TEXT,
        Photo TEXT 
    )`
    
    
module.exports={db,createUserTable,createProductTable,createCartTable,createOrdersTable,createReviewsTable,createWishlistTable,createPlayersTable}

