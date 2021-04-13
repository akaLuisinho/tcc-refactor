const Database = require('../db/config')

module.exports = {
    authShow(req, res) {
        res.render('login')
    },
    async auth(req, res){
        const username = req.body.username
        const password = req.body.password

        db = await Database()
        const userData = await db.get(`SELECT * FROM login WHERE username = '${username}' AND password = '${password}'`)
        await db.close()

        if(userData.username == username && userData.password == password){
           return res.redirect('showAppointment')
        } else{
            return res.redirect('login')
        }
    }
}