import App from './app';
import config from './config/config';
import RootRouter from './routes';
import ConnectDatabase from './utils/DatabaseConnection';

App.get('/', (req, res) => {
  res.send('App is working fine');
});

const Main = async () => {
  const { PORT } = config;

  App.use('/api', RootRouter);

  try {
    App.listen(PORT, () => console.log('Server is listening on port: ', PORT));
    ConnectDatabase();
  } catch (err) {
    console.log(err);
  }
};

Main();
