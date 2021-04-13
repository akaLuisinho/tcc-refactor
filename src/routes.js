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

routes.get('/showAppointment', Appointment.showAppointment)

module.exports = routes