interface Database {
  host: string | undefined;
  user: string | undefined;
  password: string | undefined;
  database: string | undefined;
}

const databaseConfig: Database = {
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PSW,
  database: process.env.MYSQL_DATABASE,
};

export default databaseConfig;
