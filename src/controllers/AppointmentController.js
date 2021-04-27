const Appointment = require('../model/Appointment')
const Auth = require('./AuthController')

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
        if(Auth.getValidate()){
            const data = await Appointment.get()
            return res.render('showAppointments', { data })
        } else {
            res.redirect('login')
        }
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
    },
    async deleteAppointment(req, res) {
        const id = req.params.id

        await Appointment.delete(id)

        return res.redirect('/showAppointments')
    }
}