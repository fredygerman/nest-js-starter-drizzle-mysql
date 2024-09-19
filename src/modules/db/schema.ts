import { mysqlTable, serial, varchar } from 'drizzle-orm/mysql-core';

export const books = mysqlTable('Books', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 256 }),
});

export const authors = mysqlTable('Authors', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 256 }),
});

export const users = mysqlTable('Users', {
  id: serial('id').primaryKey(),
  first_name: varchar('first_name', { length: 256 }),
  last_name: varchar('last_name', { length: 256 }),
  email: varchar('email', { length: 256 }),
  password: varchar('password', { length: 256 }),
  created_at: varchar('created_at', { length: 256 }),
  updated_at: varchar('updated_at', { length: 256 }),
});
