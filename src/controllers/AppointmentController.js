const Appointment = require('../model/Appointment')

module.exports = {
    makeAppointmentShow(req, res) {
        return res.render('appointment')
    },
    async makeAppointment(req, res) {
        const data = req.body
        await Appointment.create(data)

        res.redirect('appointment')
    },
    async showAppointments(req, res) {
        const data = await Appointment.get()

        return res.render('showAppointments', { data })
    },
    async editAppointmentShow(req, res) {
        const appointments = await Appointment.get()

        const id = req.params.id
        const editingAppointment = appointments.find(a => a.id == id)

        return res.render('editAppointment', { data: editingAppointment })
    },
    async editAppointment(req, res) {
        const appointments = await Appointment.get()

        const newData = req.body

        const id = req.params.id

        await Appointment.update(newData, id)
        
        return res.redirect('/showAppointments')
    }
}