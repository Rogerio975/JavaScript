class HomeController {
    getHome(req, res) {
        res.render('home');
    }
}

export default new HomeController();