const axios = require('axios');

class OpenAiLib {
  constructor(apiKey) {
    this.apiKey = apiKey;

    this.urlList = {
      search: '',
    };

    this.options = {
      best_of: 1,
      completions: 1,
      context: '',
      frequency_penalty: 0,
      length: 64,
      presence_penalty: 0,
      temperature: 0.7,
      top_p: 1,
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

    const requestOptions = {
      headers: {
        Authorization: `Bearer ${this.apiKey}`,
        'Content-Type': 'application/json',
      },
    };

    const result = await axios.post(this.urlList.search, options, requestOptions);

    return result;
  }
}

module.exports = OpenAiLib;
