const OpenAI = require('../lib/openai.lib');
const { OPEN_AI_API_KEY } = require('../config');

const openai = new OpenAI(OPEN_AI_API_KEY);

class AiController {
  async search(req, res) {
    const {
      engine = '',
      documents = [''],
      query = '',
    } = req.body;

    const result = await openai.search(engine, {
      documents,
      query,
    });

    const { data } = result.data;

    res.json({
      data,
      status: 200,
    });
  }

  async completions(req, res) {
    const { engine, ...options } = req.body;

    const result = await openai.completions(engine, options);

    res.json({
      data: result.data,
      status: 200,
    });
  }
}

module.exports = new AiController();
