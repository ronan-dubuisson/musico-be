import Server from './config/config.server';
import makeApp from './app';
import dotenv from 'dotenv';

dotenv.config();

const app = makeApp();
app.listen(Server.port, () => {
  console.log(`Server running on port ${Server.port}...`);
});
