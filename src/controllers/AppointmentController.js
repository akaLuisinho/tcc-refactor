module.exports = {
    makeAppointmentShow(req, res) {
        return res.render('appointment')
    },
    makeAppointment(req, res) {
        console.log(req.body);











        
        res.redirect('appointment')
    }
}