import React, { useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const handlePostReq = async () => {
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

  const onClick = async () => {
    const response = await handlePostReq();

    console.log('response', response);
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
          onClick={onClick}
        >
          Send Request
        </button>
      </div>
    </div>
  );
};

export default App;
