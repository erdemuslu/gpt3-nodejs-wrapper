class MainController {
  async main(req, res) {
    const result = await 'Hello API';

    res.send(result);
  }
}

module.exports = new MainController();
