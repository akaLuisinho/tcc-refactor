module.exports = {
    makeAppointmentShow(req, res) {
        return res.render('consulta')
    },
    makeAppointment(req, res) {
        console.log(req.body);
        res.redirect('consulta')
    }
}