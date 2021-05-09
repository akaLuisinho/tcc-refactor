const Database = require('./config')

const initDb = {
    async init() {
        db = await Database()

        await db.exec(`
        CREATE TABLE appointments(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name CHAR(200) NOT NULL,
            address CHAR(200),
            phone CHAR(30) NOT NULL,
            gender CHAR(1),
            birth_date CHAR(30),
            dentist CHAR(30) NOT NULL,
            day CHAR(20) NOT NULL,
            time CHAR(20) NOT NULL,
            email CHAR(200) NOT NULL)
        `)

        await db.exec(`
        CREATE TABLE login(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username CHAR(40),
            password CHAR(40)
        )`)

        await db.exec(`
        INSERT INTO login(username, password) 
        VALUES ( "luisfelipe", "luisfelipe@2021")`
        )

        await db.close()
    }
}

initDb.init()