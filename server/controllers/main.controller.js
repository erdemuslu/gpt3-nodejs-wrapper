class MainController {
  main(req, res) {
    res.render('index');
  }
}

module.exports = new MainController();
