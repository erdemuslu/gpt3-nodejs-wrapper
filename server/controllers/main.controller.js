class MainController {
  async main(req, res) {
    const result = await {
      data: 'HELLO!',
      status: 200,
    };

    res.json(result);
  }
}

module.exports = new MainController();
