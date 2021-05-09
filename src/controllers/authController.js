const Auth = require('../model/Auth')

var validated = false

function logout(req, res) {
    validated = false

    return res.redirect('/')
}

function authShow(req, res) {
    res.render('login')
}

async function auth(req, res) {
    const username = req.body.username
    const password = req.body.password
    const users = await Auth.get()

    const validatingUser = users.find(user => user.username === username && user.password === password)

    if (validatingUser == undefined) {
        return res.redirect('login')
    } else {
        validated = true
        return getValidate(), res.redirect('showAppointments')
    }

}

function getValidate() {
    return validated
}

module.exports = { authShow, auth, getValidate, logout }