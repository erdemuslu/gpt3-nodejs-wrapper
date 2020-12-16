import React, { useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const handleSearchReq = async () => {
    try {
      const result = await axios.post('/ai/search', {
        engine: 'davinci',
        documents: [
          'White House',
          'hospital',
          'school',
        ],
        query: 'teacher',
      });

      return result;
    } catch (err) {
      return err;
    }
  };

  const handleSearch = async () => {
    const response = await handleSearchReq();

    console.log('response', response.data.data);
  };

  const handleCompletionsReq = async () => {
    try {
      const result = await axios.post('/ai/completions', {
        engine: 'davinci',
        prompt: 'Where is my',
        max_tokens: 5,
      });

      return result;
    } catch (err) {
      return err;
    }
  };

  const handleCompletions = async () => {
    const response = await handleCompletionsReq();

    console.log('response', response.data.data);
  };

  useEffect(() => {
    console.log('App rendered');
  }, []);

  return (
    <div className="app">
      <div className="app-header">
        <img className="logo" src="assets/openai-logo.png" alt="openai-logo" />
        <h1>OpenAI React App</h1>
      </div>
      <div className="app-cta">
        <button
          type="button"
          onClick={handleSearch}
        >
          Send Search Request
        </button>
        <button
          type="button"
          onClick={handleCompletions}
        >
          Send Completions Request
        </button>
      </div>
    </div>
  );
};

export default App;
