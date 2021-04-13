const express = require('express')
const routes = express.Router()
const Appointment = require('./controllers/AppointmentController')
const Static = require('./controllers/StaticController')
const Login = require('./controllers/AuthController')


routes.get('/', Static.indexShow)
routes.get('/dentistas', Static.dentistShow)
routes.get('/sobre', Static.aboutShow)

routes.get('/consulta', Appointment.makeAppointmentShow)
routes.post('/consulta', Appointment.makeAppointment)

routes.get('/login', Login.authShow)
module.exports = routes