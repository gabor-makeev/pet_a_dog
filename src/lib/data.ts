import { sql } from '@vercel/postgres';

export const fetchDogs = async () => {
	const data = await sql`SELECT * FROM dogs`;

	return data.rows;
}