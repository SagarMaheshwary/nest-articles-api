export default () => ({
  env: process.env.APP_ENV,
  port: parseInt(process.env.APP_PORT),
  database: {
    connection: process.env.DB_CONNECTION,
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    dbname: process.env.DB_DATABASE,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
  },
});
