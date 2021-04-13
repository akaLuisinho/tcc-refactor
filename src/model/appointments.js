const { create } = require('eslint/lib/rules/*')
const Database = require('../db/config')

module.exports = {
    async get() {
        db = await Database()
        
        const data = db.get(`SELECT * FROM appointments`)
        
        db.close()

        return data
    },
    async create(data) {
        db = await Database()

        db.run(`INSERT INTO TABLE appointments(
            name,
            address,
            phone,
            gender,
            birth_date,
            dentist,
            day,
            time,
            email
        ) VALUES(
            ${data.name},
            ${data.address},
            ${data.phone},
            ${data.gender},
            ${data.birth_date},
            ${data.dentist},
            ${data.day},
            ${data.time},
            ${data.email}
        )`)
        db.close()
    },
    async update(newData, id) {
        db = await Database()

        db.run(`UPDATE appointments set(
            name,
            address,
            phone,
            gender,
            birth_date,
            dentist,
            day,
            time,
            email
        ) VALUES(
            ${newData.name},
            ${newData.address},
            ${newData.phone},
            ${newData.gender},
            ${newData.birth_date},
            ${newData.dentist},
            ${newData.day},
            ${newData.time},
            ${newData.email}
        ) WHERE id = ${id}`)
        db.close()

    },
    async delete(id) {
        db = await Database()

        db.run(`DELETE FROM appointments WHERE id = ${id}`)
        db.close()
    }
}