import { drizzle } from 'drizzle-orm/mysql2';
import mysql from 'mysql2/promise';
import * as schema from './schema';
import * as dotenv from 'dotenv';

dotenv.config();

const poolConnection = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

const db = drizzle<typeof schema>(poolConnection);

const main = async () => {
  try {
    console.log('Seeding database');
    // Delete all data
    await db.delete(schema.users);
  } catch (err) {
    console.error(err);
  } finally {
    await poolConnection.end();
  }
};

main();
