module.exports = {
    indexShow(req, res, ){
        return res.render('index')
    },
    aboutShow (req, res) {
        return res.render('sobre')
    },
    dentistShow (req, res) {
        return res.render('dentistas')
    }
}