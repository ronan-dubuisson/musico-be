import Server from '@config/config.server';
import makeApp from '@src/app';

const app = makeApp();
app.listen(Server.port, () => {
  console.log(`Server running on port ${Server.port}...`);
});
