const axios = require('axios');

class OpenAiLib {
  constructor(apiKey) {
    this.urlList = {
      search: '',
    };

    this.completionsOptions = {
      best_of: 1,
      completions: 1,
      context: '',
      frequency_penalty: 0,
      length: 64,
      presence_penalty: 0,
      temperature: 0.7,
      top_p: 1,
    };

    this.requestOptions = {
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
    };
  }

  set generateUrl({ key, engine }) {
    this.urlList = {
      ...this.urlList,
      [key]: `https://api.openai.com/v1/engines/${engine}/${key}`,
    };
  }

  async search(engine, options) {
    this.generateUrl = { key: 'search', engine };

    const result = await axios.post(this.urlList.search, options, this.requestOptions);

    return result;
  }

  async completions(engine, options) {
    this.generateUrl = { key: 'completions', engine };

    const result = await axios.post(this.urlList.completions, options, this.requestOptions);

    console.log('DATA', result.data);

    return result;
  }
}

module.exports = OpenAiLib;
