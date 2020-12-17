module.exports = {
  apps: [
    {
      name: 'openai-app',
      script: './server/app.js',
      watch: true,
      ignore_watch: ['node_modules', '.cache', 'client/**/*', '.git'],
      env: {
        PORT: 8282,
        NODE_ENV: 'development',
      },
      env_production: {
        PORT: 8282,
        NODE_ENV: 'production',
      },
    },
  ],
};
