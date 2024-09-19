import { Inject, Injectable } from '@nestjs/common';
import * as schema from '../db/schema';
import { MySql2Database } from 'drizzle-orm/mysql2';
import { eq } from 'drizzle-orm';

@Injectable()
export class UserRepository {
  constructor(@Inject('DB_PROD') private db: MySql2Database<typeof schema>) {}

  async findAll() {
    const users = await this.db.query.users.findMany();
    return users;
  }

  async findOne(filter: any) {
    const [key, value] = Object.entries(filter)[0];
    const users = await this.db.query.users.findMany({
      where: eq(schema.users[key], value),
    });
    return users[0] || null;
  }

  async create(user: any) {
    const [insertedId] = await this.db
      .insert(schema.users)
      .values(user)
      .$returningId();
    const newUser = await this.db.query.users.findMany({
      where: eq(schema.users.id, insertedId.id),
    });
    return newUser[0] || null;
  }

  async findById(id: string) {
    // Convert the string id to a number
    // Might need to fix this to allow for string ids
    const numericId = parseInt(id, 10);
    if (isNaN(numericId)) {
      throw new Error('Invalid ID format');
    }
    const users = await this.db.query.users.findMany({
      where: eq(schema.users.id, numericId),
    });
    return users[0] || null;
  }
}
