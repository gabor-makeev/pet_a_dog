import {QueryResult} from "@vercel/postgres";

export type Dog = {
	id: number;
	name: string;
	image_url: string;
}

export type DogsQueryResult = QueryResult<Dog>