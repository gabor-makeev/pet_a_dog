import { sql } from '@vercel/postgres';
import { DogsQueryResult } from "@/types/dog";

export const fetchDogs = async () => {
	const data: DogsQueryResult = await sql`SELECT * FROM dogs`;

	return data.rows;
}