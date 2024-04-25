import { faker } from "@faker-js/faker";
import { dbSetup } from "src/database";
import bcryptjs from 'bcryptjs'
const saltRounds = 10;//количество раундов хеширования

export async function generateData() {
    const db = await dbSetup();
    const hashedPassword = await bcryptjs.hash('test', saltRounds);
    await db.run('INSERT INTO users (fullName, login, password) VALUES (?, ?, ?)', ['Test User', 'test', hashedPassword]);
    console.log('Data generation complete.');

    db.close();
}

generateData().catch(console.error);
