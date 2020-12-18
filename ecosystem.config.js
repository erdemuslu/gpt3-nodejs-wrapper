module.exports = {
  apps: [
    {
      name: 'openai-app',
      script: './server/app.js',
      watch: true,
      ignore_watch: ['node_modules', '.cache', 'client/**/*', '.git'],
      env: {
        NODE_ENV: 'development',
      },
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],
};
