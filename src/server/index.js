const app = require('./app');
const config = require('../config');

const PORT = config.get('server.ports.http') || process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server listening on PORT --> ${PORT}`);
});
