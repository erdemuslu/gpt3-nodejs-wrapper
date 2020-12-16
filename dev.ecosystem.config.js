module.exports = {
  apps: [
    {
      name: 'openai-app',
      script: 'server/app.js',
      ignore_watch: ['node_modules', 'client/**/*', '.git'],
      watch: true,
      env_development: {
        NODE_ENV: 'development',
      },
    },
  ],
};
