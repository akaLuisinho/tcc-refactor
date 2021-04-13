const Database = require('../db/config')

module.exports = {
    makeAppointmentShow(req, res) {
        return res.render('appointment')
    },
    async makeAppointment(req, res) {
        const data = req.body

        db = await Database()
        await db.run(`INSERT INTO appointments(
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
            "${data.name}",
            "${data.address}",
            "${data.phone}",
           "${data.gender}",
            "${data.birth_date}",
            "${data.dentist}",
            "${data.day}",
            "${data.time}",
            "${data.email}"
        )` )
        await db.close()

        res.redirect('appointment')
    },
    showAppointment(req, res) {

    }
}