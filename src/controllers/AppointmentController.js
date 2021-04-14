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
    async showAppointments(req, res) {
        const db = await Database()
        const data = await db.all(`SELECT * FROM appointments`)
        db.close()

        return res.render('showAppointments', { data })
    },
    async editAppointmentShow(req, res) {
        const id = req.params.id

        db = await Database()
        const editingAppointment = await db.all(`SELECT * FROM appointments WHERE id = ${id}`)
        await db.close()
        console.log(editingAppointment);
        return res.render('editAppointment', { data: editingAppointment })
    },
    async editAppointment(req, res) {
        const id = req.params.id
        const data = req.body

        db = await Database()
        const editingAppointment = await db.update(`UPDATE appointments SET(
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
        ) WHERE id = ${id}`)
        await db.close()

        return res.render('editAppointment', { data: editingAppointment })
    }
}