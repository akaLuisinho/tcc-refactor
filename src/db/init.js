const Database = require('./config')

const initDb = {
    async init() {
        db = await Database()

        await db.exec(`CREATE TABLE appointments(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name CHAR(200) NOT NULL,
            address CHAR(200),
            phone INT(20) NOT NULL,
            gender CHAR(1),
            birth_date INT(30),
            day INT(20) NOT NULL,
            time INT(20) NOT NULL,
            email CHAR(200) NOT NULL
        )`)
        await db.close()
    }
}

initDb.init()