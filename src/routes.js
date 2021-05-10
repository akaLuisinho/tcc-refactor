const express = require('express')
const routes = express.Router()

const Appointment = require('./controllers/AppointmentController')
const Static = require('./controllers/StaticController')
const Login = require('./controllers/AuthController')


routes.get('/', Static.indexShow)
routes.get('/dentists', Static.dentistShow)
routes.get('/about', Static.aboutShow)

routes.get('/appointment', Appointment.makeAppointmentShow)
routes.post('/appointment', Appointment.makeAppointment)

routes.get('/login', Login.authShow)
routes.post('/login', Login.auth)
routes.post('/logout', Login.logout)

routes.get('/showAppointments', Appointment.showAppointments)
routes.post('/showAppointments', Appointment.searchAppointments)

routes.get('/editAppointment/:id', Appointment.editAppointmentShow)
routes.post('/editAppointment/:id', Appointment.editAppointment)
routes.post('/deleteAppointment/:id', Appointment.deleteAppointment)

module.exports = routes