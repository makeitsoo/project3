const app = require('./server');

const server = app.listen(process.env.PORT || 3000, () => {
  console.log('💪🌎 The beast is alive!');
  console.log(`  👉 Please visit localhost:${server.address().port}`);
});
