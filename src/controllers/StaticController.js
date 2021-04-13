module.exports = {
    indexShow(req, res, ){
        return res.render('index')
    },
    aboutShow (req, res) {
        return res.render('about')
    },
    dentistShow (req, res) {
        return res.render('dentists')
    }
}