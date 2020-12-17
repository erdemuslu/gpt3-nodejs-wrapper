const axios = require('axios');

class OpenAiLib {
  constructor(apiKey) {
    this.urlList = {
      search: '',
    };

    this.completionsDefaultOptions = {
      prompt: '',
      max_tokens: 5,
      temperature: 0.24,
    };

    this.requestOptions = {
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    };
  }

  set generateUrl({ key, engine = 'davinci' }) {
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
    try {
      this.generateUrl = { key: 'completions', engine };

      const newOptions = {
        ...this.completionsDefaultOptions,
        ...options,
      };

      const result = await axios.post(this.urlList.completions, newOptions, this.requestOptions);

      return result;
    } catch (err) {
      return {
        data: {
          err,
        },
      };
    }
  }

  async generate(engine, options) {
    try {
      this.generateUrl = { key: 'generate', engine };

      const result = await axios.post(this.urlList.generate, options, this.requestOptions);

      return result;
    } catch (err) {
      return {
        data: err,
      };
    }
  }
}

module.exports = OpenAiLib;
