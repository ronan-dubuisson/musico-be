import dotenv from 'dotenv';

dotenv.config();

interface Server {
  port: number;
  nodeEnv: string;
}

const ServerConfig: Server = {
  port: Number(process.env.PORT) || 3000,
  nodeEnv: process.env.NODE_ENV || 'development',
};

export default ServerConfig;
