import type { Config } from 'drizzle-kit';
import config from 'src/config';

const { dbHost, dbUser, dbPassword, dbName } = config;

console.log('dbHost', dbHost);
export default {
  schema: './src/modules/db/schema.ts',
  out: './src/modules/db/migrations',
  dialect: 'mysql',
  dbCredentials: {
    host: dbHost,
    user: dbUser,
    password: dbPassword,
    database: dbName,
  },
} satisfies Config;
