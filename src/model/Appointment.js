const Database = require('../db/config')

module.exports = {
    async get() {
        const db = await Database()

        const data = await db.all(`SELECT * FROM appointments`)

        await db.close()

        return data
    },
    async create(data) {
        db = await Database()

        await db.run(`INSERT INTO appointments( name, address, phone, gender,  birth_date, dentist, day, time,  email) 
        VALUES( "${data.name}", "${data.address}", "${data.phone}", "${data.gender}", "${data.birth_date}", "${data.dentist}", "${data.day}", "${data.time}", "${data.email}")
        `)

        await db.close()
    },
    async update(newData, id) {
        const db = await Database()

        await db.run(`
        UPDATE appointments SET
            name = "${newData.name}",
            address = "${newData.address}",
            phone = "${newData.phone}",
            gender = "${newData.gender}",
            birth_date = "${newData.birth_date}",
            dentist = "${newData.dentist}",
            day = "${newData.day}",
            time = "${newData.time}",
            email = "${newData.email}"
        WHERE id = ${id}`)

        await db.close()
    },
    async delete(id) {
        const db = await Database()

        await db.run(`DELETE FROM appointments WHERE id = ${id}`)

        await db.close()
    },

    async getPacientByName(name) {
        const db = await Database()

        const searchedAppointment = await db.get(`SELECT * FROM appointments WHERE name LIKE '%${name}%'`)

        await db.close()

        return searchedAppointment
    }
}