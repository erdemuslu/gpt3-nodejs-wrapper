import React, { useEffect } from 'react';

const App = () => {
  useEffect(() => {
    console.log('App rendered');
  }, []);

  return (
    <div className="app">
      <img className="logo" src="assets/openai-logo.png" alt="openai-logo" />
      <h1>OpenAI React App</h1>
    </div>
  );
};

export default App;
